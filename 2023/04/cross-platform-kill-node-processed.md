---
title: How to kill node processed for all operating system
date: 2023-04-08T22:42:58+07:00
updated: 2023-04-08T22:48:58+07:00
tags: ['bash', 'powershell', 'batch', 'cmd']
category: ['programming', 'nodejs']
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
