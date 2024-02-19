import * as puppeteer from 'puppeteer';
import clickSelector from './clickSelector';

/**
 * scroll down puppeteer
 * @param page
 * @returns
 */

export default function scrollToBottom(page: puppeteer.Page) {
  return new Promise<void>((resolve, reject) => {
    // keep track of distance scrolled
    let totalHeight = 0;
    // amount to scroll each time
    const scrollAmount = 300;
    const scrollDownAndCheck = async (promise: Promise<void>): Promise<void> => {
      return promise.then(async () => {
        // determine if we have reached the bottom or not
        const shouldReturn = await page.evaluate((totalHeight) => {
          return totalHeight >= document.body.scrollHeight - window.innerHeight;
        }, totalHeight);
        // if we reached the bottom, don't add any more .then() calls
        if (shouldReturn) {
          return promise;
        }
        await clickSelector(page, '[id*="ad_position_box"][id="dismiss-button"]');
        // scroll down by a chunk
        await page.evaluate((scrollAmount) => {
          window.scrollBy(0, scrollAmount);
        }, scrollAmount);
        // keep track of how much has been scrolled
        totalHeight += scrollAmount;
        // wait for any network loads that may have been triggered by the scroll
        await page.waitForNetworkIdle();
        // do this loop over again
        return scrollDownAndCheck(promise);
      });
    };
    scrollDownAndCheck(Promise.resolve())
      .then(() => {
        resolve();
      })
      .catch(reject);
  });
}
