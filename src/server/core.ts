import * as express from 'express';
import { existsSync, readFileSync } from 'fs-extra';
import { default as git } from 'git-command-helper';
import { encodeURL } from 'hexo-util';
import { configure } from 'nunjucks';
import { basename as _basename, dirname as _dirname, extname, join } from 'path';
import * as util from 'sbg-utility';

const app = express.default();

// engine start
const view_path = [join(__dirname, 'views'), join(__dirname, 'views/google')];

const env = configure(view_path, {
  autoescape: true,
  express: app,
  noCache: util.isdev()
});
env.addFilter('uriencode', (str) => {
  return encodeURL(str);
});
env.addFilter('noControlChars', (str) => {
  return str.replace(/[\x00-\x1F\x7F]/g, ''); // eslint-disable-line no-control-regex
});
// Extract date from datetime
env.addFilter(
  'formatDate',
  /**
   *
   * @param {import('moment-timezone').Moment} input
   * @returns
   */
  (input) => {
    return input.toISOString().substring(0, 10);
  }
);
env.addGlobal('css', (str: string) => {
  return `
<link
	rel="preload"
	href="${str}"
	as="style"
	onload="this.onload=null;this.rel='stylesheet'"
/>
<noscript>
	<link rel="stylesheet" href="${str}" />
</noscript>
	`.trim();
});

app.engine('html', env.render);
app.set('view engine', 'html');

// server static files
// app.use(express.static(path.join(__dirname, '../page')));
app.use('/page/assets', express.static(join(__dirname, '../page/assets')));
app.use('/node_modules', express.static(join(__dirname, 'node_modules')));
app.use('/page/node_modules', express.static(join(__dirname, 'node_modules')));
app.use('/favicon.ico', async function (_, res) {
  const read = readFileSync(join(__dirname, 'source/assets/img/w-icon-25.png'));
  res.setHeader('content-type', 'image/png');
  res.send(read);
});
// static files ends

let identifier = 'GEN-HASH';

// dynamic routes
app.use('/:permalink', async function (req, res) {
  if (identifier === 'GEN-HASH') {
    const github = new git(__dirname);
    identifier = await github.latestCommit();
  }

  let { permalink } = req.params;
  if (permalink.length === 0) permalink = 'index';
  let basename = _basename(permalink, extname(permalink));
  if (basename.length === 0) basename = 'index';
  const dirname = _dirname(permalink);
  let viewPath = join(__dirname, 'views', dirname, basename + '.njk');
  let pathname = new URL('http://' + req.hostname + req.url).pathname;
  if (pathname.length === 0) pathname = 'index';
  if (!existsSync(viewPath)) {
    // resolve real view when first view not exist
    viewPath = join(
      __dirname,
      'views',
      req.originalUrl
        // remove /page/
        .replace(/\/page\//, '')
        // remove url parameters
        .split('?')[0]
        // replace .html to .njk
        .replace(/.html$/, '.njk')
    );
  }
  const viewData = { identifier, dirname, basename, viewPath, permalink };
  util.writefile('tmp/routes/' + pathname + '.log', JSON.stringify(viewData, null, 2));
  const notfoundlayout = join(__dirname, 'views/404.njk');
  if (existsSync(viewPath)) {
    res.render(viewPath, { identifier }, function (err, html) {
      if (err) {
        console.log('fail render', permalink);
        res.render(notfoundlayout, viewData);
      } else {
        console.log('success render', permalink);
        res.send(html);
      }
    });
  } else {
    res.render(notfoundlayout, viewData);
  }
});
//

export default { app };
