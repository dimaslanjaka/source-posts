import { Page } from 'puppeteer';

export default async function clickSelector(page: Page, selector: string) {
  if ((await page.$(selector)) !== null) {
    await page.click(selector).catch((e) => console.log('failed click', selector, e.message));
  } else {
    console.log('no element found', selector);
  }
}
