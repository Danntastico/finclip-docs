import { basename, join } from 'path';
import { getConfig } from '../config/config.js';
import { readDirectory, readFileContent, getMarkdownFiles } from '../utils/fileUtils.js';
import { filterValidUrls, deduplicateUrls } from '../utils/urlUtils.js';
import logger from '../utils/logger.js';

const config = getConfig();

/**
 * Extract category name from filename
 * @param {string} filePath - Full file path
 * @returns {string} Category name (filename without extension)
 */
export function extractCategory(filePath) {
  const filename = basename(filePath, '.md');
  return filename;
}

/**
 * Parse markdown content to extract URLs
 * @param {string} content - Markdown file content
 * @returns {string[]} Array of URLs found in the content
 */
export function extractUrlsFromMarkdown(content) {
  if (!content || typeof content !== 'string') {
    return [];
  }

  const urls = [];
  const lines = content.split('\n');

  // URL pattern: matches http:// or https:// URLs
  const urlPattern = /https?:\/\/[^\s\)]+/g;

  for (const line of lines) {
    const trimmedLine = line.trim();
    
    // Skip empty lines and markdown headers
    if (!trimmedLine || trimmedLine.startsWith('#')) {
      continue;
    }

    // Extract URLs from the line
    const matches = trimmedLine.match(urlPattern);
    if (matches) {
      urls.push(...matches);
    }
  }

  // Filter and validate URLs
  const validUrls = filterValidUrls(urls);
  
  // Deduplicate URLs
  const uniqueUrls = deduplicateUrls(validUrls);

  return uniqueUrls;
}

/**
 * Parse a single sitemap markdown file
 * @param {string} filePath - Path to sitemap markdown file
 * @returns {Promise<Object>} Object with category and urls: { category, urls: [] }
 */
export async function parseSitemapFile(filePath) {
  try {
    logger.debug(`Parsing sitemap file: ${filePath}`);
    
    // Extract category from filename
    const category = extractCategory(filePath);
    
    // Read file content
    const content = await readFileContent(filePath);
    
    // Extract URLs
    const urls = extractUrlsFromMarkdown(content);
    
    logger.info(`Parsed sitemap file: ${category}`, { 
      file: filePath, 
      urlCount: urls.length 
    });
    
    return {
      category,
      urls,
      filePath,
    };
  } catch (error) {
    logger.error(`Failed to parse sitemap file: ${filePath}`, { 
      error: error.message 
    });
    throw error;
  }
}

/**
 * Parse all sitemap files from the sitemap directory
 * @param {string} [sitemapDir] - Optional sitemap directory path (defaults to config)
 * @returns {Promise<Array>} Array of parsed sitemap objects: [{ category, urls: [] }, ...]
 */
export async function parseAllSitemaps(sitemapDir = null) {
  const dirPath = sitemapDir || config.paths.sitemapDir;
  
  try {
    logger.info(`Starting to parse sitemaps from: ${dirPath}`);
    
    // Get all markdown files
    const markdownFiles = await getMarkdownFiles(dirPath);
    
    if (markdownFiles.length === 0) {
      logger.warn(`No markdown files found in: ${dirPath}`);
      return [];
    }
    
    logger.info(`Found ${markdownFiles.length} sitemap files`);
    
    // Parse all files
    const parsedSitemaps = await Promise.all(
      markdownFiles.map(filePath => parseSitemapFile(filePath))
    );
    
    // Calculate total URLs
    const totalUrls = parsedSitemaps.reduce((sum, sitemap) => sum + sitemap.urls.length, 0);
    
    logger.info(`Successfully parsed ${parsedSitemaps.length} sitemap files`, {
      totalUrls,
      categories: parsedSitemaps.map(s => s.category),
    });
    
    return parsedSitemaps;
  } catch (error) {
    logger.error(`Failed to parse sitemaps from: ${dirPath}`, { 
      error: error.message 
    });
    throw error;
  }
}

/**
 * Get all URLs from all sitemaps (flattened)
 * @param {string} [sitemapDir] - Optional sitemap directory path
 * @returns {Promise<string[]>} Array of all unique URLs
 */
export async function getAllUrls(sitemapDir = null) {
  const parsedSitemaps = await parseAllSitemaps(sitemapDir);
  
  // Flatten all URLs
  const allUrls = parsedSitemaps.flatMap(sitemap => sitemap.urls);
  
  // Deduplicate (in case of duplicates across files)
  const uniqueUrls = deduplicateUrls(allUrls);
  
  logger.info(`Total unique URLs across all sitemaps: ${uniqueUrls.length}`);
  
  return uniqueUrls;
}

/**
 * Get statistics about parsed sitemaps
 * @param {Array} parsedSitemaps - Array of parsed sitemap objects
 * @returns {Object} Statistics object
 */
export function getSitemapStats(parsedSitemaps) {
  if (!Array.isArray(parsedSitemaps)) {
    return {
      totalCategories: 0,
      totalUrls: 0,
      urlsByCategory: {},
    };
  }

  const urlsByCategory = {};
  let totalUrls = 0;

  for (const sitemap of parsedSitemaps) {
    urlsByCategory[sitemap.category] = sitemap.urls.length;
    totalUrls += sitemap.urls.length;
  }

  return {
    totalCategories: parsedSitemaps.length,
    totalUrls,
    urlsByCategory,
  };
}

