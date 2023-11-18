import puppeteer, { PuppeteerLaunchOptions } from 'puppeteer'
import { md5, writefile } from 'sbg-utility'
import path from 'upath'
import { puppeteerOpt } from './puppeteerOpt'

export async function browse(url: string, options?: PuppeteerLaunchOptions) {
  let html = ''
  const file = path.join(process.cwd(), 'tmp/html/' + md5(url) + '.html')

  const browser = await puppeteer.launch(
    Object.assign(puppeteerOpt, options || {})
  )
  const page = await browser.newPage()
  await page.goto(url, { waitUntil: 'networkidle0' })
  //await page.waitForSelector('title');
  html = await page.content()
  await writefile(file, html, { async: true })
    .catch(console.trace)
    .finally(() => browser.close())
  const result = { html, file, url }
  return result
}
