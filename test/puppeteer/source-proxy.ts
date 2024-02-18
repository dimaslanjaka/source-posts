import * as puppeteer from 'puppeteer';
import { delay } from 'sbg-utility';

(async () => {
  // Replace with the actual public proxy address and port
  const proxyAddress = 'http://186.215.196.50:3128';

  // Launch the browser with proxy settings
  const browser = await puppeteer.launch({
    ignoreHTTPSErrors: true,
    args: [`--proxy-server=${proxyAddress}`, `--ignore-certificate-errors`, `--no-sandbox`, `--disable-setuid-sandbox`],
    headless: false
  });

  // Create a new page
  const page = await browser.newPage();

  // Now you can use the page object as usual, for example:
  await page.goto('https://www.ipaddress.my/', { waitUntil: 'networkidle0' });

  // Rest of your Puppeteer script...

  await delay(8000);

  // Close the browser
  await browser.close();
})();
