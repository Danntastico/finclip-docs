import { getConfig } from '../config/config.js';
import logger from '../utils/logger.js';

const config = getConfig();

/**
 * Rate limiter for Firecrawl API requests
 * Implements token bucket algorithm with concurrency control
 */
class RateLimiter {
  constructor() {
    // Rate limit configuration
    this.rateLimitPerMinute = config.scraping.rateLimitPerMinute; // 10 requests/min
    this.maxConcurrent = config.scraping.maxConcurrent; // 2 concurrent requests
    
    // Token bucket: tokens replenish at rateLimitPerMinute per minute
    this.tokens = this.rateLimitPerMinute;
    this.lastRefill = Date.now();
    this.refillInterval = 60000; // 1 minute in milliseconds
    
    // Concurrency control
    this.activeRequests = 0;
    this.waitingQueue = [];
    
    // Start token refill timer
    this.startRefillTimer();
  }

  /**
   * Start token refill timer (refills tokens every minute)
   */
  startRefillTimer() {
    setInterval(() => {
      this.refillTokens();
    }, this.refillInterval);
  }

  /**
   * Refill tokens based on time elapsed
   */
  refillTokens() {
    const now = Date.now();
    const timeElapsed = now - this.lastRefill;
    
    // Calculate tokens to add (proportional to time elapsed)
    const tokensToAdd = (timeElapsed / this.refillInterval) * this.rateLimitPerMinute;
    this.tokens = Math.min(this.rateLimitPerMinute, this.tokens + tokensToAdd);
    this.lastRefill = now;
    
    // Process waiting queue if tokens available
    this.processQueue();
  }

  /**
   * Process waiting queue when tokens/concurrency slots become available
   */
  processQueue() {
    while (this.waitingQueue.length > 0 && this.canMakeRequest()) {
      const resolve = this.waitingQueue.shift();
      // Consume token and increment active requests
      this.tokens -= 1;
      this.activeRequests += 1;
      resolve();
    }
  }

  /**
   * Check if a request can be made (has tokens and concurrency slot)
   * @returns {boolean} True if request can be made
   */
  canMakeRequest() {
    return this.tokens >= 1 && this.activeRequests < this.maxConcurrent;
  }

  /**
   * Wait for rate limit (acquires token and concurrency slot)
   * @returns {Promise<void>} Resolves when request can proceed
   */
  async waitForRateLimit() {
    // Refill tokens first
    this.refillTokens();

    // If we can make request immediately, consume token and increment active requests
    if (this.canMakeRequest()) {
      this.tokens -= 1;
      this.activeRequests += 1;
      logger.debug(`Acquired rate limit slot. Tokens: ${this.tokens}, Active: ${this.activeRequests}`);
      return;
    }

    // Otherwise, wait in queue
    logger.debug(`Rate limit queue full. Queued requests: ${this.waitingQueue.length + 1}`);
    return new Promise((resolve) => {
      this.waitingQueue.push(resolve);
    });
  }

  /**
   * Acquire concurrency slot (alternative method name for clarity)
   * @returns {Promise<void>} Resolves when slot is available
   */
  async acquireConcurrencySlot() {
    return this.waitForRateLimit();
  }

  /**
   * Release concurrency slot after request completes
   */
  releaseSlot() {
    if (this.activeRequests > 0) {
      this.activeRequests -= 1;
      logger.debug(`Released concurrency slot. Active requests: ${this.activeRequests}`);
      
      // Process waiting queue
      this.processQueue();
    }
  }

  /**
   * Get current status
   * @returns {Object} Status information
   */
  getStatus() {
    return {
      tokens: this.tokens,
      activeRequests: this.activeRequests,
      waitingQueue: this.waitingQueue.length,
      rateLimitPerMinute: this.rateLimitPerMinute,
      maxConcurrent: this.maxConcurrent,
    };
  }

  /**
   * Reset rate limiter (for testing)
   */
  reset() {
    this.tokens = this.rateLimitPerMinute;
    this.lastRefill = Date.now();
    this.activeRequests = 0;
    this.waitingQueue = [];
  }
}

// Create singleton instance
const rateLimiter = new RateLimiter();

/**
 * Wrapper function to execute a function with rate limiting
 * @param {Function} fn - Async function to execute
 * @returns {Promise<any>} Result of the function
 */
export async function withRateLimit(fn) {
  try {
    // Wait for rate limit
    await rateLimiter.waitForRateLimit();
    
    try {
      // Execute function
      const result = await fn();
      return result;
    } finally {
      // Always release slot
      rateLimiter.releaseSlot();
    }
  } catch (error) {
    // Release slot on error
    rateLimiter.releaseSlot();
    throw error;
  }
}

/**
 * Get rate limiter instance
 * @returns {RateLimiter} Rate limiter instance
 */
export function getRateLimiter() {
  return rateLimiter;
}

export default rateLimiter;

