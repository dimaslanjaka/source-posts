import fs from 'fs-extra';
import sass from 'node-sass';
import path from 'path';
import * as util from 'sbg-utility';
import upath from 'upath';

export interface sassMiddlewareOptions {
  [key: string]: any;
  /**
   * source scss folder
   */
  src: string;
  /**
   * destination css folder
   */
  dest?: string;
  /**
   * base url pathname
   */
  base?: string;
  /**
   * root directory
   */
  cwd?: string;
}

/**
 * modded sass middleware
 * @param options
 * @returns
 */
export default function sassMiddleware(options: sassMiddlewareOptions): import('express').RequestHandler {
  options = Object.assign({ cwd: process.cwd(), base: '' }, options);
  // Source directory (required)
  const src =
    options.src ||
    (function () {
      throw new Error('sass.middleware() requires "src" directory.');
    })();
  // Destination directory (source by default)
  const dest = options.dest || util.path.join(process.cwd(), 'tmp/node-sass/dummy.css');
  // cache max age
  const maxAge = options.maxAge || 0;

  return function sassRenderer(req, res, next) {
    const pathname = new URL('http://' + req.hostname + req.url).pathname;
    if (!/\.css$/.test(pathname) || upath.extname(pathname) !== '.css') {
      if (options.debug) console.log('debug', 'skip', pathname);
      return next();
    }

    const fixedPath = pathname.replace(options.base ? options.base : 'BASE_UNDEFINED', '');
    const cssPath = upath.join(dest, fixedPath);
    const sassPath = upath.join(src, fixedPath.replace(/\.css$/, '.scss'));
    const sassDir = upath.dirname(sassPath);

    util.writefile(
      'tmp/node-sass-middleware/' + pathname + '.log',
      JSON.stringify({ dest, src, cssPath, sassPath, sassDir }, null, 2)
    );

    const result = sass.renderSync({
      file: sassPath,
      outFile: cssPath,
      outputStyle: util.isdev() ? 'expanded' : 'compressed',
      includePaths: [
        path.join(__dirname, '../node_modules'),
        path.join(process.cwd(), 'node_modules'),
        path.join(__dirname, '../../node_modules')
      ]
        .filter(fs.existsSync)
        .map((str) => path.resolve(str))
        .filter(function (elem, index, self) {
          return index === self.indexOf(elem);
        })
    });
    if (options.debug) console.log('css written', util.writefile(cssPath, String(result.css)).file);

    res.writeHead(200, {
      'Content-Type': 'text/css',
      'Cache-Control': 'max-age=' + maxAge
    });
    res.end(result.css);
  };
}
