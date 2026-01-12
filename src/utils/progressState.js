import { readFile, writeFile } from 'fs/promises';
import { existsSync } from 'fs';
import { join } from 'path';
import { getConfig } from '../config/config.js';
import logger from './logger.js';
import { exists } from './fileUtils.js';
import { urlToFilePath } from './pathUtils.js';

const config = getConfig();

/**
 * Progress state manager for resume capability
 */
class ProgressState {
  constructor() {
    this.stateFile = join(config.paths.outputDir, 'progress-state.json');
    this.completedUrls = new Set();
    this.failedUrls = new Set();
    this.loaded = false;
  }

  /**
   * Load progress state from file
   * @returns {Promise<void>}
   */
  async load() {
    if (this.loaded) {
      return;
    }

    try {
      if (existsSync(this.stateFile)) {
        const content = await readFile(this.stateFile, 'utf-8');
        const state = JSON.parse(content);

        this.completedUrls = new Set(state.completedUrls || []);
        this.failedUrls = new Set(state.failedUrls || []);

        logger.info(`Loaded progress state: ${this.completedUrls.size} completed, ${this.failedUrls.size} failed`);
      } else {
        logger.debug('No existing progress state found');
      }
    } catch (error) {
      logger.warn('Failed to load progress state', { error: error.message });
      // Continue with empty state
      this.completedUrls = new Set();
      this.failedUrls = new Set();
    }

    this.loaded = true;
  }

  /**
   * Save progress state to file
   * @returns {Promise<void>}
   */
  async save() {
    try {
      const state = {
        timestamp: new Date().toISOString(),
        completedUrls: Array.from(this.completedUrls),
        failedUrls: Array.from(this.failedUrls),
      };

      await writeFile(this.stateFile, JSON.stringify(state, null, 2), 'utf-8');
      logger.debug(`Saved progress state: ${this.completedUrls.size} completed, ${this.failedUrls.size} failed`);
    } catch (error) {
      logger.error('Failed to save progress state', { error: error.message });
      throw error;
    }
  }

  /**
   * Check if URL is already completed
   * @param {string} url - URL to check
   * @returns {boolean} True if URL is completed
   */
  isCompleted(url) {
    return this.completedUrls.has(url);
  }

  /**
   * Check if URL previously failed
   * @param {string} url - URL to check
   * @returns {boolean} True if URL previously failed
   */
  hasFailed(url) {
    return this.failedUrls.has(url);
  }

  /**
   * Mark URL as completed
   * @param {string} url - URL to mark as completed
   * @param {string} category - Category name
   * @returns {Promise<boolean>} True if URL was newly marked, false if already completed
   */
  async markCompleted(url, category) {
    // Also check if file exists on disk
    const fileExists = await this.checkFileExists(url, category);

    if (!fileExists && !this.completedUrls.has(url)) {
      this.completedUrls.add(url);
      this.failedUrls.delete(url); // Remove from failed if it was there
      await this.save();
      return true;
    }

    return false;
  }

  /**
   * Mark URL as failed
   * @param {string} url - URL to mark as failed
   * @returns {Promise<void>}
   */
  async markFailed(url) {
    if (!this.failedUrls.has(url)) {
      this.failedUrls.add(url);
      await this.save();
    }
  }

  /**
   * Check if file exists on disk for URL
   * @param {string} url - URL to check
   * @param {string} category - Category name
   * @returns {Promise<boolean>} True if file exists
   */
  async checkFileExists(url, category) {
    try {
      const { fullPath } = urlToFilePath(url, category);
      return exists(fullPath);
    } catch (error) {
      logger.debug(`Failed to check file existence for URL: ${url}`, {
        error: error.message,
      });
      return false;
    }
  }

  /**
   * Filter URLs to skip already completed ones
   * @param {Array} urls - Array of URLs
   * @param {string} category - Category name
   * @returns {Promise<Array>} Filtered array of URLs to process
   */
  async filterCompleted(urls, category) {
    await this.load();

    const urlsToProcess = [];
    const skipped = [];

    for (const url of urls) {
      // Check if URL is in completed set or file exists
      const isCompleted = this.isCompleted(url);
      const fileExists = await this.checkFileExists(url, category);

      if (isCompleted || fileExists) {
        skipped.push(url);
      } else {
        urlsToProcess.push(url);
      }
    }

    if (skipped.length > 0) {
      logger.info(`Skipping ${skipped.length} already completed URLs for category: ${category}`, {
        category,
        skipped: skipped.length,
        toProcess: urlsToProcess.length,
      });
    }

    return urlsToProcess;
  }

  /**
   * Get statistics
   * @returns {Object} Statistics
   */
  getStatistics() {
    return {
      completed: this.completedUrls.size,
      failed: this.failedUrls.size,
      total: this.completedUrls.size + this.failedUrls.size,
    };
  }

  /**
   * Clear progress state
   * @returns {Promise<void>}
   */
  async clear() {
    this.completedUrls.clear();
    this.failedUrls.clear();
    await this.save();
    logger.info('Progress state cleared');
  }

  /**
   * Reset failed URLs (to retry them)
   * @returns {Promise<void>}
   */
  async resetFailed() {
    this.failedUrls.clear();
    await this.save();
    logger.info('Failed URLs reset');
  }
}

// Create singleton instance
const progressState = new ProgressState();

/**
 * Get progress state instance
 * @returns {ProgressState} Progress state instance
 */
export function getProgressState() {
  return progressState;
}

export default progressState;

