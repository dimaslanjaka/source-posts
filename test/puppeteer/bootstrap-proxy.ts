import { deepmerge } from 'deepmerge-ts';
import * as puppeteer from 'puppeteer';
import getPuppeteerOptions from '../../src/puppeteer/puppeteerOpt';

(async () => {
  const options = deepmerge(getPuppeteerOptions({ proxy: 'http://186.215.196.50:3128', args: ['--start-maximized'] }), {
    devtools: false,
    headless: false
  } as puppeteer.PuppeteerLaunchOptions);
  // Launch a headless browser
  const browser = await puppeteer.launch(options);
  const page = (await browser.pages())[0] || (await browser.newPage());
  page.setDefaultNavigationTimeout(0);
  await page.goto('https://www.ipaddress.my/', { waitUntil: 'networkidle0' });
})();
