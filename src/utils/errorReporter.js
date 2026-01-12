import { writeFile } from 'fs/promises';
import { join } from 'path';
import { getConfig } from '../config/config.js';
import logger from './logger.js';
import { categorizeError, createErrorWithContext } from './errorHandler.js';

const config = getConfig();

/**
 * Error reporter for tracking and reporting errors
 */
class ErrorReporter {
  constructor() {
    this.errors = [];
    this.errorsByCategory = {};
    this.errorsByType = {};
  }

  /**
   * Add error to report
   * @param {Error} error - Error object
   * @param {Object} context - Error context (url, category, etc.)
   */
  addError(error, context = {}) {
    const errorWithContext = createErrorWithContext(error, context);
    this.errors.push(errorWithContext);

    // Track by category
    const category = context.category || 'unknown';
    if (!this.errorsByCategory[category]) {
      this.errorsByCategory[category] = [];
    }
    this.errorsByCategory[category].push(errorWithContext);

    // Track by type
    const errorType = errorWithContext.type;
    if (!this.errorsByType[errorType]) {
      this.errorsByType[errorType] = [];
    }
    this.errorsByType[errorType].push(errorWithContext);

    logger.debug(`Error added to report: ${errorWithContext.type}`, {
      url: context.url,
      category: context.category,
    });
  }

  /**
   * Get all errors
   * @returns {Array} Array of error objects
   */
  getErrors() {
    return this.errors;
  }

  /**
   * Get errors by category
   * @param {string} category - Category name
   * @returns {Array} Array of error objects for category
   */
  getErrorsByCategory(category) {
    return this.errorsByCategory[category] || [];
  }

  /**
   * Get errors by type
   * @param {string} type - Error type
   * @returns {Array} Array of error objects for type
   */
  getErrorsByType(type) {
    return this.errorsByType[type] || [];
  }

  /**
   * Get failed URLs
   * @returns {Array} Array of failed URLs
   */
  getFailedUrls() {
    return this.errors
      .filter(error => error.url)
      .map(error => ({
        url: error.url,
        category: error.category,
        type: error.type,
        message: error.message,
        timestamp: error.timestamp,
      }));
  }

  /**
   * Get statistics
   * @returns {Object} Error statistics
   */
  getStatistics() {
    const total = this.errors.length;
    const byCategory = Object.entries(this.errorsByCategory).reduce(
      (acc, [category, errors]) => {
        acc[category] = errors.length;
        return acc;
      },
      {}
    );
    const byType = Object.entries(this.errorsByType).reduce(
      (acc, [type, errors]) => {
        acc[type] = errors.length;
        return acc;
      },
      {}
    );

    return {
      total,
      byCategory,
      byType,
    };
  }

  /**
   * Generate error report
   * @returns {Object} Error report object
   */
  generateReport() {
    const statistics = this.getStatistics();
    const failedUrls = this.getFailedUrls();

    return {
      timestamp: new Date().toISOString(),
      summary: {
        totalErrors: statistics.total,
        byCategory: statistics.byCategory,
        byType: statistics.byType,
      },
      failedUrls,
      errors: this.errors,
    };
  }

  /**
   * Save error report to file
   * @param {string} filePath - File path to save report
   * @returns {Promise<Object>} Error report object
   */
  async saveReport(filePath = null) {
    const reportPath = filePath || join(config.paths.outputDir, 'errors.json');
    const report = this.generateReport();

    try {
      await writeFile(reportPath, JSON.stringify(report, null, 2), 'utf-8');
      logger.info(`Error report saved: ${reportPath}`, {
        totalErrors: report.summary.totalErrors,
      });
    } catch (error) {
      logger.error(`Failed to save error report: ${reportPath}`, {
        error: error.message,
      });
      throw error;
    }

    return report;
  }

  /**
   * Print error summary to console
   */
  printSummary() {
    const statistics = this.getStatistics();

    if (statistics.total === 0) {
      console.log('\n✅ No errors occurred!\n');
      return;
    }

    console.log('\n=== Error Summary ===\n');
    console.log(`Total Errors: ${statistics.total}`);
    console.log('\nErrors by Type:');
    for (const [type, count] of Object.entries(statistics.byType)) {
      console.log(`  ${type}: ${count}`);
    }
    console.log('\nErrors by Category:');
    for (const [category, count] of Object.entries(statistics.byCategory)) {
      console.log(`  ${category}: ${count}`);
    }
    console.log('');

    // Show first few failed URLs
    const failedUrls = this.getFailedUrls();
    if (failedUrls.length > 0) {
      console.log('Failed URLs (first 10):');
      failedUrls.slice(0, 10).forEach(({ url, type, message }) => {
        console.log(`  [${type}] ${url}`);
        console.log(`    ${message}`);
      });
      if (failedUrls.length > 10) {
        console.log(`  ... and ${failedUrls.length - 10} more (see errors.json)`);
      }
      console.log('');
    }
  }

  /**
   * Clear all errors
   */
  clear() {
    this.errors = [];
    this.errorsByCategory = {};
    this.errorsByType = {};
  }
}

// Create singleton instance
const errorReporter = new ErrorReporter();

/**
 * Get error reporter instance
 * @returns {ErrorReporter} Error reporter instance
 */
export function getErrorReporter() {
  return errorReporter;
}

export default errorReporter;

