---
author: Dimas Lanjaka
categories:
  - programming
comments: true
date: 2022-11-09T16:42:24+07:00
description: "Github Workflow Filter Job Berdasarkan OS Yang Dijalankan Condition Syntax Berdasarkan OS Yang Dijalankan Saat Ini if: matrix.os == ubuntu-latestif: matrix.os ="
lang: id
permalink: /id/GitHub/github-workflow-filter-jobs-by-os.html
tags:
  - github
  - github-actions-workflow
  - snippet
  - yaml
title: Github Workflow Filter Job Berdasarkan OS Yang Dijalankan
type: post
updated: 2023-09-03T04:28:02+07:00
wordcount: 404
---

## Condition Syntax Berdasarkan OS Yang Dijalankan Saat Ini
```yaml
if: matrix.os == 'ubuntu-latest'

if: matrix.os == 'windows-latest'

if: matrix.os == 'macOS-latest'
```

## Condition Syntax Berdasarkan Konteks OS Yang Dijalankan Saat Ini
```yaml
if: runner.os == 'Linux'

if: runner.os == 'Windows'

if: runner.os == 'macOS'
```

## Contoh Kondisi Job Menggunakan variable RUNNER_OS
```yaml
- name:  Install
  run:   |
         if [ "$RUNNER_OS" == "Linux" ]; then
              apt install important_linux_software
         elif [ "$RUNNER_OS" == "Windows" ]; then
              choco install important_windows_software
         else
              echo "$RUNNER_OS not supported"
              exit 1
         fi
  shell: bash
```

[Source](https://stackoverflow.com/a/57948488)

## Contoh Lengkap GitHub Workflow Job Berdasarkan OS
```yaml
runs-on: ${{ matrix.os }}
strategy:
    matrix:
        os: [ubuntu-latest, windows-latest, macOS-latest]
steps:
    - name: Setup Ubuntu
      run : echo "iam running on LINUX"
      if: runner.os == 'Linux'
```
