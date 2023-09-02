---
author: Dimas Lanjaka
categories:
  - programming
comments: true
cover: https://opengraph.githubassets.com/d5c0c03975090ca4fdc9426231dd22310716b7d817cb6de10306acc7399a583c/sindresorhus/del/issues/42
date: 2022-10-15T14:00:08+07:00
description: How to delete files with gulp without any plugin del is now only
  used for ESM del Issues about del and gulp Issue42 Issue42 Variables fs-extra
  better than fs fo
keywords:
  - delete files with gulp
  - gulp delete files
  - gulp.src delete files
  - gulp delete all files except some files
lang: en
photos:
  - https://opengraph.githubassets.com/d5c0c03975090ca4fdc9426231dd22310716b7d817cb6de10306acc7399a583c/sindresorhus/del/issues/42
tags:
  - snippets
  - javascript
thumbnail: https://opengraph.githubassets.com/d5c0c03975090ca4fdc9426231dd22310716b7d817cb6de10306acc7399a583c/sindresorhus/del/issues/42
title: How to delete files with gulp without any plugin
type: post
updated: 2023-09-03T04:28:00+07:00
wordcount: 1113
---

`del` is now only used for ESM
## Issues about del and gulp
- [Issue#42](https://github.com/sindresorhus/del/issues/42)

## Variables
`fs-extra` better than `fs` for supressing useless errors
```javascript
const { rmSync, rmdirSync, existsSync } = require('fs')
const { join } = require('path')
const gulp = require('gulp')
// folder to scan and delete files
const destDir = join(__dirname, 'folder/to/scan')
```

## Using standard `gulp.src` with `!` as ignore
```typescript
gulp.task('clean', function () {
  return gulp
    // this will delete all files, except .git*,/bin/*
    .src(['**/*', '!^.git*', '!**/bin/*'], { cwd: destDir })
    .pipe(
      through2.obj((file, _enc, next) => {
        if (existsSync(file.path)){
          if (statSync(file.path).isFile()) {
            rmSync(file.path)
          } else {
            rmdirSync(file.path)
          }
        } 
        next()
      })
    )
    .pipe(gulp.dest(destDir))
})
```

OR you can 

## Using `ignore` options like below
```typescript
gulp.task('clean', function () {
  return gulp
    .src(
      [
        // delete all files and folders
        '**/*'
      ],
      {
        ignore: [
          // keep git files
          '^.git*',
          // keep shortcut script
          '**/bin',
          // keep sitemap
          'sitemap.*',
          // keep CNAME
          'CNAME',
          // keep nojekyll builds
          '.nojekyll',
          // skip removing html, for keep old files on remote
          '**/*.html'
        ],
        cwd: destDir
      }
    )
    .pipe(
      through2.obj((file, _enc, next) => {
        try {
          if (existsSync(file.path))
            rm(file.path, { recursive: true, force: true }, next)
        } catch {
          //
        }
      })
    )
})
```

## My Gulp Clean Script
```typescript
gulp.task('clean', function () {
  return gulp
    .src(
      [
        // delete all files and folders
        '**/*'
      ],
      {
        ignore: [
          // keep git files
          '^.git*',
          // keep shortcut script
          '**/bin',
          // keep sitemap
          'sitemap.*',
          // keep CNAME
          'CNAME',
          // keep nojekyll builds
          '.nojekyll',
          // skip removing html, for keep old files on remote
          '**/*.html'
        ],
        cwd: destDir
      }
    )
    .pipe(
      through2.obj((file, _enc, next) => {
        try {
          if (existsSync(file.path)) {
            const { path } = file
            const stats = statSync(path)
            if (stats.isFile()) {
              rmSync(path)
            } else {
              rmSync(path, { recursive: true })
            }
            next(null)
          }
        } catch {
          //
        }
      })
    )
})
```
