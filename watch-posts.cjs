var chokidar = require('chokidar');
const { join } = require('path');
const fs = require('fs');
const { projectIgnores, commonIgnore } = require('./packages/static-blog-generator/dist/gulp.config');
const { updatePost } = require('./packages/static-blog-generator/dist/gulp.post');
const { scheduler } = require('./packages/static-blog-generator');

scheduler.register();

const isAsset = (path) => /.(js|css|scss|njk|ejs|png|jpe?g|gif|svg|webp|json|html|txt)$/.test(String(path));
const isMarkdown = (path) => /.(md)$/i.test(String(path));

const sourceDir = join(__dirname, 'posts');
const ignored = commonIgnore.concat(...projectIgnores, /^\./, '**/.git*', '**/.idea/**');
var watcher = chokidar.watch(['**/*.*'], {
  ignored,
  persistent: true,
  cwd: sourceDir,
  ignorePermissionErrors: true,
  alwaysStat: false
});

watcher
  .on('add', (path) => {
    if (!isMarkdown(path) && !isAsset(path)) console.log('non-markdown and non-asset', path.toString());
  })
  .on('change', function (path) {
    if (isMarkdown(path)) {
      if (!fs.existsSync(path)) path = join(sourceDir, path);
      // console.log('File', path.replace(__dirname, ''), 'has been changed');
      //console.log('validate', processing.indexOf(path));
      scheduler.add('update post ' + path, () => updatePost(path));
    }
  })
  .on('unlink', function (path) {
    console.log('File', path, 'has been removed');
  });
