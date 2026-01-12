import { writeFile } from 'fs/promises';
import { urlToFilePath, ensureUniqueFileName, getRelativePath } from './pathUtils.js';
import { ensureDirectory } from './fileUtils.js';
import { exists } from './fileUtils.js';
import logger from './logger.js';

/**
 * Generate metadata header for markdown content
 * @param {string} url - Source URL
 * @param {Object} metadata - Additional metadata
 * @returns {string} Metadata header as markdown comment
 */
function generateMetadataHeader(url, metadata = {}) {
  const timestamp = new Date().toISOString();
  const date = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  let header = `<!--\n`;
  header += `Source URL: ${url}\n`;
  header += `Extracted: ${timestamp} (${date})\n`;
  
  if (metadata.title) {
    header += `Title: ${metadata.title}\n`;
  }
  if (metadata.description) {
    header += `Description: ${metadata.description}\n`;
  }
  
  header += `-->\n\n`;

  return header;
}

/**
 * Save scraped content to file
 * @param {Object} scrapeResult - Scrape result object with { url, markdown, metadata, success }
 * @param {string} category - Category name
 * @param {boolean} overwrite - Whether to overwrite existing files (default: false)
 * @returns {Promise<Object>} Save result with { success, filePath, relativePath, error }
 */
export async function saveContent(scrapeResult, category, overwrite = false) {
  const { url, markdown, metadata = {}, success } = scrapeResult;

  if (!success || !markdown) {
    return {
      success: false,
      filePath: null,
      relativePath: null,
      error: 'No content to save (scrape failed or empty content)',
    };
  }

  try {
    // Generate file path from URL
    const { dirPath, fileName, fullPath } = urlToFilePath(url, category);

    // Ensure directory exists
    await ensureDirectory(dirPath);

    // Generate metadata header
    const metadataHeader = generateMetadataHeader(url, metadata);

    // Combine header and content
    const contentWithHeader = metadataHeader + markdown;

    // Determine final file path (handle duplicates if not overwriting)
    let finalPath = fullPath;
    if (!overwrite) {
      finalPath = ensureUniqueFileName(fullPath, exists);
    }

    // Save file
    await writeFile(finalPath, contentWithHeader, 'utf-8');

    const relativePath = getRelativePath(finalPath);

    logger.info(`Saved content: ${relativePath}`, {
      url,
      category,
      filePath: finalPath,
      contentLength: contentWithHeader.length,
    });

    return {
      success: true,
      filePath: finalPath,
      relativePath,
      error: null,
    };
  } catch (error) {
    logger.error(`Failed to save content for URL: ${url}`, {
      error: error.message,
      category,
      stack: error.stack,
    });

    return {
      success: false,
      filePath: null,
      relativePath: null,
      error: error.message,
    };
  }
}

/**
 * Save multiple scraped results
 * @param {Array} scrapeResults - Array of scrape result objects
 * @param {string} category - Category name
 * @param {boolean} overwrite - Whether to overwrite existing files
 * @param {Function} onProgress - Progress callback (result, index, total)
 * @returns {Promise<Array>} Array of save results
 */
export async function saveContents(scrapeResults, category, overwrite = false, onProgress = null) {
  const results = [];
  const total = scrapeResults.length;

  for (let i = 0; i < scrapeResults.length; i++) {
    const scrapeResult = scrapeResults[i];
    const saveResult = await saveContent(scrapeResult, category, overwrite);

    results.push({
      ...saveResult,
      url: scrapeResult.url,
    });

    // Call progress callback if provided
    if (onProgress && typeof onProgress === 'function') {
      onProgress(saveResult, i + 1, total);
    }
  }

  const successCount = results.filter(r => r.success).length;
  const failureCount = results.length - successCount;

  logger.info(`Saved ${successCount} of ${total} files for category: ${category}`, {
    category,
    success: successCount,
    failed: failureCount,
  });

  return results;
}

