---
author: Dimas Lanjaka
categories:
  - programming
comments: true
date: 2022-12-31T13:04:49+07:00
description: "Github Workflows Run Strategy Matrix Sequentally How to setup
  github action matrix to be run sequentally or series each job ? Conclusing
  Just add below codes: j"
lang: en
tags:
  - github-workflows
  - snippet
  - yaml
  - github-actions
  - matrix
  - github
title: Github Workflows Run Strategy Matrix Sequentally
type: post
updated: 2023-09-03T04:28:02+07:00
wordcount: 349
---

How to setup github action matrix to be run sequentally or series each job ?

Conclusing Just add below codes:
```yaml
jobs:
  deploy:
    runs-on: ubuntu-latest
    strategy:
      # When set to true, GitHub cancels all in-progress jobs if any matrix job fails.
      fail-fast: true
      # The maximum number of jobs that can run simultaneously
      max-parallel: 1
```
Full Example
```yaml
jobs:
  deploy:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        stage: ['development', 'integration', 'production']
        os: [ "windows-latest", "macos-11", "ubuntu-latest" ]
        node-version: [ 14.x, 16.x, 18.x ]
        architecture: [ x86, x64 ]
      fail-fast: true
      max-parallel: 1
    steps:
      - name: do some stuff
        uses: ...
        with: ...
```
