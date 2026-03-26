import puppeteer from 'puppeteer';
import { mkdir } from 'fs/promises';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const OUT = resolve(ROOT, 'ppt');
const BASE_URL = process.env.BASE_URL || 'http://localhost:4173';
const PAGES = [1, 2, 3, 4, 5];

await mkdir(OUT, { recursive: true });

const browser = await puppeteer.launch({ headless: true });
const page = await browser.newPage();
await page.setViewport({ width: 1920, height: 1080 });

for (const num of PAGES) {
  await page.goto(`${BASE_URL}/${num}`, { waitUntil: 'networkidle0' });
  const slide = await page.$('main');
  if (!slide) {
    console.error(`Page ${num}: <main> element not found, skipping`);
    continue;
  }
  const path = resolve(OUT, `slide-${num}.png`);
  await slide.screenshot({ path });
  console.log(`Captured slide-${num}.png`);
}

await browser.close();
console.log(`Done! ${PAGES.length} slides saved to ppt/`);
