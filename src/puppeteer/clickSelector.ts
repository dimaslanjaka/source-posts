import { Page } from 'puppeteer';

export default async function clickSelector(page: Page, selector: string, debug = true) {
  if ((await page.$(selector)) !== null) {
    await page.click(selector).catch((e) => debug && console.log('failed click', selector, e.message));
    return true;
  } else {
    debug && console.error('no element found', selector);
    return false;
  }
}
