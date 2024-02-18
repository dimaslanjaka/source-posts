import { array_shuffle, delay, noop } from 'sbg-utility';
import puppeteerWithProxy, { puppeteerWithProxyLauncher } from '../puppeteer/withProxy';
import { readProxy } from '../utils/proxy';
import { startSearch } from './google-search';

(async () => {
  // Replace with the actual public proxy address and port
  let proxies = readProxy();
  while (proxies.length > 0) {
    // shuffle proxies
    proxies = array_shuffle(proxies);
    await puppeteerWithProxy(
      {
        proxyAddress: proxies.pop()!,
        url: 'http://www.google.com',
        deleteOnError: true,
        headless: false
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
