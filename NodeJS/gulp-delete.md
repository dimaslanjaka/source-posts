---
title: How to delete files with gulp without any plugin
date: 2022-10-15T14:00:08+07:00
updated: 2022-10-15T14:00:08+07:00
keywords:
  - delete files with gulp
  - gulp delete files
  - gulp.src delete files
  - gulp delete all files except some files
---

`del` is now only used for ESM

```typescript
const { rmSync, rmdirSync } = require('fs')
const { join } = require('path')
const gulp = require('gulp')
// folder to scan and delete files
const destDir = join(__dirname, 'folder/to/scan')
gulp.task('clean', function () {
  return gulp
    // this will delete all files, except .git*,/bin/*
    .src(['**/*.*', '!^.git*', '!**/bin/*'], { cwd: destDir })
    .pipe(
      through2.obj((file, _enc, next) => {
        if (statSync(file.path).isFile()) {
          rmSync(file.path)
        } else {
          rmdirSync(file.path)
        }
        next()
      })
    )
    .pipe(gulp.dest(destDir))
})
```
