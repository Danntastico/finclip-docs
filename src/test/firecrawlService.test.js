/**
 * Test script for Firecrawl service
 * Run with: node src/test/firecrawlService.test.js
 * 
 * Note: This test requires FIRECRAWL_API_KEY to be set in .env file
 */

import { scrapeUrl, scrapeUrls, testConnection } from '../services/firecrawlService.js';
import { getRateLimiter } from '../services/rateLimiter.js';
import logger from '../utils/logger.js';
import { getConfig } from '../config/config.js';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const config = getConfig();

/**
 * Test rate limiter
 */
function testRateLimiter() {
  console.log('\n=== Rate Limiter Test ===\n');
  
  const rateLimiter = getRateLimiter();
  const status = rateLimiter.getStatus();
  
  console.log('Rate Limiter Status:');
  console.log(`  Tokens: ${status.tokens}/${status.rateLimitPerMinute}`);
  console.log(`  Active Requests: ${status.activeRequests}/${status.maxConcurrent}`);
  console.log(`  Waiting Queue: ${status.waitingQueue}`);
  console.log('');
}

/**
 * Test Firecrawl connection
 */
async function testConnectionTest() {
  console.log('=== Connection Test ===\n');
  
  try {
    const connected = await testConnection();
    
    if (connected) {
      console.log('✅ Firecrawl connection test passed\n');
      return true;
    } else {
      console.error('❌ Firecrawl connection test failed\n');
      return false;
    }
  } catch (error) {
    console.error('❌ Connection test error:', error.message);
    console.error(error.stack);
    return false;
  }
}

/**
 * Test single URL scraping
 */
async function testSingleUrlScrape() {
  console.log('=== Single URL Scrape Test ===\n');
  
  // Use a simple test URL (Firecrawl homepage)
  const testUrl = 'https://firecrawl.dev';
  
  try {
    console.log(`Scraping URL: ${testUrl}`);
    const result = await scrapeUrl(testUrl);
    
    if (result.success) {
      console.log('✅ URL scraped successfully');
      console.log(`  Content length: ${result.markdown.length} characters`);
      console.log(`  Preview: ${result.markdown.substring(0, 100)}...`);
      console.log('');
      return true;
    } else {
      console.error('❌ URL scrape failed');
      console.error(`  Error: ${result.error}`);
      console.error(`  Attempts: ${result.attempts}`);
      console.log('');
      return false;
    }
  } catch (error) {
    console.error('❌ Scrape test error:', error.message);
    console.error(error.stack);
    console.log('');
    return false;
  }
}

/**
 * Test batch scraping (2 URLs)
 */
async function testBatchScrape() {
  console.log('=== Batch Scrape Test ===\n');
  
  const testUrls = [
    'https://firecrawl.dev',
    'https://docs.firecrawl.dev',
  ];
  
  try {
    console.log(`Scraping ${testUrls.length} URLs...`);
    
    let progressCount = 0;
    const results = await scrapeUrls(testUrls, {}, (url, result, index, total) => {
      progressCount++;
      console.log(`  [${index}/${total}] ${result.success ? '✅' : '❌'} ${url}`);
    });
    
    const successCount = results.filter(r => r.success).length;
    const failureCount = results.filter(r => !r.success).length;
    
    console.log('');
    console.log(`Results: ${successCount} successful, ${failureCount} failed`);
    
    if (successCount === testUrls.length) {
      console.log('✅ Batch scrape test passed\n');
      return true;
    } else {
      console.warn('⚠️  Batch scrape test partially failed\n');
      return false;
    }
  } catch (error) {
    console.error('❌ Batch scrape test error:', error.message);
    console.error(error.stack);
    console.log('');
    return false;
  }
}

/**
 * Test rate limiting behavior
 */
async function testRateLimiting() {
  console.log('=== Rate Limiting Test ===\n');
  
  const rateLimiter = getRateLimiter();
  
  console.log('Making 5 sequential requests to test rate limiting...');
  
  const testUrl = 'https://firecrawl.dev';
  const startTime = Date.now();
  
  try {
    for (let i = 1; i <= 5; i++) {
      const requestStart = Date.now();
      console.log(`  Request ${i}/5...`);
      
      const result = await scrapeUrl(testUrl);
      
      const requestTime = Date.now() - requestStart;
      const status = rateLimiter.getStatus();
      
      console.log(`    ✅ Completed in ${requestTime}ms`);
      console.log(`    Status: ${status.activeRequests} active, ${status.tokens.toFixed(1)} tokens, ${status.waitingQueue} queued`);
    }
    
    const totalTime = Date.now() - startTime;
    console.log('');
    console.log(`Total time: ${totalTime}ms (${(totalTime / 1000).toFixed(1)}s)`);
    console.log('✅ Rate limiting test completed\n');
    
    return true;
  } catch (error) {
    console.error('❌ Rate limiting test error:', error.message);
    console.error(error.stack);
    console.log('');
    return false;
  }
}

/**
 * Run all tests
 */
async function runTests() {
  try {
    console.log('=== Firecrawl Service Tests ===\n');
    
    // Check API key
    if (!config.firecrawl.apiKey || config.firecrawl.apiKey === 'your_firecrawl_api_key_here') {
      console.error('❌ FIRECRAWL_API_KEY is not set in .env file');
      console.error('Please set FIRECRAWL_API_KEY in your .env file to run tests');
      process.exit(1);
    }
    
    // Test rate limiter status
    testRateLimiter();
    
    // Test connection
    const connectionOk = await testConnectionTest();
    if (!connectionOk) {
      console.error('❌ Connection test failed. Cannot proceed with other tests.');
      process.exit(1);
    }
    
    // Test single URL scrape
    const singleOk = await testSingleUrlScrape();
    
    // Test batch scrape
    const batchOk = await testBatchScrape();
    
    // Test rate limiting
    const rateLimitOk = await testRateLimiting();
    
    // Summary
    console.log('=== Test Summary ===');
    console.log(`Connection Test: ${connectionOk ? '✅' : '❌'}`);
    console.log(`Single URL Scrape: ${singleOk ? '✅' : '❌'}`);
    console.log(`Batch Scrape: ${batchOk ? '✅' : '❌'}`);
    console.log(`Rate Limiting: ${rateLimitOk ? '✅' : '❌'}`);
    console.log('');
    
    const allPassed = connectionOk && singleOk && batchOk && rateLimitOk;
    
    if (allPassed) {
      console.log('✅ All tests passed!\n');
    } else {
      console.log('⚠️  Some tests failed\n');
      process.exit(1);
    }
    
  } catch (error) {
    console.error('\n❌ Test suite failed:', error.message);
    console.error(error.stack);
    process.exit(1);
  }
}

// Run tests
runTests().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});


