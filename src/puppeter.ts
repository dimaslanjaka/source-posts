import puppeteer from 'puppeteer';
import { md5, persistentCache, writefile } from 'sbg-utility';
import path from 'upath';

export async function browse(url: string) {
  const cache = new persistentCache({ base: 'tmp', name: new URL(url).hostname });
  const key = md5(url);
  let html = '',
    file = '';
  const cached = await cache.get(key, { html, file, url });
  if (cached.html.length > 0) return cached;

  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: 'networkidle0' });
  //await page.waitForSelector('title');
  html = await page.content();
  file = path.join(process.cwd(), 'tmp/html/' + md5(url) + '.html');
  await writefile(file, html, { async: true })
    .catch(console.trace)
    .finally(() => browser.close());
  const result = { html, file, url };
  await cache.set(key, result);
  return result;
}
