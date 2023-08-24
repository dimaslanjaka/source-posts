---
author: Dimas Lanjaka
categories:
  - programming
  - bash
comments: true
date: 2023-02-24T16:39:30+07:00
description: What is /dev/null in shell command ? various types of arguments
  /dev/null argumentargument description> /dev/nullthrow away stdout1>
  /dev/nullthrow away stdout2> /dev/nullthrow away stderr> /dev/nullthrow away
  both stdout and stderr argumentargument description argument argument
excerpt: What is /dev/null in shell command ? various types of arguments
  /dev/null argumentargument description> /dev/nullthrow away stdout1>
  /dev/nullthrow away stdout2> /dev/nullthrow away stderr> /dev/nullthrow away
  both stdout and stderr argumentargument description argument argument
lang: en
photos: []
subtitle: What is /dev/null in shell command ? various types of arguments
  /dev/null argumentargument description> /dev/nullthrow away stdout1>
  /dev/nullthrow away stdout2> /dev/nullthrow away stderr> /dev/nullthrow away
  both stdout and stderr argumentargument description argument argument
tags:
  - bash
  - script
title: What is /dev/null in shell command ?
type: post
updated: 2023-08-08T14:45:08+07:00
wordcount: 375
---

## various types of arguments /dev/null

| argument | argument description |
| :--- | :--- |
|   `> /dev/null`  | throw away **stdout** |
|   `1> /dev/null` | throw away **stdout** |
|   `2> /dev/null` | throw away **stderr** |
|   `&> /dev/null` | throw away both **stdout** *and* **stderr** |

`>` is the operator used to redirect output. `2` is a reference to the standard error output stream, i.e. `2>` = redirect error output.

`/dev/null` is the 'null device' which just swallows any input provided to it. You can combine the two to effectively throw away output from a command.

## Usages /dev/null example

**Suppress `rm` warnings**

```
$ rm tempfl.txt 2> /dev/null

```

**Redirect script output to `/dev/null`**

```
$ ./myscript.sh 2> /dev/null

```

The latter has a drawback of missing all other warning messages produced by your script.

this article source from [stackoverflow](https://stackoverflow.com/a/51045329)
