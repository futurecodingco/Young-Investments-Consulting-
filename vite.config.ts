import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import { defineConfig, Plugin } from 'vite';

function imageProxyPlugin(): Plugin {
  return {
    name: 'image-proxy-plugin',
    configureServer(server) {
      const handleProxy = async (req: any, res: any) => {
        try {
          const host = req.headers.host || 'localhost:3000';
          const fullUrl = new URL(req.url || '', `http://${host}`);
          const targetUrl = fullUrl.searchParams.get('url');

          if (!targetUrl) {
            res.statusCode = 400;
            res.end('Missing url parameter');
            return;
          }

          const decoded = decodeURIComponent(targetUrl);
          const upstream = await fetch(decoded, {
            headers: {
              'User-Agent':
                'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
              Accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
            },
          });

          if (!upstream.ok) {
            res.statusCode = upstream.status;
            res.end(`Upstream returned ${upstream.status}`);
            return;
          }

          const contentType = upstream.headers.get('content-type') || 'image/jpeg';
          res.setHeader('Content-Type', contentType);
          res.setHeader('Access-Control-Allow-Origin', '*');
          res.setHeader('Cache-Control', 'public, max-age=86400');

          const arrayBuffer = await upstream.arrayBuffer();
          res.end(Buffer.from(arrayBuffer));
        } catch (err: any) {
          res.statusCode = 500;
          res.end(`Proxy error: ${err.message}`);
        }
      };

      // Vercel & Netlify proxy routes in local dev
      server.middlewares.use('/api/proxy-image', handleProxy);
      server.middlewares.use('/.netlify/functions/proxy-image', handleProxy);

      // Photo upload endpoint
      server.middlewares.use('/api/upload-ceo-photo', (req, res) => {
        if (req.method === 'POST') {
          let body = '';
          req.on('data', chunk => {
            body += chunk;
          });
          req.on('end', () => {
            try {
              const parsed = JSON.parse(body);
              if (parsed.image) {
                const base64Data = parsed.image.replace(/^data:image\/\w+;base64,/, '');
                const buffer = Buffer.from(base64Data, 'base64');
                const targets = [
                  path.resolve('src/assets/images/Mr CEO.jpg'),
                  path.resolve('src/assets/images/mr_ceo.jpg'),
                  path.resolve('public/Mr CEO.jpg'),
                  path.resolve('public/mr_ceo.jpg'),
                ];
                targets.forEach(target => {
                  const dir = path.dirname(target);
                  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
                  fs.writeFileSync(target, buffer);
                });
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ success: true, url: '/Mr%20CEO.jpg' }));
                return;
              }
            } catch (err) {
              console.error('Failed to save uploaded CEO photo:', err);
            }
            res.statusCode = 400;
            res.end(JSON.stringify({ error: 'Invalid payload' }));
          });
          return;
        }
        res.statusCode = 405;
        res.end();
      });
    },
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), imageProxyPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(import.meta.dirname || '.', '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
