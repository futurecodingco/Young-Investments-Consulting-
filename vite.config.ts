import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import { defineConfig, Plugin } from 'vite';

function ceoPhotoUploadPlugin(): Plugin {
  return {
    name: 'ceo-photo-upload-plugin',
    configureServer(server) {
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
                  path.resolve('public/mr_ceo.jpg')
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
    }
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), ceoPhotoUploadPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(import.meta.dirname || '.', '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
