import getPuppeteerOptions from '../../src/puppeteer/puppeteerOpt';

console.log(
  getPuppeteerOptions({
    ignoreHTTPSErrors: true,
    args: [`--proxy-server=127.0.0.1:8080`, `--ignore-certificate-errors`, `--no-sandbox`, `--disable-setuid-sandbox`],
    headless: 'new'
  })
);
