---
author: Dimas Lanjaka
categories:
  - programming
comments: true
cover: https://www.wikihow.com/images/7/7f/Use-Cygwin-Step-13.jpg
date: 2023-02-20T06:40:36+07:00
description: Using linux binary command instead windows binary command. Make
  cygwin downloaded package as priority.
excerpt: Using linux binary command instead windows binary command. Make cygwin
  downloaded package as priority.
id: 8f722d95-9e43-4888-80b3-2beef6c9ab34
lang: en
photos:
  - https://www.wikihow.com/images/7/7f/Use-Cygwin-Step-13.jpg
subtitle: Using linux binary command instead windows binary command. Make cygwin
  downloaded package as priority.
tags:
  - cygwin
  - windows
  - linux
thumbnail: https://www.wikihow.com/images/7/7f/Use-Cygwin-Step-13.jpg
title: Make CYGWIN binary as priority in windows
type: post
updated: 2023-02-24T03:27:39+07:00
wordcount: 121
---

## Important syntax to make cygwin as priority

```bash
export PATH="/usr/local/bin:/usr/bin:/bin:/usr/local/sbin:/usr/sbin:/sbin:$PATH";
```

## Example make cygwin as priority in bash script

```bash
#!/usr/bin/env bash

#sh -c 'rm -rf node_modules/a* & wait'

# make cygwin bin as priority
export PATH="/usr/local/bin:/usr/bin:/bin:/usr/local/sbin:/usr/sbin:/sbin:$PATH";

# Your code here
```
