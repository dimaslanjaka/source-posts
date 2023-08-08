---
author: Dimas Lanjaka
categories:
  - programming
  - nodejs
comments: true
date: 2023-04-08T22:42:58+07:00
description: How to kill node processed for all operating system Bash bash
  script to kill all node processed in linux distro /usr/bin/env bashkill -9 ps
  aux grep \\snode\\s awk print 2killall node Batch batch script to kill all
  node processed in windows distro @echo offtaskkill /f /im node.ex
excerpt: How to kill node processed for all operating system Bash bash script to
  kill all node processed in linux distro /usr/bin/env bashkill -9 ps aux grep
  \\snode\\s awk print 2killall node Batch batch script to kill all node
  processed in windows distro @echo offtaskkill /f /im node.ex
id: c006c053-bdd9-4888-8e3f-e86a5be5d4d4
lang: en
photos: []
subtitle: How to kill node processed for all operating system Bash bash script
  to kill all node processed in linux distro /usr/bin/env bashkill -9 ps aux
  grep \\snode\\s awk print 2killall node Batch batch script to kill all node
  processed in windows distro @echo offtaskkill /f /im node.ex
tags:
  - bash
  - powershell
  - batch
  - cmd
title: How to kill node processed for all operating system
type: post
updated: 2023-04-08T22:48:58+07:00
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
