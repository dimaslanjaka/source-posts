const parse = require('hexo-post-parser')
const yaml = require('yaml')
const { path, fs } = require('sbg-utility')
const moment = require('moment-timezone')
const { getPosts } = require('./src/getPosts')

getPosts().each(async (file) => {
  try {
    const post = await parse.parsePost(fs.readFileSync(file, 'utf-8'), {
      sourceFile: file,
      fix: true,
      config: yaml.parse(
        fs.readFileSync(path.join(__dirname, '_config.yml'), 'utf-8')
      )
    })

    // lowercase taxonomy
    if (post.metadata) {
      let save

      // delete category metadata
      // try moving to categories metadata
      if ('category' in post.metadata) {
        post.metadata.categories = post.metadata.category
        delete post.metadata.category
        save = true
      }

      // lowercase categories
      const categories = post.metadata.categories || []
      if (categories.some((str) => /[A-Z]/g.test(str))) {
        post.metadata.categories = lowercaseTaxonomy(categories)
        save = true
      }

      // lowercase tags
      const tags = post.metadata.tags || []
      if (tags.some((str) => /[A-Z]/g.test(str))) {
        post.metadata.tags = lowercaseTaxonomy(tags)
        save = true
      }

      // find category programming
      if (categories.includes('programming') && categories.length > 1) {
        post.metadata.categories = ['programming']
        post.metadata.tags = tags
          .concat(
            ...categories
              // remove programming
              .filter((str) => str != 'programming')
          )
          // map js ts
          .map((str) => {
            if (str == 'js') return 'javascript'
            if (str == 'ts') return 'typescript'
            return str
          })
          // remove duplicates
          .filter(function (value, index, array) {
            return array.indexOf(value) === index
          })
        save = true
      }

      // map js ts
      if (tags.some((str) => ['js', 'ts'].includes(str))) {
        post.metadata.tags = tags
          .map((str) => {
            if (str == 'js') return 'javascript'
            if (str == 'ts') return 'typescript'
            return str
          })
          // remove duplicates
          .filter(function (value, index, array) {
            return array.indexOf(value) === index
          })
        save = true
      }

      // assign to programming by tags substring
      if (
        tags.some((str) =>
          [
            'js',
            'ts',
            'javascript',
            'typescript',
            'css',
            'html',
            'php',
            'java',
            'kotlin',
            'gradle'
          ].includes(str)
        ) &&
        !categories.includes('programming')
      ) {
        post.metadata.categories = post.metadata.categories
          .concat('programming')
          // remove uncategorized
          .filter((str) => str !== 'uncategorized')
          // remove duplicates
          .filter(function (value, index, array) {
            return array.indexOf(value) === index
          })
        save = true
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
  }
})

/**
 *
 * @param {string[]} arr
 */
function lowercaseTaxonomy(arr) {
  return arr.map((str) => str.toLowerCase())
}
