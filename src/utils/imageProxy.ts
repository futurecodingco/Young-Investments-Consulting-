/**
 * Helper to wrap any external image URL (e.g. kommodo.ai or third-party host)
 * through the server-side proxy to prevent 403 Forbidden cross-origin blocks.
 * Works seamlessly across Vercel (/api/proxy-image) and Netlify (/.netlify/functions/proxy-image).
 */
export function getProxiedImageUrl(url: string | null | undefined): string {
  if (!url) return '';
  
  // If it's already a local asset or data URL, return as-is
  if (url.startsWith('data:') || url.startsWith('blob:') || url.startsWith('/') || !url.startsWith('http')) {
    return url;
  }

  // If it's already going through a proxy, return as-is
  if (url.includes('/api/proxy-image?url=') || url.includes('/.netlify/functions/proxy-image?url=')) {
    return url;
  }

  // Route through proxy URL
  return `/api/proxy-image?url=${encodeURIComponent(url)}`;
}
