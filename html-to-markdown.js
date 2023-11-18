const hpp = require('hexo-post-parser')
const TurndownService = require('turndown')
const glob = require('glob')
const Promise = require('bluebird')
const { fs, path, writefile } = require('sbg-utility')
const yaml = require('yaml')

const files = Promise.resolve(
  glob.glob('posts/**/*.md', { ignore: ['**/node_modules/**', '**/readme*'] })
)

files.then((files) => {
  console.log('total', files.length)
  return files
})

files.each((file) => {
  try {
    file = path.resolve(file)
    const result = hpp.parsePostFM(fs.readFileSync(file, 'utf-8'))
    if (!result) return console.error('fail parse', file)
    if (!result.body) return console.error('fail render', file)
    if (!/<div dir=["']ltr["']/gm.test(result.body))
      // return console.error(file, 'not html body')
      return
    if (/codepen/m.test(result.body))
      return console.error(file, 'contains codepen')
    if (new RegExp('<style', 'm').test(result.body))
      return console.error(file, 'contains style')
    if (new RegExp('<script', 'm').test(result.body))
      return console.error(file, 'contains script')
    if (new RegExp('<pre', 'm').test(result.body))
      return console.error(file, 'contains pre')
    console.log('convert', file)
    const turndownService = new TurndownService()
    turndownService.keep(['script', 'ins', 'iframe', 'style'])
    const markdown = turndownService.turndown(result.body)
    const metadata = yaml.stringify(result.attributes)
    const post = `
---
${metadata}
---

${markdown}
    `.trim()
    writefile(file, post)
  } catch {
    console.log('fail parse', file)
  }
})
