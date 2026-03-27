import { createServer } from 'http';
import { mkdir, writeFile } from 'fs/promises';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { exec } from 'child_process';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const OUT = resolve(ROOT, 'ppt');
const APP_URL = 'http://localhost:5678/capture';
const SERVER_PORT = 5679;
const TOTAL_PAGES = 12;

await mkdir(OUT, { recursive: true });

let received = 0;

const server = createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  if (req.method !== 'POST' || req.url !== '/save') {
    res.writeHead(404);
    res.end();
    return;
  }

  const chunks = [];
  req.on('data', chunk => chunks.push(chunk));
  req.on('end', async () => {
    try {
      const { num, data } = JSON.parse(Buffer.concat(chunks).toString());
      const base64 = data.replace(/^data:image\/\w+;base64,/, '');
      const filePath = resolve(OUT, `slide-${num}.png`);
      await writeFile(filePath, Buffer.from(base64, 'base64'));
      console.log(`Saved slide-${num}.png`);
      received++;
      res.writeHead(200);
      res.end('ok');

      if (received >= TOTAL_PAGES) {
        console.log(`Done! ${TOTAL_PAGES} slides saved to ppt/`);
        server.close();
        process.exit(0);
      }
    } catch (err) {
      console.error('Error saving:', err);
      res.writeHead(500);
      res.end('error');
    }
  });
});

server.listen(SERVER_PORT, () => {
  console.log(`Capture server ready on port ${SERVER_PORT}`);
  console.log(`Opening ${APP_URL} ...`);
  console.log('(Make sure the dev server is running on port 5678)');

  const { platform } = process;
  const open = platform === 'win32' ? 'start' : platform === 'darwin' ? 'open' : 'xdg-open';
  exec(`${open} "${APP_URL}"`);
});
