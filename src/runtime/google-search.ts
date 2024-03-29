import esMain from 'es-main';
import * as puppeteer from 'puppeteer';
import { path } from 'sbg-utility';
import clickSelector from '../puppeteer/clickSelector';
import getPuppeteerOptions from '../puppeteer/puppeteerOpt';
import getPuppeteerSS from '../puppeteer/screenshoot';
import scrollToBottom from '../puppeteer/scrollToBottom';

/** start typing keywords and emulating */
export async function startSearch(page: puppeteer.Page) {
  // Type a search query
  const searchQuery = 'quiz the legend of neverland';
  await page.type('input[name=q],textarea[name=q],[name=q]', searchQuery);

  // Press Enter to submit the search
  await page.keyboard.press('Enter').catch((e) => console.log('failed press enter on google searchbox', e.message));

  await page.waitForNavigation({ waitUntil: 'networkidle2' });

  // Take a screenshot of the search results page
  await page.screenshot({ path: getPuppeteerSS('google_search_results.png') });

  // Extract the URLs of all search results
  const hrefs = await page.evaluate(() => {
    const links = Array.from(document.getElementsByTagName('a'));
    links.forEach((a) => {
      a.setAttribute('id', `site-${a.href.replace(/[^a-zA-Z ]/g, '')}`);
    });
    return Array.from(document.getElementsByTagName('a'), (a) => {
      let selector = `a[href*="${a.href}"]`;
      // a.id = `site-${a.href.replace(/[^a-zA-Z ]/g, '')}`;
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

  const mySite = hrefs.filter(
    (item) =>
      item.href.includes('webmanajemen.com') &&
      // item.href.includes('google') &&
      !item.href.includes('translate.google.com')
  );

  if (mySite && mySite[0]) {
    const selector = mySite[0].selector;
    if (await clickSelector(page, selector)) {
      await page.screenshot({ path: getPuppeteerSS('theSite.png') });

      await scrollToBottom(page).catch((e) => console.log('failed scroll down', e.message));

      // Take a screenshot after scrolling to the bottom
      await page.screenshot({ path: getPuppeteerSS('theSite_bottom_of_page.png') });
      console.log('search google automation done');

      // Close the browser
      await page.browser().close();
    }
  }
}

const isRequireMain = typeof require !== 'undefined' && require.main === module;
const isEsMain = esMain(import.meta);

if (isRequireMain || isEsMain) {
  (async () => {
    const extensionPath = path.join(process.cwd(), 'extensions/chromium/webrtc');
    const browser = await puppeteer.launch(
      getPuppeteerOptions({
        headless: false,
        args: [
          `--disable-extensions-except=${extensionPath}`,
          `--load-extension=${extensionPath}`,
          '--disable-features=WebRtcHideLocalIpsWithMdns',
          '--start-maximized'
        ]
      })
    );
    const page = (await browser.pages())[0] || (await browser.newPage());
    page.setDefaultNavigationTimeout(0);

    // Disable geolocation by setting the 'geolocation' permission to 'denied'
    await page.setGeolocation({ latitude: 0, longitude: 0, accuracy: 0 });

    // Navigate to Google
    await page.goto('https://www.google.com', { waitUntil: 'networkidle0', timeout: 40000 });

    // Open a new page
    const page2 = await browser.newPage();
    await page2.goto('https://proxy6.net/en/privacy');
    const page3 = await browser.newPage();
    await page3.goto('https://whoer.net/');

    // Switch to the first page
    await page.bringToFront();

    await loginNotifBlock(page);

    try {
      await startSearch(page);
    } catch (e) {
      console.error('error', e);
    }
  })();
}

/** login prompt notification block */
async function loginNotifBlock(page: puppeteer.Page) {
  const selectors = ['[aria-label="Tetap logout"]', '[aria-label*="logout"]', '[data-dismiss="n"]'];
  for (let i = 0; i < selectors.length; i++) {
    const selector = selectors[i];
    await clickSelector(page, selector);
  }
}
