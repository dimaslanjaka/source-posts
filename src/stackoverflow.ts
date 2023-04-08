import { JSDOM } from 'jsdom';
import moment from 'moment-timezone';
import path, { dirname, join } from 'path';
import puppeteer from 'puppeteer';
import { md5, writefile } from 'sbg-utility';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

get('https://stackoverflow.com/questions/23075748/how-to-compile-typescript-code-in-the-browser').then(parse);

export async function get(url: string) {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: 'networkidle0' });
  //await page.waitForSelector('title');
  const html = await page.content();
  const file = join(process.cwd(), 'tmp/html/' + md5(url) + '.html');
  await writefile(file, html, { async: true })
    .catch(console.trace)
    .finally(() => browser.close());
  return { html, file, url };
}

function parse(o: { html: string; url: string }) {
  const dom = new JSDOM(o.html, { contentType: 'text/html' });
  const window = dom.window;
  const document = dom.window.document;
  const title = document.getElementById('question-header')?.querySelector('h1')?.textContent;
  const dateCreated = document.querySelector('time[itemprop="dateCreated"]')?.getAttribute('datetime');
  const dateCreatedMoment = moment(dateCreated).tz('Asia/Jakarta');

  const QA = document.querySelector('[aria-label="question and answers"]');
  const question = QA?.querySelector('[itemprop="text"]')?.innerHTML?.trim();
  const answers = QA?.querySelectorAll('[id^="answer-"]');

  const rA: (string | undefined | null)[] = [];

  if (answers) {
    const other_answers = Array.from(answers as NodeListOf<Element>).filter(
      (el) => el.getAttribute('itemprop') != 'acceptedAnswer'
    );

    // console.log(answers.length, other_answers.length);

    const accepted = QA?.querySelector('[itemprop="acceptedAnswer"]');
    /**
     * get answer body
     * @param el
     * @returns
     */
    const getAnswer = (el: Element | null | undefined) => el?.querySelector('[class*="answercell"]')?.innerHTML.trim();
    rA.push(getAnswer(accepted), ...other_answers.map(getAnswer));
  }

  const result = { title, created: dateCreatedMoment, question, answers: rA };

  let markdown = `
---
title: ${result.title}
date: ${result.created}
updated: ${moment().format()}
---

## ${result.title}

${result.question}

  `;

  result.answers.forEach((str) => {
    markdown += str;
  });

  writefile(path.join(process.cwd(), 'tmp/markdown', md5(o.url) + '.md'), markdown);

  window.close();

  return result;
}
