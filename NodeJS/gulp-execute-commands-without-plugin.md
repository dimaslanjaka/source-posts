---
title: Gulp execute commands without plugin
lang: en
date: 2022-10-17T08:40:46+07:00
updated: 2022-10-17T08:40:46+07:00
tags: ['JS', 'gulp', 'exec']
categories: ['Programming', 'JS']
---

solution for executing shell commands within gulp in NodeJS.

## Using child_process.exec in gulp
Using [exec child_process](https://nodejs.org/api/child_process.html#child_processexeccommand-options-callback)

```js
const { exec } = require('child_process');
const gulp = require('gulp');
const { join } = require('path');

gulp.task('default', function () {
  gulp.watch(join(__dirname, 'src/**/*.ts'), function (done) {
    const child = exec('cross-env NODE_ENV=development DEBUG=prerender-it* run-s build test', function () {
      done();
    });
    child.stdout.pipe(process.stdout);
    child.stderr.pipe(process.stderr);
  });
  gulp.watch(join(__dirname, 'test/src/**/*.{ts,tsx}'), function (done) {
    const child = exec('cross-env NODE_ENV=development DEBUG=prerender-it* run-s test-build', function () {
      done();
    });
    child.stdout.pipe(process.stdout);
    child.stderr.pipe(process.stderr);
  });
});
```
