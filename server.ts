import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

app.use(express.json({ limit: '25mb' }));

app.post('/api/upload-ceo-photo', (req, res) => {
  try {
    const { image } = req.body;
    if (!image) {
      return res.status(400).json({ error: 'No image provided' });
    }
    const base64Data = image.replace(/^data:image\/\w+;base64,/, '');
    const buffer = Buffer.from(base64Data, 'base64');
    const targets = [
      path.join(__dirname, 'src/assets/images/Mr CEO.jpg'),
      path.join(__dirname, 'src/assets/images/mr_ceo.jpg'),
      path.join(__dirname, 'public/Mr CEO.jpg'),
      path.join(__dirname, 'public/mr_ceo.jpg'),
      path.join(__dirname, 'dist/Mr CEO.jpg'),
      path.join(__dirname, 'dist/mr_ceo.jpg')
    ];
    targets.forEach(target => {
      const dir = path.dirname(target);
      if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
      fs.writeFileSync(target, buffer);
    });
    return res.json({ success: true, url: '/Mr%20CEO.jpg' });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: 'Failed to save image' });
  }
});

// Netlify function & local proxy image route
app.get(['/.netlify/functions/proxy-image', '/api/proxy-image'], async (req, res) => {
  try {
    const targetUrl = req.query.url as string;
    if (!targetUrl) {
      return res.status(400).send('Missing url parameter');
    }

    const decoded = decodeURIComponent(targetUrl);
    const upstream = await fetch(decoded, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
        'Accept': 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8'
      }
    });

    if (!upstream.ok) {
      return res.status(upstream.status).send(`Upstream returned ${upstream.status}`);
    }

    const contentType = upstream.headers.get('content-type') || 'image/jpeg';
    res.setHeader('Content-Type', contentType);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Cache-Control', 'public, max-age=86400');

    const arrayBuffer = await upstream.arrayBuffer();
    return res.end(Buffer.from(arrayBuffer));
  } catch (err: any) {
    return res.status(500).send(`Proxy error: ${err.message}`);
  }
});

// Container health check endpoint for Cloud Run and monitoring
app.get('/api/health', (_req, res) => {
  res.status(200).json({
    status: 'ok',
    entity: 'Young Investments Consulting Holdings (Pty) Ltd',
    timestamp: new Date().toISOString()
  });
});

const distDir = path.join(__dirname, 'dist');
const indexHtmlPath = path.join(distDir, 'index.html');

// Serve compiled static assets if available
if (fs.existsSync(distDir)) {
  app.use(express.static(distDir, {
    maxAge: '1d',
    index: 'index.html'
  }));

  // Fallback to index.html for SPA client-side routing
  app.get('*', (_req, res) => {
    if (fs.existsSync(indexHtmlPath)) {
      res.sendFile(indexHtmlPath);
    } else {
      res.status(503).send('Application bundle is being generated. Please refresh shortly.');
    }
  });
} else {
  app.get('*', (_req, res) => {
    res.status(503).send('Production build not found. Please run npm run build.');
  });
}

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Corporate portal server listening on port ${PORT} [0.0.0.0]`);
});
