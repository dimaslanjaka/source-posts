---
author: Dimas Lanjaka
categories:
  - programming
comments: true
date: 2023-02-19T23:40:36.000Z
description: Using linux binary command instead windows binary command. Make cygwin downloaded package as priority.
lang: en
tags:
  - linux
  - shell
  - windows
thumbnail: https://www.wikihow.com/images/7/7f/Use-Cygwin-Step-13.jpg
title: Make CYGWIN binary as priority in windows
type: post
updated: 2023-08-08T07:45:08.000Z
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