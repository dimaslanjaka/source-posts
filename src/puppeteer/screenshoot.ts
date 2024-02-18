import { fs } from 'sbg-utility';

export default function getPuppeteerSS(filename: string) {
  const dir = 'tmp/puppeteer_screenshot/';
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  return dir + filename;
}
