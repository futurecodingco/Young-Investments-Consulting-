export default async (req) => {
  try {
    const urlObj = new URL(req.url, 'https://dummy.base');
    let targetUrl = urlObj.searchParams.get('url');
    if (!targetUrl && req.url.includes('?url=')) {
      targetUrl = req.url.split('?url=')[1];
    }

    if (!targetUrl) {
      return new Response('Missing url parameter', { status: 400 });
    }

    const decodedUrl = decodeURIComponent(targetUrl);

    // Fetch server-side with browser User-Agent to bypass 403 anti-bot blocks
    const response = await fetch(decodedUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
        'Accept': 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8'
      }
    });

    if (!response.ok) {
      return new Response(`Failed to fetch image: ${response.statusText}`, { status: response.status });
    }

    const contentType = response.headers.get('content-type') || 'image/jpeg';
    const arrayBuffer = await response.arrayBuffer();

    return new Response(arrayBuffer, {
      status: 200,
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=86400',
        'Access-Control-Allow-Origin': '*'
      }
    });
  } catch (err) {
    return new Response(`Proxy error: ${err.message}`, { status: 500 });
  }
};
