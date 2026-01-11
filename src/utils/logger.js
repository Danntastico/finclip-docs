import { createWriteStream, existsSync, mkdirSync } from 'fs';
import { dirname } from 'path';
import { getConfig } from '../config/config.js';

const config = getConfig();

// Log levels
const LOG_LEVELS = {
  DEBUG: 0,
  INFO: 1,
  WARN: 2,
  ERROR: 3,
};

const LEVEL_NAMES = ['DEBUG', 'INFO', 'WARN', 'ERROR'];

// Current log level (default: INFO)
let currentLogLevel = LOG_LEVELS[config.logging.level] ?? LOG_LEVELS.INFO;

// Log file stream
let logStream = null;

/**
 * Initialize logger
 */
function initializeLogger() {
  if (config.logging.file && config.paths.logFile) {
    const logDir = dirname(config.paths.logFile);
    
    // Create log directory if it doesn't exist
    if (!existsSync(logDir)) {
      mkdirSync(logDir, { recursive: true });
    }

    // Create write stream for log file
    logStream = createWriteStream(config.paths.logFile, { flags: 'a' });
  }
}

/**
 * Format log message
 * @param {string} level - Log level
 * @param {string} message - Log message
 * @param {Object} [meta] - Additional metadata
 * @returns {string} Formatted log message
 */
function formatMessage(level, message, meta = {}) {
  const timestamp = new Date().toISOString();
  const metaStr = Object.keys(meta).length > 0 ? ` ${JSON.stringify(meta)}` : '';
  return `[${timestamp}] [${level}] ${message}${metaStr}\n`;
}

/**
 * Write log message
 * @param {string} level - Log level
 * @param {string} message - Log message
 * @param {Object} [meta] - Additional metadata
 */
function writeLog(level, message, meta) {
  const levelValue = LOG_LEVELS[level];
  
  // Skip if log level is too low
  if (levelValue < currentLogLevel) {
    return;
  }

  const formattedMessage = formatMessage(level, message, meta);

  // Write to console
  if (config.logging.console) {
    const consoleMethod = level === 'ERROR' ? console.error : 
                         level === 'WARN' ? console.warn : 
                         console.log;
    consoleMethod(formattedMessage.trim());
  }

  // Write to file
  if (config.logging.file && logStream) {
    logStream.write(formattedMessage);
  }
}

/**
 * Logger object with log methods
 */
const logger = {
  /**
   * Set log level
   * @param {string} level - Log level (DEBUG, INFO, WARN, ERROR)
   */
  setLevel(level) {
    if (LOG_LEVELS[level] !== undefined) {
      currentLogLevel = LOG_LEVELS[level];
    }
  },

  /**
   * Log debug message
   * @param {string} message - Log message
   * @param {Object} [meta] - Additional metadata
   */
  debug(message, meta) {
    writeLog('DEBUG', message, meta);
  },

  /**
   * Log info message
   * @param {string} message - Log message
   * @param {Object} [meta] - Additional metadata
   */
  info(message, meta) {
    writeLog('INFO', message, meta);
  },

  /**
   * Log warning message
   * @param {string} message - Log message
   * @param {Object} [meta] - Additional metadata
   */
  warn(message, meta) {
    writeLog('WARN', message, meta);
  },

  /**
   * Log error message
   * @param {string} message - Log message
   * @param {Object} [meta] - Additional metadata
   */
  error(message, meta) {
    writeLog('ERROR', message, meta);
  },

  /**
   * Close logger (close file stream)
   */
  close() {
    if (logStream) {
      logStream.end();
      logStream = null;
    }
  },
};

// Initialize logger on import
initializeLogger();

export default logger;

