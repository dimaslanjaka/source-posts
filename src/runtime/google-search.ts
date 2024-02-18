import * as puppeteer from 'puppeteer';
import getPuppeteerSS from '../puppeteer/screenshoot';
import scrollToBottom from '../puppeteer/scrollToBottom';

export async function startSearch(page: puppeteer.Page) {
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
