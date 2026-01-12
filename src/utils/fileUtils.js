import { readdir, readFile, stat, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import { join } from 'path';
import logger from './logger.js';

/**
 * Check if a file or directory exists
 * @param {string} path - Path to check
 * @returns {boolean} True if exists, false otherwise
 */
export function exists(path) {
  return existsSync(path);
}

/**
 * Read directory contents
 * @param {string} dirPath - Directory path
 * @returns {Promise<string[]>} Array of file/directory names
 */
export async function readDirectory(dirPath) {
  try {
    const entries = await readdir(dirPath);
    return entries;
  } catch (error) {
    logger.error(`Failed to read directory: ${dirPath}`, { error: error.message });
    throw error;
  }
}

/**
 * Read file contents as string
 * @param {string} filePath - File path
 * @returns {Promise<string>} File contents
 */
export async function readFileContent(filePath) {
  try {
    const content = await readFile(filePath, 'utf-8');
    return content;
  } catch (error) {
    logger.error(`Failed to read file: ${filePath}`, { error: error.message });
    throw error;
  }
}

/**
 * Get file stats
 * @param {string} filePath - File path
 * @returns {Promise<import('fs').Stats>} File stats
 */
export async function getFileStats(filePath) {
  try {
    const stats = await stat(filePath);
    return stats;
  } catch (error) {
    logger.error(`Failed to get file stats: ${filePath}`, { error: error.message });
    throw error;
  }
}

/**
 * Create directory if it doesn't exist
 * @param {string} dirPath - Directory path
 * @param {boolean} recursive - Create parent directories if needed
 * @returns {Promise<void>}
 */
export async function ensureDirectory(dirPath, recursive = true) {
  try {
    if (!existsSync(dirPath)) {
      await mkdir(dirPath, { recursive });
      logger.debug(`Created directory: ${dirPath}`);
    }
  } catch (error) {
    logger.error(`Failed to create directory: ${dirPath}`, { error: error.message });
    throw error;
  }
}

/**
 * Get all markdown files from a directory
 * @param {string} dirPath - Directory path
 * @returns {Promise<string[]>} Array of markdown file paths
 */
export async function getMarkdownFiles(dirPath) {
  try {
    const entries = await readDirectory(dirPath);
    const markdownFiles = entries
      .filter(entry => entry.endsWith('.md'))
      .map(entry => join(dirPath, entry));
    
    logger.debug(`Found ${markdownFiles.length} markdown files in ${dirPath}`);
    return markdownFiles;
  } catch (error) {
    logger.error(`Failed to get markdown files from: ${dirPath}`, { error: error.message });
    throw error;
  }
}

