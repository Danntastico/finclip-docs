import Firecrawl from '@mendable/firecrawl-js';
import { getConfig } from '../config/config.js';
import { withRateLimit } from './rateLimiter.js';
import logger from '../utils/logger.js';

const config = getConfig();

/**
 * Initialize Firecrawl client
 */
let firecrawlClient = null;

/**
 * Get or create Firecrawl client instance
 * @returns {Firecrawl} Firecrawl client instance
 */
function getFirecrawlClient() {
  if (!firecrawlClient) {
    if (!config.firecrawl.apiKey) {
      throw new Error('FIRECRAWL_API_KEY is required. Please set it in .env file.');
    }
    
    firecrawlClient = new Firecrawl({ apiKey: config.firecrawl.apiKey });
    logger.info('Firecrawl client initialized');
  }
  
  return firecrawlClient;
}

/**
 * Sleep/delay function
 * @param {number} ms - Milliseconds to sleep
 * @returns {Promise<void>}
 */
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Check if error is retryable
 * @param {Error} error - Error to check
 * @returns {boolean} True if error is retryable
 */
function isRetryableError(error) {
  if (!error) return false;

  const errorMessage = error.message || error.toString();
  const errorStatus = error.status || error.statusCode;

  // Network errors (timeout, ECONNRESET, etc.)
  if (error.code === 'ETIMEDOUT' || 
      error.code === 'ECONNRESET' || 
      error.code === 'ENOTFOUND' ||
      error.code === 'ECONNREFUSED') {
    return true;
  }

  // Rate limit errors (429)
  if (errorStatus === 429) {
    return true;
  }

  // Server errors (5xx)
  if (errorStatus >= 500 && errorStatus < 600) {
    return true;
  }

  // Temporary errors from Firecrawl API
  if (errorMessage.includes('rate limit') || 
      errorMessage.includes('too many requests') ||
      errorMessage.includes('temporary') ||
      errorMessage.includes('timeout')) {
    return true;
  }

  return false;
}

/**
 * Scrape a single URL with retry logic
 * @param {string} url - URL to scrape
 * @param {Object} options - Scraping options
 * @param {number} attempt - Current attempt number (for retries)
 * @returns {Promise<Object>} Scraped content with metadata
 */
async function scrapeUrlWithRetry(url, options = {}, attempt = 1) {
  const maxAttempts = config.scraping.retryAttempts;
  const initialDelay = config.scraping.retryDelay;

  try {
    logger.debug(`Scraping URL (attempt ${attempt}/${maxAttempts}): ${url}`);

    // Execute with rate limiting
    const result = await withRateLimit(async () => {
      const client = getFirecrawlClient();
      
      // Scrape with markdown format
      const scrapeOptions = {
        formats: ['markdown'],
        ...options,
      };

      const response = await client.scrapeUrl(url, scrapeOptions);
      return response;
    });

    // Extract markdown content from response
    let markdown = '';
    if (result.markdown) {
      markdown = result.markdown;
    } else if (result.data?.markdown) {
      markdown = result.data.markdown;
    } else if (typeof result === 'string') {
      markdown = result;
    } else {
      logger.warn(`Unexpected response format for URL: ${url}`, { result });
      markdown = JSON.stringify(result, null, 2);
    }

    logger.info(`Successfully scraped URL: ${url}`, { 
      attempt, 
      contentLength: markdown.length 
    });

    return {
      url,
      markdown,
      metadata: result.metadata || {},
      success: true,
    };
  } catch (error) {
    const isRetryable = isRetryableError(error);
    const isLastAttempt = attempt >= maxAttempts;

    logger.warn(`Failed to scrape URL (attempt ${attempt}/${maxAttempts}): ${url}`, {
      error: error.message,
      retryable: isRetryable,
      isLastAttempt,
    });

    // If not retryable or last attempt, throw error
    if (!isRetryable || isLastAttempt) {
      logger.error(`Failed to scrape URL after ${attempt} attempt(s): ${url}`, {
        error: error.message,
        stack: error.stack,
      });
      
      return {
        url,
        markdown: '',
        metadata: {},
        success: false,
        error: error.message,
        attempts: attempt,
      };
    }

    // Calculate exponential backoff delay
    const delay = initialDelay * Math.pow(2, attempt - 1);
    logger.debug(`Retrying after ${delay}ms (exponential backoff)`);

    // Wait before retry
    await sleep(delay);

    // Retry
    return scrapeUrlWithRetry(url, options, attempt + 1);
  }
}

/**
 * Scrape a single URL
 * @param {string} url - URL to scrape
 * @param {Object} options - Scraping options
 * @returns {Promise<Object>} Scraped content with metadata
 */
export async function scrapeUrl(url, options = {}) {
  if (!url || typeof url !== 'string') {
    throw new Error('URL is required and must be a string');
  }

  return scrapeUrlWithRetry(url, options);
}

/**
 * Scrape multiple URLs (batch processing)
 * @param {string[]} urls - Array of URLs to scrape
 * @param {Object} options - Scraping options
 * @param {Function} onProgress - Progress callback (url, result, index, total)
 * @returns {Promise<Array>} Array of scraped results
 */
export async function scrapeUrls(urls, options = {}, onProgress = null) {
  if (!Array.isArray(urls) || urls.length === 0) {
    return [];
  }

  logger.info(`Starting batch scrape of ${urls.length} URLs`);

  const results = [];
  const total = urls.length;

  for (let i = 0; i < urls.length; i++) {
    const url = urls[i];
    const result = await scrapeUrl(url, options);
    results.push(result);

    // Call progress callback if provided
    if (onProgress && typeof onProgress === 'function') {
      onProgress(url, result, i + 1, total);
    }
  }

  const successCount = results.filter(r => r.success).length;
  const failureCount = results.length - successCount;

  logger.info(`Batch scrape completed`, {
    total: results.length,
    success: successCount,
    failed: failureCount,
  });

  return results;
}

/**
 * Test Firecrawl connection
 * @returns {Promise<boolean>} True if connection successful
 */
export async function testConnection() {
  try {
    const client = getFirecrawlClient();
    // Try scraping a simple page (Firecrawl homepage)
    const testUrl = 'https://firecrawl.dev';
    logger.info('Testing Firecrawl connection...');
    
    const result = await scrapeUrl(testUrl);
    
    if (result.success) {
      logger.info('Firecrawl connection test successful');
      return true;
    } else {
      logger.error('Firecrawl connection test failed', { error: result.error });
      return false;
    }
  } catch (error) {
    logger.error('Firecrawl connection test failed', { error: error.message });
    return false;
  }
}

export default {
  scrapeUrl,
  scrapeUrls,
  testConnection,
};


