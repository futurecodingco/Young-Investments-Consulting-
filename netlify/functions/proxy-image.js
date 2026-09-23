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
    let fetchUrl = decodedUrl;
    if (decodedUrl.includes('kommodo.ai/i/i5QAQ87RwuCwkNWFdCt9')) {
      fetchUrl = 'https://plain-eeur-prod-public.komododecks.com/202609/23/i5QAQ87RwuCwkNWFdCt9/image.jpg';
    }

    let response = await fetch(fetchUrl, {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
        Accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
      },
    });

    if (!response.ok) {
      return new Response(`Failed to fetch image: ${response.statusText}`, { status: response.status });
    }

    let contentType = response.headers.get('content-type') || 'image/jpeg';
    if (contentType.includes('text/html')) {
      const htmlText = await response.text();
      const match =
        htmlText.match(/"imageUrl"\s*:\s*"(https:\/\/[^"]+)"/) ||
        htmlText.match(/"ogImageUrl"\s*:\s*"(https:\/\/[^"]+)"/) ||
        htmlText.match(/src="(https:\/\/[^"]+komododecks\.com[^"]+)"/);

      if (match) {
        const rawImgUrl = match[1].replace(/\\u0026/g, '&');
        response = await fetch(rawImgUrl, {
          headers: {
            'User-Agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
            Accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
          },
        });
        contentType = response.headers.get('content-type') || 'image/jpeg';
      }
    }

    const arrayBuffer = await response.arrayBuffer();

    return new Response(arrayBuffer, {
      status: 200,
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=86400',
        'Access-Control-Allow-Origin': '*',
      },
    });
  } catch (err) {
    return new Response(`Proxy error: ${err.message}`, { status: 500 });
  }
};
