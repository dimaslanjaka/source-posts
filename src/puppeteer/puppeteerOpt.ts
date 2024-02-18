import { deepmerge } from 'deepmerge-ts';
import * as puppeteer from 'puppeteer';
import { array_unique, fs, path } from 'sbg-utility';

const userDataDir = path.join(process.cwd(), 'tmp/puppeteer_profile');
if (!fs.existsSync(userDataDir)) fs.mkdirSync(userDataDir, { recursive: true });

export const puppeteerOpt: puppeteer.PuppeteerLaunchOptions = {
  headless: false,
  args: [
    '--user-data-dir=' + userDataDir,
    '--no-sandbox',
    '--disable-setuid-sandbox',
    '--disable-infobars',
    '--window-position=0,0',
    '--disable-web-security',
    '--ignore-certificate-errors',
    '--ignore-certificate-errors-spki-list',
    '--ignoreHTTPSErrors=true',
    '--user-agent="Mozilla/5.0 (Linux; Android 6.0.1; Nexus 5X Build/MMB29P) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/W.X.Y.Z‡ Mobile Safari/537.36 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)"'
  ]
};

interface MyPuppeteerOptions extends puppeteer.PuppeteerLaunchOptions {
  proxy?: string;
}

export default function getPuppeteerOptions(options: MyPuppeteerOptions = {}) {
  let launchOpt = deepmerge(puppeteerOpt, options);
  if (launchOpt.proxy) {
    const proxyAddress = launchOpt.proxy;
    launchOpt.ignoreHTTPSErrors = true;
    launchOpt = deepmerge(launchOpt, {
      args: [
        `--proxy-server=${proxyAddress}`,
        `--ignore-certificate-errors`,
        `--no-sandbox`,
        `--disable-setuid-sandbox`
      ]
    });
    delete launchOpt.proxy;
  }
  launchOpt.args = array_unique(launchOpt.args || []);
  return launchOpt;
}
