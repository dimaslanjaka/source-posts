import { dirname } from 'path';
import puppeteer, { TimeoutError } from 'puppeteer';
import { fileURLToPath } from 'url';
import { puppeteerOpt } from '../puppeteer/puppeteerOpt';
import { randomProxy, removeProxy } from '../utils/proxy';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

search('install php cli android');
async function search(keyword: string) {
  const proxy = randomProxy();
  console.log('using proxy', proxy);
  puppeteerOpt.args?.push('--proxy-server=' + proxy);
  const browser = await puppeteer.launch(puppeteerOpt);
  try {
    const page = (await browser.pages()).at(0);
    if (typeof page === 'object') {
      await page.goto('http://google.com/search?q=' + keyword);
      await page.waitForSelector('a');

      const selector = 'a[href*="webmanajemen.com"]';
      const elementExist = (await page.$(selector)) !== null;
      console.log('my site exist', elementExist);
      if (elementExist === true) page.click(selector);
    }
  } catch (e) {
    const closeBrowser = async () => {
      removeProxy(proxy);
      await browser.close();
    };
    if (e instanceof TimeoutError) {
      // Do something if this is a timeout.
      console.log('timeout while waiting');
    } else if (e instanceof Error) {
      const msg = e.message;
      const proxyError = /net::ERR_CONNECTION_RESET|net::ERR_TIMED_OUT/gim;
      if (proxyError.test(msg)) {
        await closeBrowser();
      } else {
        console.log(msg);
      }
    }
  }
}
