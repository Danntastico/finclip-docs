# FinClip Documentation Scraper

A Node.js application that extracts and organizes FinClip documentation from `https://super-apps.ai/mop/document/en/` using the Firecrawl API.

## Overview

This tool crawls the FinClip documentation website and extracts all documentation pages, organizing them into a structured directory format for offline access and study.

**Features:**
- 🔍 Extracts ~86 documentation pages across 6 categories
- 📁 Organizes content by category (API, Components, Framework, Guide, etc.)
- ⚡ Respects Firecrawl API rate limits (10 requests/min, 2 concurrent)
- 🔄 Automatic retry logic for failed requests
- 📝 Comprehensive logging and error reporting
- 🚀 Efficient batch processing with progress tracking

## Prerequisites

- **Node.js**: v18.0.0 or higher
- **npm**: Latest version
- **Firecrawl API Key**: Sign up at [firecrawl.dev](https://www.firecrawl.dev) (free plan provides 500 credits)

## Installation

1. **Clone or download this repository**

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   
   Copy the example environment file:
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` and add your Firecrawl API key:
   ```
   FIRECRAWL_API_KEY=your_firecrawl_api_key_here
   ```

## Configuration

The application can be configured via environment variables in `.env`:

| Variable | Description | Default |
|----------|-------------|---------|
| `FIRECRAWL_API_KEY` | Your Firecrawl API key (required) | - |
| `OUTPUT_DIR` | Directory where extracted docs will be saved | `./fin-clip` |
| `LOG_LEVEL` | Logging level (DEBUG, INFO, WARN, ERROR) | `INFO` |
| `LOG_FILE` | Path to log file | `./logs/scraper.log` |

## Usage

### Basic Usage

Run the scraper:
```bash
npm start
```

Or use nodemon for development (auto-reload on file changes):
```bash
npm run dev
```

### Expected Output

The scraper will:
1. Parse all sitemap files from `./sitemap-en/`
2. Extract URLs for each category
3. Process URLs in batches respecting rate limits
4. Save markdown content to `./fin-clip/` organized by category:

```
fin-clip/
├── api/
│   ├── overview.md
│   ├── basic.md
│   └── ...
├── base-library/
├── components/
├── developer-tools/
├── framework/
└── guide/
```

## Project Structure

```
finclip-docs/
├── docs/                      # Project documentation
│   ├── MAIN_DEFINITION.md    # Project requirements
│   └── 00_IMPLEMENTATION_PLAN.md  # Implementation plan
├── sitemap-en/               # Sitemap files with URLs to scrape
│   ├── api.md
│   ├── components.md
│   ├── developer-tools.md
│   ├── framework.md
│   ├── guide.md
│   └── base-library.md
├── src/                      # Source code
│   ├── config/
│   │   └── config.js         # Configuration management
│   ├── parsers/
│   │   └── sitemapParser.js  # Sitemap parsing logic
│   ├── services/
│   │   ├── firecrawlService.js  # Firecrawl API integration
│   │   └── rateLimiter.js    # Rate limiting logic
│   ├── utils/
│   │   ├── fileUtils.js      # File operations
│   │   ├── urlUtils.js       # URL utilities
│   │   └── logger.js         # Logging utility
│   └── index.js              # Main entry point
├── fin-clip/                 # Output directory (generated)
├── logs/                     # Log files
├── .env                      # Environment variables (create from .env.example)
├── .env.example              # Environment variable template
├── .gitignore
├── package.json
└── README.md
```

## Firecrawl API Limits (Free Plan)

- **Total Credits**: 500 credits (one-time)
- **Concurrent Requests**: 2 simultaneous requests max
- **Rate Limits**: 
  - `/scrape`: 10 requests/minute
  - Credit Cost: 1 credit per page

**Note**: This project requires ~86 credits (well within free plan limits).

## How It Works

1. **Sitemap Parsing**: Reads markdown files from `./sitemap-en/` and extracts all URLs organized by category.

2. **Rate Limiting**: Implements token bucket algorithm to respect Firecrawl API limits (10 requests/min, 2 concurrent).

3. **Batch Processing**: Processes URLs in batches with automatic retry logic for failed requests.

4. **Content Extraction**: Uses Firecrawl API to extract clean markdown content from each URL.

5. **File Organization**: Saves extracted content to `./fin-clip/` directory, preserving category structure and creating meaningful filenames from URLs.

6. **Error Handling**: Continues processing on individual failures, logs errors, and generates error report for manual review.

## Logging

Logs are written to both console and file (if configured):

- **Console**: Real-time progress and status updates
- **File**: Detailed logs saved to `./logs/scraper.log`

Log levels:
- `DEBUG`: Detailed debugging information
- `INFO`: General information (default)
- `WARN`: Warning messages
- `ERROR`: Error messages

## Error Handling

The scraper includes robust error handling:

- **API Errors**: Automatic retry with exponential backoff (max 3 attempts)
- **Network Errors**: Retry logic with increasing delays
- **Individual Failures**: Continues processing other URLs if one fails
- **Error Report**: Failed URLs are saved to `errors.json` for manual review

## Troubleshooting

### "FIRECRAWL_API_KEY is required" error
- Ensure `.env` file exists and contains your API key
- Check that the API key is correctly formatted (no quotes, no spaces)

### Rate limit errors
- The scraper should handle rate limits automatically
- If errors persist, check your Firecrawl plan limits
- Consider reducing concurrent requests in code if needed

### Missing files in output
- Check `errors.json` for failed URLs
- Review log file for detailed error messages
- Verify URLs in sitemap files are still valid

### Permission errors
- Ensure write permissions for `./fin-clip/` and `./logs/` directories
- Check disk space availability

## Development

### Running in Development Mode

```bash
npm run dev
```

Uses `nodemon` to automatically restart on file changes.

### Code Structure

The project follows a modular architecture:

- **config/**: Configuration management
- **parsers/**: Data parsing logic (sitemap parsing)
- **services/**: External API integrations (Firecrawl)
- **utils/**: Utility functions (file operations, logging, URL handling)
- **index.js**: Main orchestrator

## License

ISC

## Contributing

1. Review the implementation plan in `docs/00_IMPLEMENTATION_PLAN.md`
2. Follow existing code patterns
3. Test changes thoroughly
4. Update documentation as needed

## References

- [FinClip Documentation](https://super-apps.ai/mop/document/en/develop/guide/feature.html)
- [Firecrawl API Documentation](https://docs.firecrawl.dev)
- [Firecrawl Node.js SDK](https://docs.firecrawl.dev/sdks/node)

---

**Note**: This tool is designed for educational purposes to extract and study FinClip documentation. Ensure you comply with the website's terms of service and robots.txt when using this tool.

