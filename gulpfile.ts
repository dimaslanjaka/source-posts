import ansiColors from 'ansi-colors';
import gulp from 'gulp';
import { parsePost } from 'hexo-post-parser';
import { spawn } from 'hexo-util';
import through2 from 'through2';
import path from 'upath';
import { extPost } from './globals';

gulp.task('default', async () => {
  await spawn('git', ['add', '.'], { cwd: __dirname, stdio: 'inherit' });
  await spawn('git', ['add', '-A'], { cwd: __dirname, stdio: 'inherit' });
  await spawn('git', ['commit', '-m', 'update article ' + new Date()], {
    cwd: __dirname,
    stdio: 'inherit'
  });
});

gulp.task('fix-dmca', () => {
  return gulp.src([path.join(__dirname, 'posts/**/*.md'), '!**/tmp/', '!**/node_modules/']).pipe(
    through2.obj(async (vinyl, enc, next) => {
      const contents = String(vinyl.contents);
      try {
        const parse = (await parsePost(contents, {
          cache: false,
          sourceFile: vinyl.path,
          fix: true,
          formatDate: true,
          shortcodes: {
            youtube: true,
            codeblock: true,
            include: true,
            css: true,
            link: true,
            text: true,
            script: true,
            now: true
          }
        })) as extPost;
        if (parse && /download/i.test(parse.metadata.title)) {
          if ('adsense' in parse.metadata === false || parse.metadata.adsense === true) {
            if (/lagu/i.test(parse.metadata.title)) {
              console.log(
                ansiColors.yellow('Download'),
                ansiColors.magenta('Lagu'),
                'adsense=' + parse.metadata.adsense,
                vinyl.path
              );
            } else {
              console.log(ansiColors.yellow('Download'), 'adsense=' + parse.metadata.adsense, vinyl.path);
            }
          }
        }
      } catch (e) {
        console.log(ansiColors.redBright(e.message), vinyl.path);
      }
      next();
    })
  );
});
