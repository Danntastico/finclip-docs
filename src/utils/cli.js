/**
 * Simple CLI argument parser
 */

/**
 * Parse command-line arguments
 * @returns {Object} Parsed arguments
 */
export function parseArgs() {
  const args = process.argv.slice(2);
  const options = {
    category: null,
    limit: null,
    resume: false,
    output: null,
    help: false,
  };

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];

    switch (arg) {
      case '--category':
      case '-c':
        options.category = args[++i];
        break;
      case '--limit':
      case '-l':
        options.limit = parseInt(args[++i], 10);
        break;
      case '--resume':
      case '-r':
        options.resume = true;
        break;
      case '--output':
      case '-o':
        options.output = args[++i];
        break;
      case '--help':
      case '-h':
        options.help = true;
        break;
      default:
        if (arg.startsWith('--')) {
          console.warn(`Unknown option: ${arg}`);
        }
    }
  }

  return options;
}

/**
 * Print help message
 */
export function printHelp() {
  console.log(`
FinClip Documentation Scraper

Usage:
  node src/index.js [options]

Options:
  --category, -c <name>    Process specific category only
  --limit, -l <number>     Limit number of URLs per category (for testing)
  --resume, -r             Resume from previous run (skip completed URLs)
  --output, -o <path>      Custom output directory
  --help, -h               Show this help message

Examples:
  node src/index.js
  node src/index.js --category api
  node src/index.js --limit 5
  node src/index.js --resume
  node src/index.js --output ./my-output
  node src/index.js --category guide --limit 10
`);
}

