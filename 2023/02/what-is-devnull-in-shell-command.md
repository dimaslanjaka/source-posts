---
title: What is /dev/null in shell command
date: 2023-02-24T16:39:30+07:00
updated: 2023-02-24T16:39:30+07:00
tags: ['bash', 'script']
categories: ['programming', 'bash']
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
