const { getPosts } = require('./src/getPosts')
const parse = require('hexo-post-parser')
const { fs, path } = require('sbg-utility')
const yaml = require('yaml')
const ansiColors = require('ansi-colors')

getPosts('posts/**/*.md').each(async (file) => {
  try {
    const post = await parse.parsePost(fs.readFileSync(file, 'utf-8'), {
      sourceFile: file,
      fix: true,
      config: yaml.parse(
        fs.readFileSync(path.join(__dirname, '_config.yml'), 'utf-8')
      )
    })

    if (post.metadata) {
      const { title } = post.metadata
      const regex = new RegExp('download (lagu|film|movie)', 'i')
      if (regex.test(title)) {
        fs.rmSync(file)
        console.log(ansiColors.redBright('removed'), file)
      }
    }
  } catch (e) {
    console.log('fail parse', file)
    console.trace(e)
  }
})
