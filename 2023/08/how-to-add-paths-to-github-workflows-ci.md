---
author: Dimas Lanjaka
categories:
  - programming
comments: true
cover: https://img2.storyblok.com/1280x750/filters:format(webp)/f/79165/1200x630/ebb5571e69/github-action-01.png
date: 2023-08-27T21:09:03+07:00
description: How to add path folder to github workflows CI Sometimes when you
  try to use a command and Bash displays the Command not found error, it might
  be because the pro
lang: en
photos:
  - https://img2.storyblok.com/1280x750/filters:format(webp)/f/79165/1200x630/ebb5571e69/github-action-01.png
tags:
  - bash
  - github
thumbnail: https://img2.storyblok.com/1280x750/filters:format(webp)/f/79165/1200x630/ebb5571e69/github-action-01.png
title: How to add path folder to github workflows CI
type: post
updated: 2023-08-27T21:27:18+07:00
wordcount: 317
---

Sometimes when you try to use a command and Bash displays the "Command not found" error, it might be because the program is not installed on your system. Correct this by installing a software package containing the command and add them into **PATH** enviroment variable.

In **Github Workflows** also has ability to add _PATH enviroment variable_. below is sample codes:

## add ~/.local/bin to PATH CI

```yaml
      - name: add ~/.local/bin to PATH
        shell: bash
        run: |
          echo "${HOME}/.local/bin" >> $GITHUB_PATH
```

## add CI PATH ./node_modules/.bin

```yaml
      - name: add ./node_modules/.bin to PATH
        shell: bash
        run: |
          echo "${GITHUB_WORKSPACE}/node_modules/.bin" >> $GITHUB_PATH
```