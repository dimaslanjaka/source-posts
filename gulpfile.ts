import ansiColors from 'ansi-colors';
import fs from 'fs-extra';
import { spawnAsync } from 'git-command-helper/dist/spawn';
import { parsePost } from 'hexo-post-parser';
import { spawn } from 'hexo-util';
import { getConfig, gulp } from 'static-blog-generator';
import through2 from 'through2';
import path from 'upath';
import { extPost } from './globals';

//
// process by gulp
//

gulp.task('default', async () => {
  await spawn('git', ['add', '.'], { cwd: __dirname, stdio: 'inherit' });
  await spawn('git', ['add', '-A'], { cwd: __dirname, stdio: 'inherit' });
  await spawn('git', ['commit', '-m', 'update article ' + new Date()], {
    cwd: __dirname,
    stdio: 'inherit'
  });
});

/**
 * git clone
 * @param destFolder
 */
async function clone(destFolder: string, options?: import('child_process').SpawnOptions) {
  const spawnOpt = Object.assign({ cwd: __dirname }, options);
  if (!fs.existsSync(destFolder)) {
    // clone from root deployment dir
    await spawnAsync(
      'git',
      [...'clone -b master --single-branch'.split(' '), getConfig().deploy.repo, destFolder],
      spawnOpt
    );
    // update submodule from deployment dir
    if (fs.existsSync(path.join(destFolder, '.gitmodules'))) {
      await spawnAsync('git', ['submodule', 'update', '-i', '-r'], Object.assign(spawnOpt, { cwd: destFolder }));
    }
  }
}

/**
 * git pull on deploy dir
 */
async function pull(done: gulp.TaskFunctionCallback) {
  const config = getConfig();
  const cwd = config.deploy.deployDir;
  const gh = config.deploy.github;

  const doPull = async (cwd: string) => {
    try {
      await spawnAsync('git', ['config', 'pull.rebase', 'false'], {
        cwd
      });
    } catch (e) {
      // console.log(e.message, sub.root);
    }

    try {
      console.log('pulling', cwd);
      await gh.spawn('git', ['pull', '-X', 'theirs'], {
        cwd,
        stdio: 'pipe'
      });
    } catch (e) {
      console.log('cannot pull', cwd);
    }
  };

  try {
    await clone('posts');
    await doPull(cwd);
    if (gh) {
      const submodules = gh.submodule.get();
      for (let i = 0; i < submodules.length; i++) {
        const sub = submodules[i];

        await doPull(sub.root);
      }
    }
  } catch (e) {
    console.log(e.message);
  }
  if (typeof done === 'function') done();
}

gulp.task('adsense-fix', () => {
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
