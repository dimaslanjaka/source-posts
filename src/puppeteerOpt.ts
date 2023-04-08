import { join } from 'path';
import { PuppeteerLaunchOptions } from 'puppeteer';

export const puppeteerOpt: PuppeteerLaunchOptions = {
  headless: false,
  args: [
    '--user-data-dir=' + join(process.cwd(), 'tmp/puppeteer_profile'),
    '--no-sandbox',
    '--disable-setuid-sandbox',
    '--disable-infobars',
    '--window-position=0,0',
    '--disable-web-security',
    '--ignore-certificate-errors',
    '--ignore-certificate-errors-spki-list',
    '--ignoreHTTPSErrors=true',
    '--user-agent="Mozilla/5.0 (Linux; Android 6.0.1; Nexus 5X Build/MMB29P) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/W.X.Y.Z‡ Mobile Safari/537.36 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)"'
  ]
};
