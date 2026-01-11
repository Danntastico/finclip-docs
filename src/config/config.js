import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { existsSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load environment variables
dotenv.config();

/**
 * Application configuration
 */
const config = {
  // Firecrawl API configuration
  firecrawl: {
    apiKey: process.env.FIRECRAWL_API_KEY || '',
    baseUrl: process.env.FIRECRAWL_BASE_URL || 'https://api.firecrawl.dev',
  },

  // Paths
  paths: {
    sitemapDir: join(process.cwd(), 'sitemap-en'),
    outputDir: process.env.OUTPUT_DIR || join(process.cwd(), 'fin-clip'),
    logsDir: join(process.cwd(), 'logs'),
    logFile: process.env.LOG_FILE || join(process.cwd(), 'logs', 'scraper.log'),
  },

  // Logging configuration
  logging: {
    level: process.env.LOG_LEVEL || 'INFO',
    console: process.env.LOG_CONSOLE !== 'false',
    file: process.env.LOG_FILE !== 'false',
  },

  // Scraping configuration
  scraping: {
    maxConcurrent: 2, // Max concurrent requests (Free plan limit)
    rateLimitPerMinute: 10, // Requests per minute for /scrape endpoint
    retryAttempts: 3, // Number of retry attempts for failed requests
    retryDelay: 1000, // Initial retry delay in ms (exponential backoff)
  },
};

/**
 * Validate configuration
 * @throws {Error} If required configuration is missing
 */
export function validateConfig() {
  const errors = [];

  // Validate API key
  if (!config.firecrawl.apiKey || config.firecrawl.apiKey === 'your_firecrawl_api_key_here') {
    errors.push('FIRECRAWL_API_KEY is required. Please set it in .env file.');
  }

  // Validate sitemap directory exists
  if (!existsSync(config.paths.sitemapDir)) {
    errors.push(`Sitemap directory not found: ${config.paths.sitemapDir}`);
  }

  if (errors.length > 0) {
    throw new Error(`Configuration errors:\n${errors.join('\n')}`);
  }
}

/**
 * Get configuration object
 * @returns {Object} Configuration object
 */
export function getConfig() {
  return config;
}

export default config;

