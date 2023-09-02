---
author: Dimas Lanjaka
categories:
  - programming
comments: true
date: 2022-10-17T08:40:46+07:00
description: Gulp execute commands without plugin solution for executing shell
  commands within gulp in NodeJS. Using child_process.exec in gulp with
  gulp.watch Using exec ch
lang: en
tags:
  - javascript
  - gulp
  - exec
title: Gulp execute commands without plugin
type: post
updated: 2023-09-03T04:28:00+07:00
wordcount: 442
---

solution for executing shell commands within gulp in NodeJS.

## Using child_process.exec in gulp with gulp.watch
Using [exec child_process](https://nodejs.org/api/child_process.html#child_processexeccommand-options-callback). `exec` takes one string that will be parsed by the shell, and it silences output by default.

Below codes for watching files and run shell commands every file changes.

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

## Result using exec
![image](https://user-images.githubusercontent.com/12471057/196072185-f39e2b13-1f0f-49a6-9a98-e3741a20ae7e.png)

References:
-----------

-   Gulp documentation: [Returning a child process](https://gulpjs.com/docs/en/getting-started/async-completion/#returning-a-child-process)
-   Node documentation: [`child_process.exec(command, options, callback)`](https://nodejs.org/api/child_process.html#child_process_child_process_exec_command_options_callback)
-   Node documentation: [`child_process.spawn(command, args, options)`](https://nodejs.org/api/child_process.html#child_process_child_process_spawn_command_args_options)


