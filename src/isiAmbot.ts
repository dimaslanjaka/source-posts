import { dirname, join } from 'path';
import { default as Puppeteer } from 'puppeteer';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const url = 'https://www.webmanajemen.com/page/bot-detect';
detect();
export async function detect() {
  const browser = await Puppeteer.launch({
    headless: false,
    args: [
      '--user-data-dir=' + join(process.cwd(), 'tmp/puppeteer_profile'),
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-infobars',
      '--window-position=0,0',
      '--ignore-certifcate-errors',
      '--ignore-certifcate-errors-spki-list',
      '--ignoreHTTPSErrors=true',
      '--user-agent="Mozilla/5.0 (Linux; Android 6.0.1; Nexus 5X Build/MMB29P) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/W.X.Y.Z‡ Mobile Safari/537.36 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)"'
    ]
  });
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: 'networkidle0' });
  await page.waitForSelector('title');
}
