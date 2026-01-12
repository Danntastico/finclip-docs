import { scrapeUrl } from './firecrawlService.js';
import { saveContent } from '../utils/contentSaver.js';
import { getConfig } from '../config/config.js';
import logger from '../utils/logger.js';

const config = getConfig();

/**
 * Process a single URL (scrape and save)
 * @param {string} url - URL to process
 * @param {string} category - Category name
 * @param {Object} options - Processing options
 * @returns {Promise<Object>} Processing result
 */
async function processUrl(url, category, options = {}) {
  const { overwrite = false } = options;

  try {
    logger.debug(`Processing URL: ${url} (category: ${category})`);

    // Scrape URL
    const scrapeResult = await scrapeUrl(url, options.scrapeOptions || {});

    // Save content
    const saveResult = await saveContent(scrapeResult, category, overwrite);

    return {
      url,
      category,
      success: scrapeResult.success && saveResult.success,
      scrapeSuccess: scrapeResult.success,
      saveSuccess: saveResult.success,
      filePath: saveResult.filePath,
      relativePath: saveResult.relativePath,
      error: scrapeResult.error || saveResult.error || null,
      attempts: scrapeResult.attempts || 1,
    };
  } catch (error) {
    logger.error(`Failed to process URL: ${url}`, {
      error: error.message,
      category,
      stack: error.stack,
    });

    return {
      url,
      category,
      success: false,
      scrapeSuccess: false,
      saveSuccess: false,
      filePath: null,
      relativePath: null,
      error: error.message,
      attempts: 1,
    };
  }
}

/**
 * Process URLs with concurrency control
 * @param {string[]} urls - Array of URLs to process
 * @param {string} category - Category name
 * @param {Object} options - Processing options
 * @param {Function} onProgress - Progress callback (result, index, total)
 * @returns {Promise<Array>} Array of processing results
 */
export async function processUrls(urls, category, options = {}, onProgress = null) {
  if (!Array.isArray(urls) || urls.length === 0) {
    return [];
  }

  const maxConcurrent = options.maxConcurrent || config.scraping.maxConcurrent;
  const overwrite = options.overwrite || false;
  const total = urls.length;

  logger.info(`Starting batch processing for category: ${category}`, {
    category,
    totalUrls: total,
    maxConcurrent,
    overwrite,
  });

  const results = [];
  const executing = [];

  // Process URLs with concurrency limit
  for (let i = 0; i < total; i++) {
    const url = urls[i];
    const index = i;

    // Create processing promise
    const promise = processUrl(url, category, { overwrite, ...options })
      .then(result => {
        results[index] = result;
        
        // Call progress callback
        if (onProgress && typeof onProgress === 'function') {
          onProgress(result, index + 1, total);
        }

        return result;
      })
      .catch(error => {
        logger.error(`Unexpected error processing URL: ${url}`, {
          error: error.message,
          category,
        });

        // Add error result
        const errorResult = {
          url,
          category,
          success: false,
          scrapeSuccess: false,
          saveSuccess: false,
          filePath: null,
          relativePath: null,
          error: error.message,
          attempts: 1,
        };

        results[index] = errorResult;

        // Call progress callback
        if (onProgress && typeof onProgress === 'function') {
          onProgress(errorResult, index + 1, total);
        }

        return errorResult;
      })
      .finally(() => {
        // Remove from executing array
        const promiseIndex = executing.indexOf(promise);
        if (promiseIndex > -1) {
          executing.splice(promiseIndex, 1);
        }
      });

    // Add to executing array
    executing.push(promise);

    // If we've reached concurrency limit, wait for one to complete
    if (executing.length >= maxConcurrent) {
      await Promise.race(executing);
    }
  }

  // Wait for all remaining promises to complete
  await Promise.all(executing);

  // Calculate statistics
  const successCount = results.filter(r => r.success).length;
  const failureCount = results.length - successCount;
  const scrapeFailures = results.filter(r => !r.scrapeSuccess).length;
  const saveFailures = results.filter(r => r.scrapeSuccess && !r.saveSuccess).length;

  logger.info(`Batch processing completed for category: ${category}`, {
    category,
    total: results.length,
    success: successCount,
    failed: failureCount,
    scrapeFailures,
    saveFailures,
  });

  return results;
}

/**
 * Process a category (scrape and save all URLs in category)
 * @param {Object} categoryData - Category data with { category, urls: [] }
 * @param {Object} options - Processing options
 * @param {Function} onProgress - Progress callback (result, categoryIndex, totalCategories, urlIndex, totalUrls)
 * @returns {Promise<Object>} Processing result with statistics
 */
export async function processCategory(categoryData, options = {}, onProgress = null) {
  const { category, urls } = categoryData;

  if (!category || !Array.isArray(urls) || urls.length === 0) {
    logger.warn(`Invalid category data: ${category}`, { urls: urls?.length || 0 });
    return {
      category,
      totalUrls: 0,
      success: 0,
      failed: 0,
      results: [],
    };
  }

  logger.info(`Processing category: ${category}`, {
    category,
    urlCount: urls.length,
  });

  // Create progress callback wrapper
  const categoryProgressCallback = onProgress
    ? (result, urlIndex, totalUrls) => {
        // Call original callback with category info
        onProgress(result, null, null, urlIndex, totalUrls, category);
      }
    : null;

  // Process URLs
  const results = await processUrls(
    urls,
    category,
    options,
    categoryProgressCallback
  );

  // Calculate statistics
  const successCount = results.filter(r => r.success).length;
  const failureCount = results.length - successCount;

  return {
    category,
    totalUrls: results.length,
    success: successCount,
    failed: failureCount,
    results,
  };
}

/**
 * Process multiple categories
 * @param {Array} categoriesData - Array of category data objects
 * @param {Object} options - Processing options
 * @param {Function} onProgress - Progress callback (result, categoryIndex, totalCategories, urlIndex, totalUrls)
 * @returns {Promise<Array>} Array of category processing results
 */
export async function processCategories(categoriesData, options = {}, onProgress = null) {
  if (!Array.isArray(categoriesData) || categoriesData.length === 0) {
    return [];
  }

  logger.info(`Starting batch processing for ${categoriesData.length} categories`);

  const results = [];
  const totalCategories = categoriesData.length;

  for (let i = 0; i < categoriesData.length; i++) {
    const categoryData = categoriesData[i];

    // Create progress callback wrapper
    const categoryProgressCallback = onProgress
      ? (result, urlIndex, totalUrls, category) => {
          onProgress(result, i + 1, totalCategories, urlIndex, totalUrls, category);
        }
      : null;

    // Process category
    const categoryResult = await processCategory(
      categoryData,
      options,
      categoryProgressCallback
    );

    results.push(categoryResult);

    logger.info(`Completed category ${i + 1}/${totalCategories}: ${categoryData.category}`, {
      category: categoryData.category,
      success: categoryResult.success,
      failed: categoryResult.failed,
    });
  }

  // Calculate overall statistics
  const totalUrls = results.reduce((sum, r) => sum + r.totalUrls, 0);
  const totalSuccess = results.reduce((sum, r) => sum + r.success, 0);
  const totalFailed = results.reduce((sum, r) => sum + r.failed, 0);

  logger.info(`Batch processing completed for all categories`, {
    totalCategories: results.length,
    totalUrls,
    totalSuccess,
    totalFailed,
  });

  return results;
}

