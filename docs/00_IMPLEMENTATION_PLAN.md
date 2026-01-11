# FinClip Documentation Scraper - Implementation Plan

## Project Overview

**Objective**: Extract and organize FinClip documentation from `https://super-apps.ai/mop/document/en/` using Firecrawl API v2.

**Technology Stack**: Node.js with Firecrawl Official SDK (v2)

**Target Directory**: `./fin-clip/` (organized by documentation categories)

**Total URLs**: ~86 pages across 6 categories

---

## Firecrawl Free Plan Constraints

- **Total Credits**: 500 credits (one-time)
- **Concurrent Requests**: 2 simultaneous requests max
- **Rate Limits**: 
  - `/scrape`: 10 requests/min
  - `/map`: 10 requests/min
  - `/crawl`: 1 request/min
- **Credit Cost**: 1 credit per page (scrape/map/crawl)

**Feasibility**: ✅ Well within limits (~86 credits needed)

---

## Project Structure

```
finclip-docs/
├── docs/
│   ├── MAIN_DEFINITION.md
│   └── 00_IMPLEMENTATION_PLAN.md
├── sitemap-en/
│   ├── api.md
│   ├── base-library.md
│   ├── components.md
│   ├── developer-tools.md
│   ├── framework.md
│   └── guide.md
├── src/
│   ├── config/
│   │   └── config.js
│   ├── parsers/
│   │   └── sitemapParser.js
│   ├── services/
│   │   ├── firecrawlService.js
│   │   └── rateLimiter.js
│   ├── utils/
│   │   ├── fileUtils.js
│   │   ├── urlUtils.js
│   │   └── logger.js
│   └── index.js
├── fin-clip/              # Output directory (generated)
│   ├── api/
│   ├── base-library/
│   ├── components/
│   ├── developer-tools/
│   ├── framework/
│   └── guide/
├── logs/                   # Log files
├── package.json
├── .env.example
├── .env                    # API key (gitignored)
├── .gitignore
└── README.md
```

---

## Dependencies

### Core Dependencies
- `@mendable/firecrawl-js`: Official Firecrawl SDK v2
- `dotenv`: Environment variable management
- `fs-extra`: Enhanced file system operations

### Development Dependencies
- `nodemon`: Development auto-reload
- `eslint`: Code linting (optional)

---

## Implementation Phases

### Phase 0: Project Setup & Configuration

**Goal**: Initialize Node.js project with dependencies and configuration

#### Tasks:
1. **Initialize Node.js project**
   - Create `package.json` with project metadata
   - Set up scripts: `start`, `dev`, `test`
   - Configure Node.js version (recommend v18+)

2. **Install dependencies**
   ```bash
   npm install @mendable/firecrawl-js dotenv fs-extra
   npm install --save-dev nodemon
   ```

3. **Create environment configuration**
   - Create `.env.example` with template
   - Create `.env` for actual API key (gitignored)
   - Create `src/config/config.js` to load and validate config

4. **Create directory structure**
   - Create `src/` with subdirectories
   - Create `fin-clip/` output directory (gitignored)
   - Create `logs/` directory

5. **Set up logging utility**
   - Create `src/utils/logger.js`
   - Support file and console logging
   - Log levels: INFO, WARN, ERROR, DEBUG

6. **Create `.gitignore`**
   - Ignore `node_modules/`, `.env`, `fin-clip/`, `logs/`

**Deliverables**:
- ✅ `package.json`
- ✅ `.env.example`
- ✅ `src/config/config.js`
- ✅ `src/utils/logger.js`
- ✅ Basic directory structure
- ✅ `.gitignore`

---

### Phase 1: Sitemap Parser

**Goal**: Parse sitemap markdown files and extract all URLs organized by category

#### Tasks:
1. **Create sitemap parser module** (`src/parsers/sitemapParser.js`)
   - Function to read markdown files from `sitemap-en/` directory
   - Parse markdown to extract URLs
   - Extract category name from filename (e.g., `api.md` → `api`)
   - Handle section headers in markdown files
   - Return structured data: `{ category, urls: [] }`

2. **Create URL utilities** (`src/utils/urlUtils.js`)
   - Validate URL format
   - Extract page name from URL for file naming
   - Normalize URLs (remove trailing slashes, handle fragments)
   - Deduplicate URLs

3. **Create file utilities** (`src/utils/fileUtils.js`)
   - Read directory contents
   - Check file existence
   - Create directory if not exists

4. **Test parser**
   - Parse all 6 sitemap files
   - Validate URL extraction
   - Check for duplicates
   - Verify category mapping

**Deliverables**:
- ✅ `src/parsers/sitemapParser.js`
- ✅ `src/utils/urlUtils.js`
- ✅ `src/utils/fileUtils.js`
- ✅ Parser outputs structured URL list with categories

**Expected Output**:
```javascript
[
  {
    category: 'api',
    urls: [
      'https://super-apps.ai/mop/document/en/develop/api/overview.html',
      // ... more URLs
    ]
  },
  // ... more categories
]
```

---

### Phase 2: Firecrawl Service & Rate Limiting

**Goal**: Implement Firecrawl API integration with rate limiting and concurrency control

#### Tasks:
1. **Create rate limiter utility** (`src/services/rateLimiter.js`)
   - Token bucket or queue-based rate limiter
   - Respect 10 requests/min limit for `/scrape`
   - Support concurrent request limiting (max 2)
   - Queue management for rate limit enforcement

2. **Create Firecrawl service** (`src/services/firecrawlService.js`)
   - Initialize Firecrawl client with API key
   - Implement `scrapeUrl(url, options)` function
   - Handle API errors and retries (with exponential backoff)
   - Return markdown content
   - Support error handling and logging

3. **Implement retry logic**
   - Retry failed requests (max 3 attempts)
   - Exponential backoff: 1s, 2s, 4s
   - Handle specific error types (rate limit, network, API errors)

4. **Test Firecrawl integration**
   - Test with 1-2 sample URLs
   - Verify markdown extraction
   - Test rate limiting behavior
   - Test error handling

**Deliverables**:
- ✅ `src/services/rateLimiter.js`
- ✅ `src/services/firecrawlService.js`
- ✅ Rate limiting working correctly
- ✅ Error handling and retries implemented

**Key Functions**:
```javascript
// Rate limiter
async function waitForRateLimit()
async function acquireConcurrencySlot()

// Firecrawl service
async function scrapeUrl(url)
async function scrapeUrls(urls) // Batch processing
```

---

### Phase 3: Batch Processing & File Management

**Goal**: Process URLs in batches and save extracted content to organized directory structure

#### Tasks:
1. **Implement batch processor**
   - Process URLs respecting concurrency limit (2 concurrent)
   - Process in batches to respect rate limits
   - Track progress (success/failure counts)
   - Continue on individual failures

2. **Create output directory structure**
   - Generate `fin-clip/{category}/` directories
   - Create subdirectories if needed (based on URL structure)
   - Handle nested paths (e.g., `developer-tools/finclip-studio/`)

3. **Implement file naming**
   - Extract meaningful filename from URL
   - Convert URL path to filesystem-safe name
   - Handle special characters and duplicates
   - Example: `api/overview.html` → `api/overview.md`

4. **Save extracted content**
   - Save markdown content to appropriate directory
   - Preserve file structure
   - Add metadata header (source URL, extraction date)
   - Handle file write errors

5. **Progress tracking**
   - Log progress to console
   - Save progress state (optional: resume capability)
   - Generate summary report

**Deliverables**:
- ✅ Batch processing logic in `src/index.js`
- ✅ Directory creation utilities
- ✅ File saving utilities
- ✅ Progress tracking and logging

**Key Functions**:
```javascript
async function processCategory(categoryData)
async function processUrl(url, category)
async function saveContent(content, url, category)
function generateFileName(url)
```

---

### Phase 4: Error Handling & Resilience

**Goal**: Robust error handling, logging, and recovery mechanisms

#### Tasks:
1. **Implement comprehensive error handling**
   - Categorize errors (API errors, network errors, file errors)
   - Log errors with context (URL, category, error type)
   - Continue processing on individual failures
   - Collect failed URLs for retry

2. **Create error report**
   - Track failed URLs in memory
   - Generate error report at end (`errors.json`)
   - Include error type and message for each failure

3. **Implement resume capability** (optional)
   - Save progress state (which URLs completed)
   - Allow resuming from last successful point
   - Skip already downloaded files

4. **Add validation checks**
   - Validate API key before starting
   - Check available credits (if API supports it)
   - Validate output directory permissions
   - Check disk space

**Deliverables**:
- ✅ Error handling throughout application
- ✅ Error logging and reporting
- ✅ Graceful failure handling
- ✅ `errors.json` with failed URLs

---

### Phase 5: Main Orchestrator & CLI

**Goal**: Main entry point that orchestrates all components

#### Tasks:
1. **Create main entry point** (`src/index.js`)
   - Orchestrate all phases
   - Parse sitemap files
   - Initialize services
   - Process all categories
   - Generate final report

2. **Implement CLI interface**
   - Command-line arguments support
   - Options:
     - `--category`: Process specific category only
     - `--limit`: Limit number of URLs (for testing)
     - `--resume`: Resume from previous run
     - `--output`: Custom output directory

3. **Create summary report**
   - Total URLs processed
   - Success/failure counts
   - Credits used (if available)
   - Processing time
   - Output directory location

4. **Add startup validation**
   - Check API key exists
   - Validate sitemap directory exists
   - Create output directory if needed
   - Display configuration summary

**Deliverables**:
- ✅ `src/index.js` (main orchestrator)
- ✅ CLI argument parsing
- ✅ Summary report generation
- ✅ Clean console output with progress

**Execution Flow**:
```
1. Load configuration
2. Validate setup
3. Parse sitemap files
4. Display summary (X URLs found)
5. Process each category
6. Show progress bar/status
7. Generate final report
8. Save error report (if any failures)
```

---

### Phase 6: Testing & Validation

**Goal**: Test with sample data and validate output

#### Tasks:
1. **Test with small subset**
   - Process 3-5 URLs from one category
   - Verify markdown extraction quality
   - Check file organization
   - Validate rate limiting

2. **Test error scenarios**
   - Invalid API key
   - Network failure simulation
   - Rate limit handling
   - File permission errors

3. **Validate output**
   - Check all files saved correctly
   - Verify directory structure matches sitemap
   - Validate markdown content quality
   - Check for missing pages

4. **Performance testing**
   - Measure processing time
   - Verify rate limiting compliance
   - Check memory usage
   - Test with full dataset

**Deliverables**:
- ✅ Tested with sample data
- ✅ Error scenarios handled
- ✅ Output validated
- ✅ Ready for full extraction

---

### Phase 7: Documentation & Cleanup

**Goal**: Complete documentation and finalize project

#### Tasks:
1. **Create README.md**
   - Project description
   - Installation instructions
   - Configuration guide
   - Usage examples
   - Troubleshooting

2. **Add code comments**
   - Document complex functions
   - Add JSDoc comments for public APIs
   - Inline comments for non-obvious logic

3. **Final cleanup**
   - Remove test files
   - Clean up console logs (use logger)
   - Optimize imports
   - Format code consistently

4. **Update implementation plan**
   - Mark completed phases
   - Note any deviations
   - Document lessons learned

**Deliverables**:
- ✅ Comprehensive README.md
- ✅ Code documentation
- ✅ Clean, production-ready code

---

## Execution Strategy

### Recommended Order:
1. **Phase 0**: Project setup (Foundation)
2. **Phase 1**: Sitemap parser (Data extraction)
3. **Phase 2**: Firecrawl service (API integration)
4. **Phase 3**: Batch processing (Core logic)
5. **Phase 4**: Error handling (Robustness)
6. **Phase 5**: Main orchestrator (Integration)
7. **Phase 6**: Testing (Validation)
8. **Phase 7**: Documentation (Polish)

### Testing Strategy:
- **Incremental testing**: Test each phase before proceeding
- **Small batch first**: Test with 2-3 URLs before full run
- **Monitor credits**: Check credit usage during development
- **Validate output**: Manually check first few extracted files

### Rate Limiting Strategy:
- **Queue-based approach**: Maintain request queue
- **Token bucket**: Allow up to 10 requests per minute
- **Concurrency control**: Use semaphore for max 2 concurrent
- **Delay between batches**: Add small delays to stay under limits

### Error Recovery:
- **Continue on failure**: Don't stop entire process on single failure
- **Retry logic**: Automatic retry for transient errors
- **Failed URL tracking**: Collect failed URLs for manual review
- **Resume capability**: Option to resume from last successful point

---

## Success Criteria

✅ **Functional Requirements**:
- [ ] All 86 URLs successfully extracted
- [ ] Content saved in organized directory structure
- [ ] Markdown format preserved
- [ ] Rate limits respected
- [ ] No API errors (or properly handled)

✅ **Quality Requirements**:
- [ ] Error handling for all failure scenarios
- [ ] Progress logging visible
- [ ] Clean, maintainable code
- [ ] Comprehensive documentation

✅ **Performance Requirements**:
- [ ] Processing completes within credit limits
- [ ] Rate limits not exceeded
- [ ] Efficient use of resources

---

## Risk Mitigation

| Risk | Mitigation |
|------|------------|
| API key invalid/expired | Validate at startup |
| Rate limit exceeded | Implement strict rate limiter |
| Network failures | Retry logic with backoff |
| Disk space issues | Check available space before starting |
| Credit exhaustion | Monitor usage, test with small batch first |
| URL changes | Flexible parsing, error logging |
| File permission errors | Validate permissions, handle gracefully |

---

## Estimated Timeline

- **Phase 0**: 30 minutes (Setup)
- **Phase 1**: 1 hour (Parser)
- **Phase 2**: 2 hours (API + Rate limiting)
- **Phase 3**: 1.5 hours (Batch processing)
- **Phase 4**: 1 hour (Error handling)
- **Phase 5**: 1 hour (Main orchestrator)
- **Phase 6**: 1 hour (Testing)
- **Phase 7**: 30 minutes (Documentation)

**Total Estimated Time**: ~8-9 hours

**Note**: Actual time may vary based on API learning curve and debugging.

---

## Next Steps

1. Review and approve this implementation plan
2. Set up Firecrawl API account and get API key
3. Begin Phase 0: Project Setup
4. Proceed phase by phase, testing as we go

---

## Notes

- Keep Firecrawl API key secure (never commit to git)
- Monitor credit usage during development
- Test incrementally to catch issues early
- Maintain clean git history with meaningful commits

