import { dirname, join } from 'path';
import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';
import { save } from './utils/file';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

stackoverflow('https://stackoverflow.com/questions/23075748/how-to-compile-typescript-code-in-the-browser');

export async function stackoverflow(url: string) {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: 'networkidle0' });
  //await page.waitForSelector('title');
  const html = await page.content();
  const file = join(__dirname, '../tmp/stackoverflow.html');
  save(file, html)
    .catch(console.trace)
    .finally(() => browser.close());
}
