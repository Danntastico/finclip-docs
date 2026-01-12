/**
 * URL validation and normalization utilities
 */

/**
 * Validate URL format
 * @param {string} url - URL to validate
 * @returns {boolean} True if valid URL, false otherwise
 */
export function isValidUrl(url) {
  if (!url || typeof url !== 'string') {
    return false;
  }

  try {
    const urlObj = new URL(url);
    // Check if protocol is http or https
    return urlObj.protocol === 'http:' || urlObj.protocol === 'https:';
  } catch {
    return false;
  }
}

/**
 * Normalize URL (remove trailing slashes, preserve fragments)
 * @param {string} url - URL to normalize
 * @returns {string} Normalized URL
 */
export function normalizeUrl(url) {
  if (!url || typeof url !== 'string') {
    return url;
  }

  try {
    const urlObj = new URL(url);
    
    // Remove trailing slash from pathname (except root path)
    if (urlObj.pathname !== '/' && urlObj.pathname.endsWith('/')) {
      urlObj.pathname = urlObj.pathname.slice(0, -1);
    }
    
    return urlObj.toString();
  } catch {
    // If URL parsing fails, return original
    return url;
  }
}

/**
 * Extract page name from URL for file naming
 * @param {string} url - URL to extract name from
 * @returns {string} Page name (last segment of path)
 */
export function extractPageName(url) {
  if (!url || typeof url !== 'string') {
    return 'index';
  }

  try {
    const urlObj = new URL(url);
    const pathname = urlObj.pathname;
    
    // Remove leading/trailing slashes and get last segment
    const segments = pathname.split('/').filter(seg => seg.length > 0);
    
    if (segments.length === 0) {
      return 'index';
    }
    
    // Get last segment and remove file extension if present
    let name = segments[segments.length - 1];
    if (name.includes('.')) {
      name = name.substring(0, name.lastIndexOf('.'));
    }
    
    return name || 'index';
  } catch {
    return 'index';
  }
}

/**
 * Remove URL fragment (hash)
 * @param {string} url - URL with possible fragment
 * @returns {string} URL without fragment
 */
export function removeFragment(url) {
  if (!url || typeof url !== 'string') {
    return url;
  }

  try {
    const urlObj = new URL(url);
    urlObj.hash = '';
    return urlObj.toString();
  } catch {
    // If URL parsing fails, try simple string replacement
    const hashIndex = url.indexOf('#');
    return hashIndex !== -1 ? url.substring(0, hashIndex) : url;
  }
}

/**
 * Deduplicate array of URLs
 * @param {string[]} urls - Array of URLs
 * @returns {string[]} Deduplicated array of URLs (normalized)
 */
export function deduplicateUrls(urls) {
  if (!Array.isArray(urls)) {
    return [];
  }

  const seen = new Set();
  const unique = [];

  for (const url of urls) {
    // Normalize and remove fragment for comparison
    const normalized = removeFragment(normalizeUrl(url));
    
    if (normalized && !seen.has(normalized)) {
      seen.add(normalized);
      unique.push(normalized);
    }
  }

  return unique;
}

/**
 * Filter and validate URLs from an array
 * @param {string[]} urls - Array of potential URLs
 * @returns {string[]} Array of valid, normalized URLs
 */
export function filterValidUrls(urls) {
  if (!Array.isArray(urls)) {
    return [];
  }

  return urls
    .filter(url => url && typeof url === 'string')
    .filter(url => isValidUrl(url))
    .map(url => normalizeUrl(url));
}

