---
title: Github Workflows Run Strategy Matrix Sequentally
date: 2022-12-31T13:04:49+07:00
updated: 2023-01-03T01:02:36+07:00
tags: ['github-workflows', 'snippet', 'yaml', 'github-actions', 'matrix']
categories: ['programming', 'github']
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
