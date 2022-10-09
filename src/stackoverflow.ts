import { join } from 'path';
import puppeteer from 'puppeteer';
import { save } from './utils/file.js';
exports = {};

stackoverflow('https://stackoverflow.com/questions/23075748/how-to-compile-typescript-code-in-the-browser');

export async function stackoverflow(url: string) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
  await page.waitForSelector('title');
  const html = page.content();
  save(join(__dirname, '../tmp/stackoverflow.html'), html);
  await browser.close();
}
