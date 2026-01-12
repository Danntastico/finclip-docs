import logger from './logger.js';

/**
 * Error types
 */
export const ErrorType = {
  API_ERROR: 'API_ERROR',
  NETWORK_ERROR: 'NETWORK_ERROR',
  FILE_ERROR: 'FILE_ERROR',
  VALIDATION_ERROR: 'VALIDATION_ERROR',
  RATE_LIMIT_ERROR: 'RATE_LIMIT_ERROR',
  UNKNOWN_ERROR: 'UNKNOWN_ERROR',
};

/**
 * Categorize error type
 * @param {Error} error - Error object
 * @returns {string} Error type
 */
export function categorizeError(error) {
  if (!error) {
    return ErrorType.UNKNOWN_ERROR;
  }

  const errorMessage = (error.message || error.toString()).toLowerCase();
  const errorCode = error.code || error.statusCode || error.status;

  // Rate limit errors
  if (errorCode === 429 || errorMessage.includes('rate limit') || errorMessage.includes('too many requests')) {
    return ErrorType.RATE_LIMIT_ERROR;
  }

  // API errors (4xx, 5xx)
  if (errorCode >= 400 && errorCode < 500 && errorCode !== 429) {
    return ErrorType.API_ERROR;
  }
  if (errorCode >= 500) {
    return ErrorType.API_ERROR;
  }

  // Network errors
  if (
    errorCode === 'ETIMEDOUT' ||
    errorCode === 'ECONNRESET' ||
    errorCode === 'ENOTFOUND' ||
    errorCode === 'ECONNREFUSED' ||
    errorCode === 'ENETUNREACH' ||
    errorMessage.includes('network') ||
    errorMessage.includes('timeout') ||
    errorMessage.includes('connection')
  ) {
    return ErrorType.NETWORK_ERROR;
  }

  // File errors
  if (
    errorCode === 'EACCES' ||
    errorCode === 'EPERM' ||
    errorCode === 'ENOENT' ||
    errorCode === 'EMFILE' ||
    errorCode === 'ENOSPC' ||
    errorMessage.includes('file') ||
    errorMessage.includes('directory') ||
    errorMessage.includes('permission') ||
    errorMessage.includes('disk space')
  ) {
    return ErrorType.FILE_ERROR;
  }

  // Validation errors
  if (
    errorMessage.includes('required') ||
    errorMessage.includes('invalid') ||
    errorMessage.includes('validation') ||
    errorMessage.includes('missing')
  ) {
    return ErrorType.VALIDATION_ERROR;
  }

  return ErrorType.UNKNOWN_ERROR;
}

/**
 * Create error object with context
 * @param {Error} error - Original error
 * @param {Object} context - Error context (url, category, etc.)
 * @returns {Object} Error object with context
 */
export function createErrorWithContext(error, context = {}) {
  const errorType = categorizeError(error);
  const errorMessage = error?.message || error?.toString() || 'Unknown error';

  return {
    type: errorType,
    message: errorMessage,
    code: error?.code || error?.statusCode || error?.status || null,
    stack: error?.stack || null,
    ...context,
    timestamp: new Date().toISOString(),
  };
}

/**
 * Log error with context
 * @param {Error} error - Error object
 * @param {Object} context - Error context
 */
export function logError(error, context = {}) {
  const errorWithContext = createErrorWithContext(error, context);

  // Log based on error type
  switch (errorWithContext.type) {
    case ErrorType.RATE_LIMIT_ERROR:
      logger.warn('Rate limit error', errorWithContext);
      break;
    case ErrorType.NETWORK_ERROR:
      logger.warn('Network error', errorWithContext);
      break;
    case ErrorType.FILE_ERROR:
      logger.error('File error', errorWithContext);
      break;
    case ErrorType.VALIDATION_ERROR:
      logger.error('Validation error', errorWithContext);
      break;
    case ErrorType.API_ERROR:
      logger.error('API error', errorWithContext);
      break;
    default:
      logger.error('Unknown error', errorWithContext);
  }

  return errorWithContext;
}

/**
 * Check if error is retryable
 * @param {Error} error - Error object
 * @returns {boolean} True if error is retryable
 */
export function isRetryableError(error) {
  const errorType = categorizeError(error);

  // Retryable errors
  const retryableTypes = [
    ErrorType.NETWORK_ERROR,
    ErrorType.RATE_LIMIT_ERROR,
    // API errors with 5xx status are retryable
    ...(error?.statusCode >= 500 && error?.statusCode < 600 ? [ErrorType.API_ERROR] : []),
  ];

  return retryableTypes.includes(errorType);
}

/**
 * Check if error is fatal (should stop processing)
 * @param {Error} error - Error object
 * @returns {boolean} True if error is fatal
 */
export function isFatalError(error) {
  const errorType = categorizeError(error);

  // Fatal errors
  const fatalTypes = [
    ErrorType.VALIDATION_ERROR,
    ErrorType.FILE_ERROR, // Some file errors are fatal (permissions, disk space)
  ];

  return fatalTypes.includes(errorType);
}

