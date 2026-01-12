import { join, dirname, basename } from 'path';
import { getConfig } from '../config/config.js';
import { extractPageName } from './urlUtils.js';

const config = getConfig();

/**
 * Convert URL path to filesystem-safe path
 * @param {string} url - URL to convert
 * @param {string} category - Category name
 * @returns {Object} Object with { dirPath, fileName }
 */
export function urlToFilePath(url, category) {
  if (!url || typeof url !== 'string') {
    throw new Error('URL is required');
  }

  try {
    const urlObj = new URL(url);
    const pathname = urlObj.pathname;

    // Remove leading/trailing slashes
    const segments = pathname.split('/').filter(seg => seg.length > 0);

    // Build directory path from segments
    // Example: /develop/api/overview.html -> ['develop', 'api']
    // We'll skip 'develop' and 'document' and 'en' if present, and use category as base
    const outputBaseDir = config.paths.outputDir;
    const categoryDir = join(outputBaseDir, category);

    // Extract segments after 'document/en/develop' pattern
    // Find index of 'develop' or similar pattern
    let startIndex = 0;
    const developIndex = segments.findIndex(s => s === 'develop' || s === 'document');
    if (developIndex >= 0) {
      startIndex = developIndex + 1;
    }

    // Get path segments after base (e.g., ['api', 'overview.html'])
    const pathSegments = segments.slice(startIndex);

    // Remove last segment (filename) for directory path
    const dirSegments = pathSegments.slice(0, -1);
    const fileName = pathSegments[pathSegments.length - 1] || 'index';

    // Remove file extension from filename and add .md
    let baseFileName = fileName;
    if (baseFileName.includes('.')) {
      baseFileName = baseFileName.substring(0, baseFileName.lastIndexOf('.'));
    }
    if (!baseFileName) {
      baseFileName = 'index';
    }
    const mdFileName = `${baseFileName}.md`;

    // Build full directory path
    let dirPath = categoryDir;
    if (dirSegments.length > 0) {
      // Sanitize directory segments
      const sanitizedSegments = dirSegments.map(seg => sanitizeFileName(seg));
      dirPath = join(categoryDir, ...sanitizedSegments);
    }

    return {
      dirPath,
      fileName: sanitizeFileName(mdFileName),
      fullPath: join(dirPath, sanitizeFileName(mdFileName)),
    };
  } catch (error) {
    // Fallback: use category and page name
    const pageName = extractPageName(url);
    const dirPath = join(config.paths.outputDir, category);
    const fileName = `${sanitizeFileName(pageName)}.md`;
    return {
      dirPath,
      fileName,
      fullPath: join(dirPath, fileName),
    };
  }
}

/**
 * Sanitize filename for filesystem (remove invalid characters)
 * @param {string} fileName - Filename to sanitize
 * @returns {string} Sanitized filename
 */
export function sanitizeFileName(fileName) {
  if (!fileName || typeof fileName !== 'string') {
    return 'index';
  }

  // Replace invalid filesystem characters
  // Windows: < > : " | ? * \
  // Unix/Linux: / and null
  let sanitized = fileName
    .replace(/[<>:"|?*\x00-\x1F]/g, '_') // Replace invalid chars with underscore
    .replace(/\//g, '_') // Replace forward slashes
    .replace(/\\/g, '_') // Replace backslashes
    .replace(/\.\./g, '_') // Replace .. sequences
    .replace(/^\./, '_') // Replace leading dot
    .replace(/\s+/g, '_') // Replace whitespace with underscore
    .replace(/_{2,}/g, '_') // Replace multiple underscores with single
    .replace(/^_+|_+$/g, ''); // Remove leading/trailing underscores

  // Ensure filename is not empty
  if (!sanitized || sanitized.length === 0) {
    sanitized = 'index';
  }

  // Limit filename length (Windows has 255 char limit for full path)
  if (sanitized.length > 200) {
    const ext = sanitized.substring(sanitized.lastIndexOf('.'));
    const name = sanitized.substring(0, sanitized.lastIndexOf('.'));
    sanitized = name.substring(0, 200 - ext.length) + ext;
  }

  return sanitized;
}

/**
 * Generate a unique filename if file already exists
 * @param {string} filePath - Original file path
 * @param {Function} existsCheck - Function to check if file exists (sync)
 * @returns {string} Unique file path
 */
export function ensureUniqueFileName(filePath, existsCheck) {
  // Check if file exists (existsCheck is sync)
  if (!existsCheck(filePath)) {
    return filePath;
  }

  // File exists, append number
  const dir = dirname(filePath);
  const baseName = basename(filePath, '.md');
  let counter = 1;

  while (true) {
    const newFileName = `${baseName}_${counter}.md`;
    const newPath = join(dir, newFileName);

    if (!existsCheck(newPath)) {
      return newPath;
    }

    counter++;

    // Safety limit
    if (counter > 1000) {
      throw new Error(`Cannot generate unique filename for: ${filePath}`);
    }
  }
}

/**
 * Get relative path from output directory
 * @param {string} fullPath - Full file path
 * @returns {string} Relative path from output directory
 */
export function getRelativePath(fullPath) {
  const outputDir = config.paths.outputDir;
  
  if (fullPath.startsWith(outputDir)) {
    return fullPath.substring(outputDir.length + 1); // +1 to skip leading slash
  }
  
  return fullPath;
}

