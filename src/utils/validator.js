import { existsSync, statSync, accessSync, constants } from 'fs';
import { dirname } from 'path';
import { getConfig } from '../config/config.js';
import logger from './logger.js';
import { ErrorType } from './errorHandler.js';

const config = getConfig();

/**
 * Validation errors
 */
export class ValidationError extends Error {
  constructor(message, field = null) {
    super(message);
    this.name = 'ValidationError';
    this.field = field;
  }
}

/**
 * Validate API key
 * @returns {void}
 * @throws {ValidationError} If API key is invalid
 */
export function validateApiKey() {
  const apiKey = config.firecrawl.apiKey;

  if (!apiKey || apiKey === '' || apiKey === 'your_firecrawl_api_key_here') {
    throw new ValidationError(
      'FIRECRAWL_API_KEY is required. Please set it in your .env file.',
      'apiKey'
    );
  }

  // Check if API key format looks valid (Firecrawl keys typically start with 'fc-')
  if (!apiKey.startsWith('fc-') && apiKey.length < 10) {
    logger.warn('API key format may be invalid (expected format: fc-...)');
  }

  logger.debug('API key validation passed');
}

/**
 * Validate output directory
 * @returns {void}
 * @throws {ValidationError} If output directory is invalid
 */
export function validateOutputDirectory() {
  const outputDir = config.paths.outputDir;

  if (!outputDir) {
    throw new ValidationError('Output directory is not configured', 'outputDir');
  }

  try {
    // Check if directory exists
    if (existsSync(outputDir)) {
      // Check if it's a directory
      const stats = statSync(outputDir);
      if (!stats.isDirectory()) {
        throw new ValidationError(
          `Output path exists but is not a directory: ${outputDir}`,
          'outputDir'
        );
      }

      // Check write permissions
      try {
        accessSync(outputDir, constants.W_OK);
      } catch (error) {
        throw new ValidationError(
          `Output directory is not writable: ${outputDir}`,
          'outputDir'
        );
      }
    } else {
      // Directory doesn't exist - will be created later
      // Check if parent directory exists and is writable
      const parentDir = dirname(outputDir);
      if (parentDir && parentDir !== outputDir) {
        if (!existsSync(parentDir)) {
          throw new ValidationError(
            `Parent directory does not exist: ${parentDir}`,
            'outputDir'
          );
        }
        try {
          accessSync(parentDir, constants.W_OK);
        } catch (error) {
          throw new ValidationError(
            `Parent directory is not writable: ${parentDir}`,
            'outputDir'
          );
        }
      }
    }

    logger.debug('Output directory validation passed', { outputDir });
  } catch (error) {
    if (error instanceof ValidationError) {
      throw error;
    }
    throw new ValidationError(
      `Failed to validate output directory: ${error.message}`,
      'outputDir'
    );
  }
}

/**
 * Check available disk space (approximate)
 * @param {number} requiredBytes - Required bytes (optional)
 * @returns {Promise<Object>} Disk space information
 */
export async function checkDiskSpace(requiredBytes = 0) {
  try {
    const { statfs } = await import('fs/promises');
    const outputDir = config.paths.outputDir;
    const parentDir = existsSync(outputDir) ? outputDir : dirname(outputDir);

    // For Windows, statfs may not be available
    // This is a simplified check
    const stats = await statfs(parentDir).catch(() => null);

    if (stats) {
      const availableBytes = stats.bavail * stats.bsize;
      const hasSpace = availableBytes >= requiredBytes;

      logger.debug('Disk space check', {
        availableBytes,
        requiredBytes,
        hasSpace,
      });

      return {
        available: availableBytes,
        required: requiredBytes,
        hasSpace,
      };
    }

    // Fallback: assume sufficient space (Windows doesn't support statfs easily)
    logger.debug('Disk space check skipped (platform limitation)');
    return {
      available: null,
      required: requiredBytes,
      hasSpace: true, // Assume sufficient space
    };
  } catch (error) {
    // If disk space check fails, log warning but don't fail
    logger.warn('Failed to check disk space', { error: error.message });
    return {
      available: null,
      required: requiredBytes,
      hasSpace: true, // Assume sufficient space
    };
  }
}

/**
 * Validate sitemap directory
 * @returns {void}
 * @throws {ValidationError} If sitemap directory is invalid
 */
export function validateSitemapDirectory() {
  const sitemapDir = config.paths.sitemapDir;

  if (!sitemapDir) {
    throw new ValidationError('Sitemap directory is not configured', 'sitemapDir');
  }

  if (!existsSync(sitemapDir)) {
    throw new ValidationError(
      `Sitemap directory does not exist: ${sitemapDir}`,
      'sitemapDir'
    );
  }

  const stats = statSync(sitemapDir);
  if (!stats.isDirectory()) {
    throw new ValidationError(
      `Sitemap path exists but is not a directory: ${sitemapDir}`,
      'sitemapDir'
    );
  }

  logger.debug('Sitemap directory validation passed', { sitemapDir });
}

/**
 * Run all validation checks
 * @param {Object} options - Validation options
 * @returns {Promise<void>}
 * @throws {ValidationError} If any validation fails
 */
export async function validateAll(options = {}) {
  const { checkDisk = false, requiredBytes = 0 } = options;

  logger.info('Running validation checks...');

  try {
    // Validate API key
    validateApiKey();

    // Validate sitemap directory
    validateSitemapDirectory();

    // Validate output directory
    validateOutputDirectory();

    // Check disk space (optional)
    if (checkDisk) {
      await checkDiskSpace(requiredBytes);
    }

    logger.info('All validation checks passed');
  } catch (error) {
    if (error instanceof ValidationError) {
      logger.error('Validation failed', {
        field: error.field,
        message: error.message,
      });
      throw error;
    }
    throw new ValidationError(`Validation error: ${error.message}`);
  }
}

