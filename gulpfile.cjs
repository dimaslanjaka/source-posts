/* eslint-disable @typescript-eslint/no-var-requires */
const ansiColors = require('ansi-colors');
const fs = require('fs-extra');
const { default: git } = require('git-command-helper');
const { spawn, spawnAsync } = require('git-command-helper/dist/spawn');
const { parsePost } = require('hexo-post-parser');
const { getConfig, gulp } = require('static-blog-generator');
const through2 = require('through2');
const path = require('upath');

//
// process by gulp
// commands:
// gulp --gulpfile gulpfile.cjs <task-name>
// ./bin/gulpp <task-name>
// gulpp <task-name>
//
/**
 * git clone
 * @param {string} destFolder
 * @param {import('child_process').SpawnOptions} options
 */
async function clone(destFolder, options) {
  const spawnOpt = Object.assign({ cwd: __dirname }, options);
  if (!fs.existsSync(destFolder)) {
    // clone from root deployment dir
    await spawnAsync(
      'git',
      ['clone', '-b', getConfig().deploy.branch, '--single-branch', getConfig().deploy.repo, destFolder],
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
 * @param {gulp.TaskFunctionCallback} done
 */
async function pull(done) {
  const cwd = path.join(__dirname, 'posts');
  const gh = new git(cwd);

  /**
   * run pull
   * @param {string} cwd
   */
  const doPull = async (cwd) => {
    await spawnAsync('git', ['config', 'pull.rebase', 'false'], {
      cwd
    }).catch(() => console.log('cannot set pull.rebase to false'));

    console.log('pulling', cwd);
    await spawn('git', ['pull', '-X', 'theirs'], {
      cwd,
      stdio: 'pipe'
    }).catch((e) => console.log('cannot pull', cwd, e.message));
  };

  try {
    await clone('posts', { cwd: __dirname });
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

gulp.task('pull', pull);

/**
 * get current commit url
 * @returns
 */
async function getCurrentCommit() {
  const gh = new git(__dirname);
  const commit = await gh.latestCommit();
  const remote = await gh.getremote();
  return remote.fetch.url.replace(/(.git|\/)$/, '') + '/commit/' + commit;
}

/**
 * do commit including submodules
 * @param {(...args: any[]) => any} done
 */
async function commit(done) {
  const config = getConfig();
  const cwd = path.join(__dirname, 'posts');
  const gh = config.deploy.github || new git(cwd);

  /**
   * do commit
   * @param {string} cwd
   */
  const doCommit = async (cwd) => {
    console.log('commiting', cwd);
    await spawnAsync('git', ['add', '.'], { cwd }).catch(() => console.log('cannot add', cwd));
    await spawnAsync('git', ['commit', '-m', 'Update site from ' + (await getCurrentCommit())], { cwd }).catch(() =>
      console.log('cannot commit', cwd)
    );
  };

  // runners
  try {
    // commit submodules first
    const submodules = gh.submodule.get();
    for (let i = 0; i < submodules.length; i++) {
      const sub = submodules[i];
      const cwd = sub.root;
      await doCommit(cwd);
    }

    // commit root repo
    await doCommit(cwd);
  } catch (e) {
    console.log(e.message);
  }

  if (typeof done === 'function') done();
}

gulp.task('commit', commit);

gulp.task('adsense-fix', () => {
  return gulp.src([path.join(__dirname, 'posts/**/*.md'), '!**/tmp/', '!**/node_modules/']).pipe(
    through2.obj(async (vinyl, enc, next) => {
      const contents = String(vinyl.contents);
      try {
        /**
         * @type {import('./globals').extPost}
         */
        const parse = await parsePost(contents, {
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
        });
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
