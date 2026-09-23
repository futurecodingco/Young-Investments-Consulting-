import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

app.use(express.json());

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
