import { red } from 'ansi-colors';
import axios from 'axios';
import { glob } from 'glob';
import { parsePost } from 'hexo-post-parser';
import { JSDOM } from 'jsdom';
import { marked } from 'marked';
import { config_yml, excludePatterns, postsDir } from '../config';
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
      toHtml(file);
    }

    // delay 3s
    await delay(3000);
    // stop
    running = false;
  }
}

/** parse markdown to html */
async function toHtml(file: string) {
  const parse = await parsePost(file, { sourceFile: file, config: config_yml });
  if (parse && parse.body) {
    const html = await marked(parse.body, { async: true });
    await findBrokenImages(html);
  }
}

/** find broken images from html */
async function findBrokenImages(html: string) {
  const dom = new JSDOM(html);
  const document = dom.window.document;
  const images = Array.from(document.querySelectorAll('img'));
  for (let i = 0; i < images.length; i++) {
    const img = images[i];
    if (img.src && img.src.startsWith('http'))
      await axios.get(img.src).catch((e) => {
        console.error(red('broken image'), img.src, e.message);
      });
  }
}

// setTimeout(() => {
//   toHtml(files[2]);
// }, 300);
