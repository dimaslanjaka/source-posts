const glob = require('glob');
const { path } = require('sbg-utility');
const bluebird = require('bluebird');

function getPosts() {
  return bluebird
    .resolve(
      glob.glob('source/_posts/**/*.md', {
        absolute: true,
        ignore: ['**/node_modules/**', '**/License*', '**/readme*'],
        cwd: path.join(__dirname, '..')
      })
    )
    .map((str) => path.toUnix(str));
}

module.exports = { getPosts };
