---
title: Auto update NPM local and monorepo dependencies
description: How to always update local and monorepo dependencies automatically
date: 2022-11-22T21:00:09+07:00
updated: 2022-11-25T22:27:31+07:00
category: ['Programming']
tags: ['NPM', 'Auto']
---

## install package

```bash
npm i -D cross-spawn
```

## Create Script
create file `postinstall.js`

```js
const pjson = require('./package.json');
const { spawn } = require('cross-spawn');
const fs = require('fs');
const path = require('path/posix');

(async () => {
  // @todo clear cache local packages
  const packages = [pjson.dependencies, pjson.devDependencies];
  for (let i = 0; i < packages.length; i++) {
    const pkgs = packages[i];
    const isDev = i === 1; // <-- index devDependencies
    for (const pkgname in pkgs) {
      /**
       * @type {string}
       */
      const version = pkgs[pkgname];
      // re-installing local and monorepo
      if (/^((file|github):|(git|ssh)\+|http)/.test(version)) {
        const isYarn = fs.existsSync(path.join(__dirname, 'yarn.lock'));
        const arg = ['install', version, isDev ? '-D' : ''].filter(
          (str) => str.trim().length > 0
        );
        if (isYarn) {
          await summon('yarn', arg, {
            cwd: __dirname,
            stdio: 'inherit'
          });
        } else {
          await summon('npm', arg, {
            cwd: __dirname,
            stdio: 'inherit'
          });
        }
      }
    }
  }
})();

/**
 * spawn command prompt
 * @param {string} cmd
 * @param {string[]} args
 * @param {Parameters<typeof spawn>[2]} opt
 * @returns
 */
function summon(cmd, args = [], opt = {}) {
  // *** Return the promise
  return new Promise(function (resolve, reject) {
    if (typeof cmd !== 'string' || cmd.trim().length === 0)
      return reject('cmd empty');
    const process = spawn(cmd, args, opt);
    process.on('close', function (code) {
      // Should probably be 'exit', not 'close'
      // *** Process completed
      resolve(code);
    });
    process.on('error', function (err) {
      // *** Process creation failed
      reject(err);
    });
  });
}
```

### Update script 25-11-2022
> - using `npm update` or `yarn upgrade`
```js
const pjson = require('./package.json');
const fs = require('fs');
const path = require('path/posix');
const { spawn } = require('cross-spawn');

(async () => {
  // @todo clear cache local packages
  const packages = [pjson.dependencies, pjson.devDependencies];
  for (let i = 0; i < packages.length; i++) {
    const pkgs = packages[i];
    //const isDev = i === 1; // <-- index devDependencies
    for (const pkgname in pkgs) {
      /**
       * @type {string}
       */
      const version = pkgs[pkgname];
      // re-installing local and monorepo package
      if (/^((file|github):|(git|ssh)\+|http)/.test(version)) {
        const isYarn = fs.existsSync(path.join(__dirname, 'yarn.lock'));
        //const arg = [version, isDev ? '-D' : ''].filter((str) => str.trim().length > 0);
        if (isYarn) {
          // yarn upgrade package
          await summon('yarn', ['upgrade'].concat(pkgname), {
            cwd: __dirname,
            stdio: 'inherit'
          });
        } else {
          // npm update package
          await summon('npm', ['update'].concat(pkgname), {
            cwd: __dirname,
            stdio: 'inherit'
          });
        }
      }
    }
  }
})();

/**
 * spawn command prompt
 * @param {string} cmd
 * @param {string[]} args
 * @param {Parameters<typeof spawn>[2]} opt
 * @returns
 */
function summon(cmd, args = [], opt = {}) {
  // *** Return the promise
  return new Promise(function (resolve, reject) {
    if (typeof cmd !== 'string' || cmd.trim().length === 0) return reject('cmd empty');
    const process = spawn(cmd, args, opt);
    process.on('close', function (code) {
      // Should probably be 'exit', not 'close'
      // *** Process completed
      resolve(code);
    });
    process.on('error', function (err) {
      // *** Process creation failed
      reject(err);
    });
  });
}
```

## Register Script
add script `postinstall` to package.json

```json
{
  "scripts": {
    "postinstall": "node postinstall.js"
  }
}
```

## Conclusion

usages

just run `npm install` and the script `postinstall` runned automatically.

## References
- [https://stackoverflow.com/questions/32873867/update-local-file-dependency-with-npm](https://stackoverflow.com/questions/32873867/update-local-file-dependency-with-npm)
