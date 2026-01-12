/**
 * Test script for sitemap parser
 * Run with: node src/test/sitemapParser.test.js
 */

import { parseAllSitemaps, getSitemapStats, getAllUrls } from '../parsers/sitemapParser.js';
import logger from '../utils/logger.js';
import { getConfig } from '../config/config.js';

const config = getConfig();

/**
 * Run sitemap parser tests
 */
async function runTests() {
  try {
    logger.info('Starting sitemap parser tests...');
    console.log('\n=== Sitemap Parser Test ===\n');

    // Parse all sitemaps
    console.log('1. Parsing all sitemap files...');
    const parsedSitemaps = await parseAllSitemaps();
    
    if (parsedSitemaps.length === 0) {
      console.error('❌ No sitemaps parsed!');
      process.exit(1);
    }
    
    console.log(`✅ Successfully parsed ${parsedSitemaps.length} sitemap files\n`);

    // Display statistics
    console.log('2. Statistics:');
    const stats = getSitemapStats(parsedSitemaps);
    console.log(`   Total Categories: ${stats.totalCategories}`);
    console.log(`   Total URLs: ${stats.totalUrls}`);
    console.log('\n   URLs by Category:');
    for (const [category, count] of Object.entries(stats.urlsByCategory)) {
      console.log(`     - ${category}: ${count} URLs`);
    }
    console.log('');

    // Validate category mapping
    console.log('3. Validating category mapping...');
    const categories = parsedSitemaps.map(s => s.category);
    const expectedCategories = ['api', 'base-library', 'components', 'developer-tools', 'framework', 'guide'];
    const missingCategories = expectedCategories.filter(cat => !categories.includes(cat));
    const extraCategories = categories.filter(cat => !expectedCategories.includes(cat));
    
    if (missingCategories.length > 0) {
      console.warn(`   ⚠️  Missing categories: ${missingCategories.join(', ')}`);
    }
    if (extraCategories.length > 0) {
      console.warn(`   ⚠️  Extra categories: ${extraCategories.join(', ')}`);
    }
    if (missingCategories.length === 0 && extraCategories.length === 0) {
      console.log('   ✅ All expected categories found');
    }
    console.log('');

    // Check for empty URLs
    console.log('4. Checking for empty URL lists...');
    const emptySitemaps = parsedSitemaps.filter(s => s.urls.length === 0);
    if (emptySitemaps.length > 0) {
      console.warn(`   ⚠️  Found ${emptySitemaps.length} sitemaps with no URLs:`);
      emptySitemaps.forEach(s => console.warn(`     - ${s.category}`));
    } else {
      console.log('   ✅ All sitemaps contain URLs');
    }
    console.log('');

    // Check for duplicates within categories
    console.log('5. Checking for duplicate URLs within categories...');
    let hasDuplicates = false;
    for (const sitemap of parsedSitemaps) {
      const uniqueUrls = new Set(sitemap.urls);
      if (uniqueUrls.size < sitemap.urls.length) {
        const duplicates = sitemap.urls.length - uniqueUrls.size;
        console.warn(`   ⚠️  ${sitemap.category}: ${duplicates} duplicate URL(s)`);
        hasDuplicates = true;
      }
    }
    if (!hasDuplicates) {
      console.log('   ✅ No duplicate URLs within categories');
    }
    console.log('');

    // Check for duplicates across categories
    console.log('6. Checking for duplicate URLs across categories...');
    const allUrls = await getAllUrls();
    const totalUrls = parsedSitemaps.reduce((sum, s) => sum + s.urls.length, 0);
    const uniqueCount = allUrls.length;
    if (totalUrls > uniqueCount) {
      const duplicates = totalUrls - uniqueCount;
      console.warn(`   ⚠️  Found ${duplicates} duplicate URL(s) across categories`);
      console.log(`   Total URLs: ${totalUrls}, Unique URLs: ${uniqueCount}`);
    } else {
      console.log('   ✅ No duplicate URLs across categories');
    }
    console.log('');

    // Sample URLs from each category
    console.log('7. Sample URLs from each category:');
    for (const sitemap of parsedSitemaps.slice(0, 3)) { // Show first 3 categories
      console.log(`   ${sitemap.category}:`);
      const sampleUrls = sitemap.urls.slice(0, 2);
      sampleUrls.forEach(url => console.log(`     - ${url}`));
      if (sitemap.urls.length > 2) {
        console.log(`     ... and ${sitemap.urls.length - 2} more`);
      }
    }
    console.log('');

    // Summary
    console.log('=== Test Summary ===');
    console.log(`✅ Parsed ${parsedSitemaps.length} categories`);
    console.log(`✅ Extracted ${stats.totalUrls} URLs`);
    console.log(`✅ Found ${uniqueCount} unique URLs`);
    console.log('\n✅ All tests passed!\n');

  } catch (error) {
    console.error('\n❌ Test failed:', error.message);
    console.error(error.stack);
    process.exit(1);
  }
}

// Run tests
runTests().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});

