import { Page } from 'puppeteer';

export default async function clickSelector(page: Page, selector: string) {
  if ((await page.$(selector)) !== null) {
    await page.click(selector).catch((e) => console.log('failed click', selector, e.message));
    return true;
  } else {
    console.error('no element found', selector);
    return false;
  }
}
