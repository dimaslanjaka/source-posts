import * as puppeteer from 'puppeteer';
import clickSelector from '../../src/puppeteer/clickSelector';
import getPuppeteerOptions from '../../src/puppeteer/puppeteerOpt';
import getPuppeteerSS from '../../src/puppeteer/screenshoot';

// Function to visit Google
const visitGoogle = async () => {
  // Launch a headless browser
  const browser = await puppeteer.launch(getPuppeteerOptions({ defaultViewport: null, headless: false }));

  // Create a new page
  const page = (await browser.pages())[0] || (await browser.newPage());
  page.setDefaultNavigationTimeout(0);

  // Navigate to Google
  await page.goto('https://www.google.com', { waitUntil: 'networkidle0' });

  await detectRecaptcha(page);

  await detectCookiesNotif(page);

  await detectRecaptcha(page);

  await loginNotifBlock(page);

  await detectRecaptcha(page);

  // Take a screenshot (optional)
  await page.screenshot({ path: getPuppeteerSS('google.png') });

  console.log('visit google done');

  // Close the browser
  // await browser.close();
};

// Call the function to visit Google
visitGoogle();

/** login prompt notification block */
async function loginNotifBlock(page: puppeteer.Page) {
  const selectors = ['[aria-label="Tetap logout"]', '[aria-label*="logout"]', '[data-dismiss="n"]'];
  for (let i = 0; i < selectors.length; i++) {
    const selector = selectors[i];
    await clickSelector(page, selector);
  }
}

async function detectRecaptcha(page: puppeteer.Page) {
  while (
    // (await page.$('#recaptcha-accessible-status')) !== null ||
    // (await page.content()).toLowerCase().includes('recaptcha')
    page.url().includes('/sorry/index?continue=')
  ) {
    console.log('recaptcha detected');
    await page.waitForNavigation();
  }
}

async function detectCookiesNotif(page: puppeteer.Page) {
  while ((await page.$('[aria-live="polite"]')) !== null) {
    console.log('cookies prompt detected');
    await page.waitForNavigation();
  }
}
