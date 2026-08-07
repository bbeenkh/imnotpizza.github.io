import { mkdir } from 'fs/promises';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import puppeteer from 'puppeteer';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const OUT = resolve(ROOT, 'ppt');
const BASE_URL = process.env.CAPTURE_URL || 'http://localhost:5678';
const TOTAL_PAGES = 15;

// main은 aspect-video + max-w-[1280px]이므로 뷰포트를 이보다 넉넉하게 잡고
// deviceScaleFactor로 해상도를 올린다 (실제 렌더링 크기는 max-w에서 결정됨).
const VIEWPORT = { width: 1920, height: 1080, deviceScaleFactor: 2 };

await mkdir(OUT, { recursive: true });

console.log('Launching headless browser...');
console.log('(Make sure the dev server is running on port 5678)');

const browser = await puppeteer.launch({ headless: 'new' });

try {
  const page = await browser.newPage();
  await page.setViewport(VIEWPORT);

  for (let num = 1; num <= TOTAL_PAGES; num++) {
    const url = `${BASE_URL}/${num}`;
    await page.goto(url, { waitUntil: 'networkidle0' });
    await page.evaluate(() => document.fonts.ready);

    const main = await page.waitForSelector('main');
    const filePath = resolve(OUT, `slide-${num}.png`);
    await main.screenshot({ path: filePath });
    console.log(`Saved slide-${num}.png`);
  }

  console.log(`Done! ${TOTAL_PAGES} slides saved to ppt/`);
} finally {
  await browser.close();
}
