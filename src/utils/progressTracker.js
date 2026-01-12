import { writeFile } from 'fs/promises';
import { join } from 'path';
import { getConfig } from '../config/config.js';
import logger from './logger.js';

const config = getConfig();

/**
 * Progress tracker for batch processing
 */
class ProgressTracker {
  constructor() {
    this.startTime = Date.now();
    this.stats = {
      totalCategories: 0,
      totalUrls: 0,
      processedUrls: 0,
      successfulUrls: 0,
      failedUrls: 0,
      categoryStats: {},
    };
  }

  /**
   * Initialize progress tracker
   * @param {number} totalCategories - Total number of categories
   * @param {number} totalUrls - Total number of URLs
   */
  initialize(totalCategories, totalUrls) {
    this.stats.totalCategories = totalCategories;
    this.stats.totalUrls = totalUrls;
    this.stats.processedUrls = 0;
    this.stats.successfulUrls = 0;
    this.stats.failedUrls = 0;
    this.stats.categoryStats = {};

    logger.info('Progress tracker initialized', this.stats);
  }

  /**
   * Update progress for a single URL
   * @param {Object} result - Processing result
   * @param {string} category - Category name
   */
  updateProgress(result, category) {
    this.stats.processedUrls++;

    if (result.success) {
      this.stats.successfulUrls++;
    } else {
      this.stats.failedUrls++;
    }

    // Update category stats
    if (!this.stats.categoryStats[category]) {
      this.stats.categoryStats[category] = {
        total: 0,
        success: 0,
        failed: 0,
      };
    }

    this.stats.categoryStats[category].total++;
    if (result.success) {
      this.stats.categoryStats[category].success++;
    } else {
      this.stats.categoryStats[category].failed++;
    }

    // Log progress periodically (every 10 URLs or on failures)
    if (this.stats.processedUrls % 10 === 0 || !result.success) {
      this.logProgress();
    }
  }

  /**
   * Update progress for a category
   * @param {Object} categoryResult - Category processing result
   */
  updateCategoryProgress(categoryResult) {
    const { category, totalUrls, success, failed } = categoryResult;
    
    this.stats.categoryStats[category] = {
      total: totalUrls,
      success,
      failed,
    };

    logger.info(`Category progress: ${category}`, {
      category,
      success,
      failed,
      total: totalUrls,
    });
  }

  /**
   * Log current progress
   */
  logProgress() {
    const elapsed = Date.now() - this.startTime;
    const elapsedSeconds = (elapsed / 1000).toFixed(1);
    const percentage = ((this.stats.processedUrls / this.stats.totalUrls) * 100).toFixed(1);
    const rate = this.stats.processedUrls / (elapsed / 1000); // URLs per second
    const estimatedTimeRemaining = rate > 0 
      ? ((this.stats.totalUrls - this.stats.processedUrls) / rate).toFixed(0)
      : 'N/A';

    logger.info(`Progress: ${this.stats.processedUrls}/${this.stats.totalUrls} (${percentage}%)`, {
      processed: this.stats.processedUrls,
      total: this.stats.totalUrls,
      success: this.stats.successfulUrls,
      failed: this.stats.failedUrls,
      percentage: `${percentage}%`,
      elapsed: `${elapsedSeconds}s`,
      rate: `${rate.toFixed(2)} URLs/s`,
      estimatedTimeRemaining: `${estimatedTimeRemaining}s`,
    });
  }

  /**
   * Get current statistics
   * @returns {Object} Current statistics
   */
  getStats() {
    const elapsed = Date.now() - this.startTime;
    return {
      ...this.stats,
      elapsed: elapsed,
      elapsedSeconds: (elapsed / 1000).toFixed(1),
      rate: this.stats.processedUrls / (elapsed / 1000),
      percentage: ((this.stats.processedUrls / this.stats.totalUrls) * 100).toFixed(1),
    };
  }

  /**
   * Generate summary report
   * @returns {Object} Summary report
   */
  generateSummary() {
    const elapsed = Date.now() - this.startTime;
    const elapsedSeconds = (elapsed / 1000).toFixed(1);
    const rate = this.stats.processedUrls > 0 
      ? (this.stats.processedUrls / (elapsed / 1000)).toFixed(2)
      : '0';

    const summary = {
      timestamp: new Date().toISOString(),
      duration: {
        elapsed: elapsed,
        elapsedSeconds: elapsedSeconds,
        formatted: `${Math.floor(elapsed / 60000)}m ${Math.floor((elapsed % 60000) / 1000)}s`,
      },
      overall: {
        totalCategories: this.stats.totalCategories,
        totalUrls: this.stats.totalUrls,
        processedUrls: this.stats.processedUrls,
        successfulUrls: this.stats.successfulUrls,
        failedUrls: this.stats.failedUrls,
        successRate: ((this.stats.successfulUrls / this.stats.processedUrls) * 100).toFixed(1) + '%',
        rate: `${rate} URLs/s`,
      },
      categories: this.stats.categoryStats,
    };

    return summary;
  }

  /**
   * Save progress report to file
   * @param {string} filePath - File path to save report
   * @returns {Promise<void>}
   */
  async saveReport(filePath = null) {
    const reportPath = filePath || join(config.paths.outputDir, 'progress-report.json');
    const summary = this.generateSummary();

    try {
      await writeFile(reportPath, JSON.stringify(summary, null, 2), 'utf-8');
      logger.info(`Progress report saved: ${reportPath}`);
    } catch (error) {
      logger.error(`Failed to save progress report: ${reportPath}`, {
        error: error.message,
      });
      throw error;
    }

    return summary;
  }

  /**
   * Print summary to console
   */
  printSummary() {
    const summary = this.generateSummary();

    console.log('\n=== Processing Summary ===\n');
    console.log(`Duration: ${summary.duration.formatted}`);
    console.log(`Total Categories: ${summary.overall.totalCategories}`);
    console.log(`Total URLs: ${summary.overall.totalUrls}`);
    console.log(`Processed: ${summary.overall.processedUrls}`);
    console.log(`Successful: ${summary.overall.successfulUrls}`);
    console.log(`Failed: ${summary.overall.failedUrls}`);
    console.log(`Success Rate: ${summary.overall.successRate}`);
    console.log(`Rate: ${summary.overall.rate}`);
    console.log('\n=== Category Statistics ===\n');

    for (const [category, stats] of Object.entries(summary.categories)) {
      const successRate = stats.total > 0 
        ? ((stats.success / stats.total) * 100).toFixed(1)
        : '0';
      console.log(`${category}:`);
      console.log(`  Total: ${stats.total}`);
      console.log(`  Success: ${stats.success}`);
      console.log(`  Failed: ${stats.failed}`);
      console.log(`  Success Rate: ${successRate}%`);
      console.log('');
    }
  }
}

// Create singleton instance
const progressTracker = new ProgressTracker();

/**
 * Get progress tracker instance
 * @returns {ProgressTracker} Progress tracker instance
 */
export function getProgressTracker() {
  return progressTracker;
}

export default progressTracker;

