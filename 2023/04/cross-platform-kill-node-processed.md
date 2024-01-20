---
author: Dimas Lanjaka
categories:
  - programming
comments: true
date: 2023-04-08T22:42:58+07:00
description: How to kill node processed for all operating system Bash bash script to kill all node processed in linux distro, windows distro @echo offtaskkill /f /im node.ex
lang: en
tags:
  - powershell
  - shell
title: How to kill node processed for all operating system
type: post
updated: 2023-09-02T18:35:10.116Z
wordcount: 193
---

## Bash
> bash script to kill all node processed in linux distro

```bash
#!/usr/bin/env bash
#kill -9 $(ps aux | grep '\\snode\\s' | awk '{print $2}')
killall node
```

## Batch
> batch script to kill all node processed in windows distro

```cmd
@echo off
taskkill /f /im node.exe
```

## Powershell
> powershell script to kill all node processed in windows distro

```powershell
cmd "/C TASKKILL /IM node.exe /F"
```
