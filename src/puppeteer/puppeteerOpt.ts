import { deepmerge } from 'deepmerge-ts';
import { spawnAsync } from 'git-command-helper';
import * as puppeteer from 'puppeteer';
import { array_unique, bindProcessExit, fs, isWindows, md5, path } from 'sbg-utility';

bindProcessExit('kill-chrome', async () => {
  // kill previous unclosed chrome
  if (isWindows) {
    await spawnAsync('wmic', ['process', 'where', `"name like 'chrome.exe'"`, 'delete'], {
      shell: true,
      stdio: 'inherit'
    });
  }
});

const userDataDir = path.join(process.cwd(), 'tmp/puppeteer_profiles/default');
if (!fs.existsSync(userDataDir)) fs.mkdirSync(userDataDir, { recursive: true });

export const puppeteerOpt: puppeteer.PuppeteerLaunchOptions = {
  headless: false,
  executablePath: puppeteer.executablePath(),
  ignoreDefaultArgs: ['--disable-extensions'],
  args: [
    '--user-data-dir=' + userDataDir,
    '--no-sandbox',
    '--disable-setuid-sandbox',
    '--disable-infobars',
    '--window-position=0,0',
    '--disable-gpu',
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
  const launchOpt = deepmerge(puppeteerOpt, options);
  if (launchOpt.proxy) {
    const proxyAddress = launchOpt.proxy;
    launchOpt.ignoreHTTPSErrors = true;
    const profile_dir = path.join(process.cwd(), `tmp/puppeteer_profiles/${md5(options.proxy!)}`);
    if (!fs.existsSync(profile_dir)) fs.mkdirSync(profile_dir, { recursive: true });
    launchOpt.args = [
      `--proxy-server=${proxyAddress}`,
      `--ignore-certificate-errors`,
      `--no-sandbox`,
      `--disable-setuid-sandbox`,
      `--user-data-dir=` + profile_dir
    ];
    delete launchOpt.proxy;
  }
  launchOpt.args = array_unique(launchOpt.args || []);
  return launchOpt;
}
