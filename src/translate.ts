import express from 'express';
import fs from 'fs';
import hexoUtil from 'hexo-util';
import nunjucks from 'nunjucks';
import puppeteer from 'puppeteer';
import path from 'upath';
import { fileURLToPath } from 'url';
import { puppeteerOpt } from './puppeteerOpt';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function _startPuppeteer() {
  const browser = await puppeteer.launch(puppeteerOpt);
  const page = await browser.newPage();
  await page.goto('http://adsense.webmanajemen.com:4000/', { waitUntil: 'networkidle0' });
  // scripts with src that starts with https://translate.google.com
  await page.waitForSelector('script[src^="//translate.google.com"]');
  const scripts = await page.$$('script[src]');
  for (const script of scripts) console.log(await page.evaluate((el) => el.src, script));
}

const app = express();

// engine starts
const env = nunjucks.configure(path.join(__dirname, 'source'), {
  autoescape: true,
  express: app,
  noCache: true
});
env.addFilter('uriencode', (str: string) => {
  return hexoUtil.encodeURL(str);
});
env.addFilter('noControlChars', (str: string) => {
  return str.replace(/[\x00-\x1F\x7F]/g, ''); // eslint-disable-line no-control-regex
});
env.addFilter('formatDate', (input: import('moment-timezone').Moment) => {
  return input.toISOString().substring(0, 10);
});
env.addGlobal('css', (str: string) => {
  return `
<link
	rel="preload"
	href="${str}"
	as="style"
	onload="this.onload=null;this.rel='stylesheet'"
/>
<noscript>
	<link rel="stylesheet" href="${str}" />
</noscript>
	`.trim();
});

app.engine('html', env.render);
app.set('view engine', 'html');
// engine ends

app.get('/', function (_, res) {
  res.send(fs.readFileSync(path.join(__dirname, 'source/translate.html'), 'utf-8'));
});
const server = app.listen(4000);
server.once('listening', function () {
  //
});
