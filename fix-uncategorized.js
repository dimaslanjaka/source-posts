const { getPosts } = require('./src/getPosts')
const parse = require('hexo-post-parser')
const { fs, path } = require('sbg-utility')
const yaml = require('yaml')
const moment = require('moment-timezone')
const ansiColors = require('ansi-colors')

getPosts().each(async (file) => {
  try {
    const post = await parse.parsePost(fs.readFileSync(file, 'utf-8'), {
      sourceFile: file,
      fix: true,
      config: yaml.parse(
        fs.readFileSync(path.join(__dirname, '_config.yml'), 'utf-8')
      )
    })

    if (post.metadata) {
      let save
      const { title } = post.metadata
      const categories = post.metadata.categories || []
      if (categories.includes('uncategorized')) {
        const newCat = []
        const mapCat = {
          programming:
            /blogger|blog|wordpress|javascript|typescript|css|html|java|php|vscode|regex|\[js\]/gim
        }
        for (const key in mapCat) {
          if (Object.hasOwnProperty.call(mapCat, key)) {
            /** @type {typeof mapCat[keyof typeof mapCat]} */
            const searchArr = mapCat[key]
            if (searchArr.test(title)) {
              console.log(
                `${ansiColors.greenBright(
                  title
                )} contains category key ${ansiColors.magentaBright(key)}`
              )
              newCat.push(key)
              post.metadata.categories = newCat
              save = true
            }
          }
        }
      }

      // remove unused/duplicate meta
      if (post.metadata.excerpt && post.metadata.description)
        delete post.metadata.excerpt
      if (post.metadata.subtitle && post.metadata.description)
        delete post.metadata.subtitle
      if (post.metadata.id) delete post.metadata.id
      if (post.metadata.uuid) delete post.metadata.uuid
      // remove empty photos
      if (
        Array.isArray(post.metadata.photos) &&
        post.metadata.photos.length === 0
      ) {
        delete post.metadata.photos
      }
      // only leave 160 chars from description
      if (post.metadata.description.length > 160) {
        post.metadata.description = post.metadata.description.substring(0, 160)
      }

      // metadata empty - dont save
      if (Object.keys(post.metadata).length === 0) {
        console.log('meta empty', file)
        save = false
      }

      if (save) {
        post.metadata.updated = moment(new Date()).tz('Asia/Jakarta').format()
        const build = parse.buildPost(post)
        fs.writeFileSync(file, build)
      }
    }
  } catch (e) {
    console.log('fail parse', file)
    console.trace(e)
  }
})
