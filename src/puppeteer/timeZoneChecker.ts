import * as puppeteer from 'puppeteer';

async function timeZoneChecker({ timeZone = 'Asia/Jakarta' }: { timeZone: string }) {
  // all kind of config to pass to browser
  const launchConfig: puppeteer.PuppeteerLaunchOptions = { headless: 'new' };

  if (timeZone) {
    launchConfig.env = {
      TZ: timeZone,
      ...process.env
    };
  }
  const browser = await puppeteer.launch(launchConfig);
  const page = await browser.newPage();
  await page.emulateTimezone(timeZone);

  await page.goto('https://whoer.net/');
  const detectedTimezone = await page.$eval('.ico-timesystem', (e) => (e.parentNode as any).innerText);
  await page.screenshot({ path: `screenshots/timeZone_${timeZone.replace('/', '-')}.png`, fullPage: true });

  await browser.close();

  return { timeZone, detectedTimezone };
}

Promise.all([
  timeZoneChecker({ timeZone: 'Australia/Melbourne' }),
  timeZoneChecker({ timeZone: 'Asia/Singapore' })
]).then(console.log);
