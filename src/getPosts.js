const glob = require('glob')
const { path } = require('sbg-utility')
const bluebird = require('bluebird')

/**
 * get files
 * @param {string|string[]} pattern
 * @returns
 */
function getPosts(pattern = 'source/_posts/**/*.md') {
  return bluebird
    .resolve(
      glob.glob(pattern, {
        absolute: true,
        ignore: ['**/node_modules/**', '**/License*', '**/readme*'],
        cwd: path.join(__dirname, '..')
      })
    )
    .map((str) => path.toUnix(str))
}

module.exports = { getPosts }
