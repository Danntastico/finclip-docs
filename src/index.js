#!/usr/bin/env node

/**
 * FinClip Documentation Scraper
 * Main entry point that orchestrates all components
 */

import dotenv from 'dotenv';
import { resolve, join } from 'path';
import { writeFile } from 'fs/promises';
import { parseArgs, printHelp } from './utils/cli.js';
import { getConfig, validateConfig } from './config/config.js';
import { validateAll } from './utils/validator.js';
import logger from './utils/logger.js';
import { parseAllSitemaps, getSitemapStats } from './parsers/sitemapParser.js';
import { processCategories } from './services/batchProcessor.js';
import { getProgressTracker } from './utils/progressTracker.js';
import { getErrorReporter } from './utils/errorReporter.js';
import { getProgressState } from './utils/progressState.js';
import { ensureDirectory } from './utils/fileUtils.js';

// Load environment variables
dotenv.config();

const config = getConfig();

/**
 * Display startup banner
 */
function displayBanner() {
  console.log('\n╔══════════════════════════════════════════════════════════╗');
  console.log('║     FinClip Documentation Scraper                        ║');
  console.log('╚══════════════════════════════════════════════════════════╝\n');
}

/**
 * Display configuration summary
 */
function displayConfigSummary(options) {
  console.log('Configuration:');
  console.log(`  Output Directory: ${config.paths.outputDir}`);
  console.log(`  Sitemap Directory: ${config.paths.sitemapDir}`);
  console.log(`  Max Concurrent: ${config.scraping.maxConcurrent}`);
  console.log(`  Rate Limit: ${config.scraping.rateLimitPerMinute} req/min`);
  
  if (options.category) {
    console.log(`  Category Filter: ${options.category}`);
  }
  if (options.limit) {
    console.log(`  URL Limit: ${options.limit} per category`);
  }
  if (options.resume) {
    console.log(`  Resume Mode: Enabled`);
  }
  console.log('');
}

/**
 * Filter categories based on options
 * @param {Array} parsedSitemaps - Parsed sitemap data
 * @param {Object} options - CLI options
 * @returns {Array} Filtered sitemaps
 */
function filterCategories(parsedSitemaps, options) {
  let filtered = parsedSitemaps;

  // Filter by category
  if (options.category) {
    filtered = filtered.filter(sitemap => sitemap.category === options.category);
    if (filtered.length === 0) {
      throw new Error(`Category "${options.category}" not found in sitemaps`);
    }
  }

  // Apply limit to URLs
  if (options.limit && options.limit > 0) {
    filtered = filtered.map(sitemap => ({
      ...sitemap,
      urls: sitemap.urls.slice(0, options.limit),
    }));
  }

  return filtered;
}

/**
 * Generate and save final summary report
 * @param {Array} categoryResults - Category processing results
 * @param {Object} startTime - Start time
 * @returns {Promise<Object>} Summary report
 */
async function generateSummaryReport(categoryResults, startTime) {
  const endTime = Date.now();
  const duration = endTime - startTime;
  const durationSeconds = (duration / 1000).toFixed(1);
  const durationFormatted = `${Math.floor(duration / 60000)}m ${Math.floor((duration % 60000) / 1000)}s`;

  const totalUrls = categoryResults.reduce((sum, r) => sum + r.totalUrls, 0);
  const totalSuccess = categoryResults.reduce((sum, r) => sum + r.success, 0);
  const totalFailed = categoryResults.reduce((sum, r) => sum + r.failed, 0);
  const successRate = totalUrls > 0 ? ((totalSuccess / totalUrls) * 100).toFixed(1) : '0';

  const progressTracker = getProgressTracker();
  const errorReporter = getErrorReporter();
  const progressState = getProgressState();

  const summary = {
    timestamp: new Date().toISOString(),
    duration: {
      ms: duration,
      seconds: durationSeconds,
      formatted: durationFormatted,
    },
    summary: {
      totalCategories: categoryResults.length,
      totalUrls,
      successfulUrls: totalSuccess,
      failedUrls: totalFailed,
      successRate: `${successRate}%`,
    },
    categories: categoryResults.map(r => ({
      category: r.category,
      totalUrls: r.totalUrls,
      successfulUrls: r.success,
      failedUrls: r.failed,
      successRate: r.totalUrls > 0 ? `${((r.success / r.totalUrls) * 100).toFixed(1)}%` : '0%',
    })),
    outputDirectory: config.paths.outputDir,
  };

  // Save summary report
  try {
    const summaryPath = join(config.paths.outputDir, 'summary.json');
    await writeFile(summaryPath, JSON.stringify(summary, null, 2), 'utf-8');
    logger.info(`Summary report saved: ${summaryPath}`);
  } catch (error) {
    logger.error('Failed to save summary report', { error: error.message });
  }

  return summary;
}

/**
 * Print final summary to console
 * @param {Object} summary - Summary report
 */
function printSummary(summary) {
  console.log('\n╔══════════════════════════════════════════════════════════╗');
  console.log('║                    Summary Report                        ║');
  console.log('╚══════════════════════════════════════════════════════════╝\n');

  console.log('Overall Statistics:');
  console.log(`  Duration: ${summary.duration.formatted}`);
  console.log(`  Total Categories: ${summary.summary.totalCategories}`);
  console.log(`  Total URLs: ${summary.summary.totalUrls}`);
  console.log(`  Successful: ${summary.summary.successfulUrls}`);
  console.log(`  Failed: ${summary.summary.failedUrls}`);
  console.log(`  Success Rate: ${summary.summary.successRate}`);
  console.log(`  Output Directory: ${summary.outputDirectory}`);
  console.log('');

  if (summary.categories.length > 0) {
    console.log('Category Statistics:');
    summary.categories.forEach(cat => {
      console.log(`  ${cat.category}:`);
      console.log(`    Total: ${cat.totalUrls}`);
      console.log(`    Success: ${cat.successfulUrls}`);
      console.log(`    Failed: ${cat.failedUrls}`);
      console.log(`    Success Rate: ${cat.successRate}`);
    });
    console.log('');
  }
}

/**
 * Main function
 */
async function main() {
  const startTime = Date.now();
  let exitCode = 0;

  try {
    // Parse CLI arguments
    const options = parseArgs();

    // Show help if requested
    if (options.help) {
      printHelp();
      process.exit(0);
    }

    // Display banner
    displayBanner();

    // Initialize logger
    logger.info('Starting FinClip Documentation Scraper');

    // Update output directory if provided
    if (options.output) {
      // Update config output directory (config object allows this)
      config.paths.outputDir = resolve(options.output);
      logger.info(`Using custom output directory: ${config.paths.outputDir}`);
    }

    // Create output directory if it doesn't exist
    await ensureDirectory(config.paths.outputDir);

    // Validate configuration
    logger.info('Validating configuration...');
    try {
      validateConfig();
      await validateAll({ checkDisk: false });
      logger.info('Configuration validation passed');
    } catch (error) {
      logger.error('Configuration validation failed', { error: error.message });
      console.error(`\n❌ Configuration error: ${error.message}\n`);
      process.exit(1);
    }

    // Display configuration summary
    displayConfigSummary(options);

    // Load progress state if resuming
    const progressState = getProgressState();
    if (options.resume) {
      logger.info('Resume mode enabled - loading progress state...');
      await progressState.load();
      const stats = progressState.getStatistics();
      logger.info(`Loaded progress state: ${stats.completed} completed, ${stats.failed} failed`);
    }

    // Parse sitemap files
    logger.info('Parsing sitemap files...');
    const parsedSitemaps = await parseAllSitemaps();
    
    if (parsedSitemaps.length === 0) {
      throw new Error('No sitemap files found or parsed');
    }

    const sitemapStats = getSitemapStats(parsedSitemaps);
    console.log(`Found ${parsedSitemaps.length} categories with ${sitemapStats.totalUrls} URLs\n`);

    // Filter categories based on options
    const filteredSitemaps = filterCategories(parsedSitemaps, options);

    if (filteredSitemaps.length === 0) {
      throw new Error('No categories to process after filtering');
    }

    console.log(`Processing ${filteredSitemaps.length} category/categories...\n`);

    // Initialize progress tracker
    const progressTracker = getProgressTracker();
    const totalUrls = filteredSitemaps.reduce((sum, s) => sum + s.urls.length, 0);
    progressTracker.initialize(filteredSitemaps.length, totalUrls);

    // Filter completed URLs if resuming
    let sitemapsToProcess = filteredSitemaps;
    if (options.resume) {
      logger.info('Filtering completed URLs...');
      sitemapsToProcess = [];
      for (const sitemap of filteredSitemaps) {
        const urlsToProcess = await progressState.filterCompleted(sitemap.urls, sitemap.category);
        if (urlsToProcess.length > 0) {
          sitemapsToProcess.push({
            ...sitemap,
            urls: urlsToProcess,
          });
        } else {
          logger.info(`Skipping category ${sitemap.category} - all URLs already completed`);
        }
      }
    }

    // Process categories with progress callback
    const errorReporter = getErrorReporter();
    const categoryResults = await processCategories(
      sitemapsToProcess,
      {
        overwrite: false,
      },
      (result, categoryIndex, totalCategories, urlIndex, totalUrls, category) => {
        const resultCategory = result.category || category;
        
        // Update progress tracker
        progressTracker.updateProgress(result, resultCategory);

        // Track errors
        if (!result.success) {
          errorReporter.addError(new Error(result.error || 'Unknown error'), {
            url: result.url,
            category: resultCategory,
          });
        }

        // Mark as completed or failed in progress state
        if (result.success) {
          progressState.markCompleted(result.url, resultCategory).catch(err => {
            logger.warn('Failed to mark URL as completed', { url: result.url, error: err.message });
          });
        } else {
          progressState.markFailed(result.url).catch(err => {
            logger.warn('Failed to mark URL as failed', { url: result.url, error: err.message });
          });
        }

        // Display progress
        const stats = progressTracker.getStats();
        const percentage = stats.percentage;
        const rate = parseFloat(stats.rate).toFixed(2);
        process.stdout.write(
          `\rProgress: ${stats.processedUrls}/${stats.totalUrls} (${percentage}%) | ` +
          `Success: ${stats.successfulUrls} | Failed: ${stats.failedUrls} | ` +
          `Rate: ${rate} URLs/s`
        );
      }
    );

    // Clear progress line
    console.log('\n');

    // Save progress state
    if (options.resume) {
      await progressState.save();
    }

    // Generate and save summary report
    const summary = await generateSummaryReport(categoryResults, startTime);

    // Save progress report
    await progressTracker.saveReport();

    // Save error report if there are errors
    const errorStats = errorReporter.getStatistics();
    if (errorStats.total > 0) {
      await errorReporter.saveReport();
      errorReporter.printSummary();
      exitCode = 1; // Exit with error code if there were failures
    }

    // Print final summary
    printSummary(summary);

    // Print progress tracker summary
    progressTracker.printSummary();

    logger.info('Processing completed successfully');

  } catch (error) {
    logger.error('Fatal error occurred', {
      error: error.message,
      stack: error.stack,
    });

    console.error('\n❌ Fatal error:', error.message);
    console.error(error.stack);
    
    exitCode = 1;
  } finally {
    // Close logger
    logger.close();
  }

  process.exit(exitCode);
}

// Run main function
main().catch(error => {
  console.error('Unhandled error:', error);
  process.exit(1);
});

