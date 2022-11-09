---
title: Github Workflow Filter Job Berdasarkan OS Yang Dijalankan
lang: en
date: 2022-11-09T16:49:20+07:00
updated: 2022-11-09T16:49:20+07:00
category: ['Programming', 'GitHub']
tags: ['GitHub', 'Workflow', 'Job']
---

## Condition Syntax Based on Current Running OS
```yaml
if: matrix.os == 'ubuntu-latest'

if: matrix.os == 'windows-latest'

if: matrix.os == 'macOS-latest'
```

## Condition Syntax Based on the Context of the Current Running OS
```yaml
if: runner.os == 'Linux'

if: runner.os == 'Windows'

if: runner.os == 'macOS'
```

## Example of Job Conditions Using the RUNNER OS variable
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

## Complete Example of GitHub Workflow Job Based on OS
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
