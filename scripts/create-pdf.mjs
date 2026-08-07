import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { writeFile } from 'fs/promises';
import puppeteer from 'puppeteer';
import { PDFDocument } from 'pdf-lib';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const OUT = resolve(ROOT, 'ppt', 'portfolio.pdf');
const BASE_URL = process.env.CAPTURE_URL || 'http://localhost:5678';
const TOTAL_PAGES = 15;

console.log('Launching headless browser...');
console.log('(Make sure the dev server is running on port 5678)');

const browser = await puppeteer.launch({ headless: 'new' });

try {
  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });

  const merged = await PDFDocument.create();

  for (let num = 1; num <= TOTAL_PAGES; num++) {
    await page.goto(`${BASE_URL}/${num}`, { waitUntil: 'networkidle0' });
    await page.evaluate(() => document.fonts.ready);

    // main 요소 크기에 맞춰 PDF 페이지 생성
    const main = await page.waitForSelector('main');
    const box = await main.boundingBox();

    const pdfBuf = await page.pdf({
      width: `${box.width}px`,
      height: `${box.height}px`,
      printBackground: true,
      pageRanges: '1',
    });

    const src = await PDFDocument.load(pdfBuf);
    const [copied] = await merged.copyPages(src, [0]);
    merged.addPage(copied);
    console.log(`Added slide ${num}`);
  }

  const bytes = await merged.save();
  await writeFile(OUT, bytes);
  console.log(`Done! PDF saved to ppt/portfolio.pdf`);
} finally {
  await browser.close();
}
