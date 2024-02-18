import { deepmerge } from 'deepmerge-ts';
import { spawnAsync } from 'git-command-helper';
import { color } from 'hexo-post-parser';
import * as puppeteer from 'puppeteer';
import { array_unique, bindProcessExit, delay, fs, isWindows, md5, path } from 'sbg-utility';
import { removeProxy } from '../utils/proxy';

bindProcessExit('kill-chrome', async () => {
  // kill previous unclosed chrome
  if (isWindows) {
    await spawnAsync('wmic', ['process', 'where', `"name like 'chrome.exe'"`, 'delete'], {
      shell: true,
      stdio: 'inherit'
    });
  }
});

export interface PuppeteerWithProxyOptions extends puppeteer.PuppeteerLaunchOptions {
  /** IP:PORT */
  proxyAddress: string;
  /** url to visit */
  url?: string;
  /** delete proxy on error from proxy.txt? */
  deleteOnError?: boolean;
}

export async function puppeteerWithProxyLauncher(opt: PuppeteerWithProxyOptions) {
  const url = opt.url || 'http://ip.me';
  const proxyAddress = opt.proxyAddress;
  if (!proxyAddress) return null;
  // Launch the browser with proxy settings
  const profile_dir = path.join(process.cwd(), `.yarn/cache/puppeteer_profiles/${md5(proxyAddress)}`);
  if (!fs.existsSync(profile_dir)) fs.mkdirSync(profile_dir, { recursive: true });
  const launchOpt = deepmerge(
    {
      headless: 'new',
      args: [
        `--proxy-server=${proxyAddress}`,
        '--disable-infobars',
        '--no-sandbox',
        `--disable-setuid-sandbox`,
        `--user-data-dir=` + profile_dir,
        '--disable-web-security',
        '--ignore-certificate-errors',
        '--ignore-certificate-errors-spki-list',
        '--ignoreHTTPSErrors=true',
        '--user-agent="Mozilla/5.0 (Linux; Android 6.0.1; Nexus 5X Build/MMB29P) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/W.X.Y.Z‡ Mobile Safari/537.36 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)"'
      ]
    } as puppeteer.PuppeteerLaunchOptions,
    opt
  );
  launchOpt.args = array_unique(launchOpt.args!);
  if (launchOpt.headless) launchOpt.headless = 'new';
  const browser = await puppeteer.launch(launchOpt);

  // Create a new page
  const page = (await browser.pages())[0] || (await browser.newPage());
  page.setDefaultNavigationTimeout(0);
  // await (await import('puppeteer-page-proxy')).default(page, proxyAddress);

  try {
    await page.goto(url, { waitUntil: 'networkidle0', timeout: 40000 });
    return { page, browser, proxyAddress };
  } catch (e: any) {
    await browser.close();
    await delay(2000);
    throw e;
  }
}

export default async function puppeteerWithProxy(
  options: PuppeteerWithProxyOptions,
  callback?: (obj: Awaited<ReturnType<typeof puppeteerWithProxyLauncher>>) => any
) {
  const proxyResult = { socks5: '', http: '', https: '', socks: '', socks4: '' };
  const protocols = ['http://', 'socks5://', 'https://', 'socks://', 'socks4://'];
  let done = false;
  for (let i = 0; i < protocols.length; i++) {
    if (done) break;
    const protocol = protocols[i];
    const proxyLog = `${protocol}${options.proxyAddress}`;
    await puppeteerWithProxyLauncher(deepmerge(options, { proxyAddress: protocol + options.proxyAddress }))
      .then((result) => {
        let msg = `${proxyLog} ${color.default.greenBright('success')}`;
        if (!result) {
          msg += ` but ${result}`;
        }
        console.log(msg);
        done = true;
        if (typeof callback == 'function') callback(result);
      })
      .catch(async (e: Error) => {
        (proxyResult as Record<string, any>)[protocol.replace('://', '')] = e.message;
        console.log(`${proxyLog}`, color.default.redBright('failed'), e.message);
      });
  }

  if (options.deleteOnError) {
    const proxyError = /^CONNECTION_RESET|CONNECTION_FAILED|net::ERR_INVALID_AUTH_CREDENTIALS/gim;
    const hasError = Object.values(proxyResult).filter((s) => proxyError.test(s));
    // delete proxy when error matches count same as proxy result count
    if (hasError.length === Object.keys(proxyResult).length) {
      const proxy2Remove =
        (/((\b(.*)\b:\b(.*)\b@)?\b(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\b):?(\d{2,5})/gm.exec(
          options.proxyAddress
        ) || [])[0];
      if (proxy2Remove) {
        console.log('removing', proxy2Remove);
        removeProxy(proxy2Remove);
      }
    }
  }
}
