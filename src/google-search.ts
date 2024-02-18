import * as puppeteer from 'puppeteer';
import { delay, fs, noop } from 'sbg-utility';
import scrollToBottom from './puppeteer/scrollToBottom';
import puppeteerWithProxy, { puppeteerWithProxyLauncher } from './puppeteer/withProxy';
import { readProxy } from './utils/proxy';

function getPuppeteerSS(filename: string) {
  const dir = 'tmp/puppeteer_screenshot/';
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  return dir + filename;
}

(async () => {
  // Replace with the actual public proxy address and port
  const proxies = readProxy();
  while (proxies.length > 0) {
    await puppeteerWithProxy(
      {
        proxyAddress: proxies.pop()!,
        url: 'https://www.google.com',
        deleteOnError: true
      },
      doSearch
    );
  }
})();

/**
 *
 * @param param0
 */
async function doSearch(obj: Awaited<ReturnType<typeof puppeteerWithProxyLauncher>>) {
  const { proxyAddress, page, browser } = obj || {};
  if (!page || !browser) return;

  page.setDefaultNavigationTimeout(0);
  // page.on('console', (msg) => console.log(msg.text()));

  console.log(proxyAddress, 'success visit google');
  await delay(3000);

  // login notification block
  (async () => {
    const selectors = ['[aria-label="Tetap logout"]', '[aria-label*="logout"]', '[data-dismiss="n"]'];
    for (let i = 0; i < selectors.length; i++) {
      const selector = selectors[i];
      if ((await page.$(selector)) !== null) {
        await page.click(selector).catch(noop);
      }
    }
  })();

  // Type a search query
  const searchQuery = 'quiz the legend of neverland';
  await page
    .type('input[name=q],textarea[name=q]', searchQuery)
    .then(() => startSearch(page))
    .catch((e) => console.log('failed typing keyword on google searchbox', e.message));

  // await (await import('sbg-utility')).delay(8000);

  // Close the browser
  await browser.close();
}

async function startSearch(page: puppeteer.Page) {
  // Press Enter to submit the search
  await page.keyboard.press('Enter').catch((e) => console.log('failed press enter on google searchbox', e.message));

  await page.waitForNavigation({ waitUntil: 'networkidle2' });

  // Take a screenshot of the search results page
  await page.screenshot({ path: getPuppeteerSS('google_search_results.png') });

  // Extract the URLs of all search results
  const hrefs = await page.evaluate(() => {
    return Array.from(document.getElementsByTagName('a'), (a) => {
      let selector = `a[href*="${a.href}"]`;
      a.id = `site-${a.href.replace(/[^a-zA-Z ]/g, '')}`;
      if (a.classList.length > 0) {
        selector = Array.from(a.classList)
          .map((str) => `.${str}`)
          .join('');
      } else if (a.id.length > 0) {
        selector = `#${a.id}`;
      }
      return {
        href: a.href,
        selector
      };
    });
  });

  const mySite = hrefs.filter((item) => item.href.includes('webmanajemen.com') && item.href.includes('google'));

  // console.log(mySite);

  if (mySite && mySite[0]) {
    const selector = mySite[0].selector;
    // console.log(selector);
    await page.click(selector, { delay: 2000 }).catch((e) => console.log(`cannot click`, selector, e.message));
    // await page.waitForNavigation({ waitUntil: 'networkidle2' });
    await page
      .screenshot({ path: getPuppeteerSS('theSite.png') })
      .catch((e) => console.log(`cannot screenshot`, e.message));

    await scrollToBottom(page);

    // Take a screenshot after scrolling to the bottom
    await page.screenshot({ path: getPuppeteerSS('theSite_bottom_of_page.png') });
  }
}
