export default async function handler(req, res) {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', '*');
    return res.status(200).end();
  }

  // Extract target URL from query parameter
  const targetUrl = req.query?.url;
  if (!targetUrl || typeof targetUrl !== 'string') {
    return res.status(400).send('Missing url parameter');
  }

  try {
    const decodedUrl = decodeURIComponent(targetUrl);

    // If it's a known kommodo page, direct to raw public asset or fetch HTML to resolve
    let fetchUrl = decodedUrl;
    if (decodedUrl.includes('kommodo.ai/i/i5QAQ87RwuCwkNWFdCt9')) {
      fetchUrl = 'https://plain-eeur-prod-public.komododecks.com/202609/23/i5QAQ87RwuCwkNWFdCt9/image.jpg';
    }

    // Perform server-side fetch with browser user-agent to bypass 403 blocks
    let response = await fetch(fetchUrl, {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
        Accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
      },
    });

    if (!response.ok) {
      return res.status(response.status).send(`Upstream error: ${response.statusText}`);
    }

    let contentType = response.headers.get('content-type') || 'image/jpeg';

    // If upstream returned HTML (e.g. kommodo viewer page), parse actual image asset URL
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
    const buffer = Buffer.from(arrayBuffer);

    res.setHeader('Content-Type', contentType);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Cache-Control', 'public, max-age=86400, s-maxage=86400, stale-while-revalidate=604800');
    return res.status(200).send(buffer);
  } catch (error) {
    return res.status(500).send(`Proxy failure: ${error.message}`);
  }
}
