import * as puppeteer from 'puppeteer';

(async () => {
  // Replace with the actual public proxy address and port
  const proxyAddress = 'http://103.76.148.92:8181';

  // Launch the browser with proxy settings
  const browser = await puppeteer.launch({
    ignoreHTTPSErrors: true,
    args: [`--proxy-server=${proxyAddress}`, `--ignore-certificate-errors`, `--no-sandbox`, `--disable-setuid-sandbox`],
    headless: false
  });

  // Create a new page
  const page = await browser.newPage();
  page.setDefaultNavigationTimeout(0);

  // Now you can use the page object as usual, for example:
  await page
    .goto('https://www.ipaddress.my/', { waitUntil: 'networkidle0', timeout: 40000 })
    .catch((e) => console.error('fail visit using', proxyAddress, e.message));

  // Rest of your Puppeteer script...

  // await (await import('sbg-utility')).delay(8000);

  // Close the browser
  // await browser.close();
})();
