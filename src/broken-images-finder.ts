import axios from 'axios';
import { glob } from 'glob';
import { color, parsePost } from 'hexo-post-parser';
import { JSDOM } from 'jsdom';
import { marked } from 'marked';
import path from 'path';
import { writefile } from 'sbg-utility/dist';
import { config_yml, excludePatterns, postsDir, sourceDir } from '../config';
import { delay } from './utils/promise';

const globStream = new glob.Glob('**/*.md', {
  withFileTypes: false,
  absolute: true,
  cwd: postsDir,
  ignore: ['**/node_modules/**', '**/vendor/**', '**/License.md', '**/readme.md'].concat(excludePatterns)
});

const files = [] as string[];

globStream.stream().on('data', (result) => {
  files.push(result);
  start();
});

let running = false;
async function start() {
  // skip run when still running
  if (running) return;
  while (files.length > 0) {
    // start
    running = true;

    const file = files.shift() || '';

    if (file.length > 0) {
      const reportFile = path.join(sourceDir, 'reports/broken-images.html');
      const reports = await toHtml(file);
      writefile(reportFile, reports);
    }

    // delay 3s
    await delay(3000);
    // stop
    running = false;
  }
}

interface Report {
  /** post path */
  post: string;
  /** array of broken image url */
  brokenImages: string[];
}

/** parse markdown to html */
async function toHtml(file: string) {
  const results = [] as Report[];
  const parse = await parsePost(file, { sourceFile: file, config: config_yml });
  if (parse && parse.body) {
    try {
      const html = await marked(parse.body, { async: true });
      console.log('finding broken images on', file);
      const result = { post: file, brokenImages: [] } as Report;
      const brokenImages = await findBrokenImages(html);
      if (brokenImages.length > 0) {
        result.brokenImages = brokenImages;
        results.push(result);
      }
    } catch (e) {
      console.error(e);
    }
  }
  return results;
}

/**
 * find broken images from html
 * @param html html string
 * @returns array of broken image url
 */
async function findBrokenImages(html: string) {
  const results = [] as string[];
  const dom = new JSDOM(html);
  const document = dom.window.document;
  const images = Array.from(document.querySelectorAll('img'));
  for (let i = 0; i < images.length; i++) {
    const img = images[i];
    if (img.src && img.src.startsWith('http'))
      await axios.get(img.src).catch((e) => {
        console.error(color.default.redBright('broken image'), img.src, e.message);
        results.push(img.src);
      });
  }
  return results;
}

// setTimeout(() => {
//   toHtml(files[2]);
// }, 300);
