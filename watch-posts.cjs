var chokidar = require('chokidar');
const { join } = require('path');
const fs = require('fs');
const { projectIgnores, commonIgnore } = require('static-blog-generator/dist/gulp.config');
const { EOL } = require('os');

const ignored = commonIgnore.concat(...projectIgnores, /^\./, '**/.git*', '**/.idea/**');
var watcher = chokidar.watch(['**/*.*'], {
  ignored,
  persistent: true,
  cwd: join(__dirname, 'posts'),
  ignorePermissionErrors: true,
  alwaysStat: false
});

console.log(ignored);

const isAsset = (path) => /.(js|css|scss|njk|ejs|png|jpe?g|gif|svg|webp|json|html|txt)$/.test(String(path));
const isMarkdown = (path) => /.(md)$/i.test(String(path));

setTimeout(() => {
  fs.appendFileSync(__dirname + '/posts\\hexo-theme-unit-test\\post-watcher.md', EOL);
}, 1000);
watcher
  .on('add', (path) => {
    if (!isMarkdown(path) && !isAsset(path)) console.log('non-markdown and non-asset', path.toString());
  })
  .on('change', function (path) {
    if (isMarkdown(path)) {
      console.log('File', path, 'has been changed');
    }
  })
  .on('unlink', function (path) {
    console.log('File', path, 'has been removed');
  });
