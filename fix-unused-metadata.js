const { getPosts } = require('./src/getPosts')
const parse = require('hexo-post-parser')
const { fs, path } = require('sbg-utility')
const yaml = require('yaml')

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

      const build = parse.buildPost(post)
      fs.writeFileSync(file, build)
    }
  } catch (e) {
    console.log('fail parse', file)
    console.trace(e)
  }
})
