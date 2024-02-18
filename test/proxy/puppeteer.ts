import Bluebird from 'bluebird';
import { color } from 'hexo-post-parser';
import * as puppeteer from 'puppeteer';
import { readProxy, removeProxy } from '../../src/utils/proxy';

(async () => {
  const proxies = readProxy();
  while (proxies.length > 0) {
    // Replace with the actual public proxy address and port
    const proxy = proxies.shift();
    const proxyResult = { socks5: '', http: '', https: '' };
    await Bluebird.all(['http://', 'socks5://', 'https://']).each((protocol) => {
      const proxyLog = `${protocol}${proxy}`;
      return launch(protocol + proxy)
        .then((result) => {
          let msg = `${proxyLog} ${color.default.greenBright('success')}`;
          if (!result) {
            msg += ` but ${result}`;
          }
          console.log(msg);
        })
        .catch(async (e: Error) => {
          (proxyResult as Record<string, any>)[protocol.replace('://', '')] = e.message;
          console.log(`${proxyLog}`, color.default.redBright('failed'), e.message);
        });
    });
    const proxyError =
      /net::ERR_CONNECTION_RESET|net::ERR_TIMED_OUT|net::ERR_TUNNEL_CONNECTION_FAILED|net::ERR_PROXY_CONNECTION_FAILED|net::ERR_INVALID_AUTH_CREDENTIALS/gim;
    const hasSuccess = proxyResult.https.length == 0 || proxyResult.http.length == 0 || proxyResult.socks5.length == 0;
    if (!hasSuccess) {
      if (proxyError.test(Object.values(proxyResult).join(' '))) {
        console.log('removing', proxy);
        removeProxy(proxy);
      }
    }
  }
})();

async function launch(proxyAddress?: string) {
  if (!proxyAddress) return null;
  // Launch the browser with proxy settings
  const browser = await puppeteer.launch({
    ignoreHTTPSErrors: true,
    args: [`--proxy-server=${proxyAddress}`, `--ignore-certificate-errors`, `--no-sandbox`, `--disable-setuid-sandbox`],
    headless: 'new'
  });

  // Create a new page
  const page = (await browser.pages())[0] || (await browser.newPage());
  page.setDefaultNavigationTimeout(0);
  // await (await import('puppeteer-page-proxy')).default(page, proxyAddress);

  try {
    return await page.goto('http://ip.me', { waitUntil: 'networkidle0', timeout: 40000 });
  } catch (e: any) {
    await browser.close();
    throw e;
  }
}
