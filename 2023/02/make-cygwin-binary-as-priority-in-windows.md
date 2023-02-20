---
title: Make CYGWIN binary as prioriyu in windows
description: Using linux binary command instead windows binary command. Make cygwin downloaded package as priority.
date: 2023-02-20T06:40:36+07:00
updated: 2023-02-20T06:40:36+07:00
tags: ['cygwin', 'windows', 'linux']
categories: [['programming'], ['linux'], ['windows']]
thumbnail: https://www.wikihow.com/images/7/7f/Use-Cygwin-Step-13.jpg
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