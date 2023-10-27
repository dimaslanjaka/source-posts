---
title: Kill gradle daemon process
description: command to kill gradle daemon processes
date: 2023-10-28T05:16:52+07:00
updated: 2023-10-28T05:16:52+07:00
categories: [programming]
tags: [gradle, cmd, bash, java]
---

## Windows

```cmd
WMIC PROCESS where "Name like 'java%' AND CommandLine like '%GradleDaemon%'" Call Terminate
WMIC PROCESS where "Name like 'java%' AND CommandLine like '%kotlin%'" Call Terminate
```

## Linux

```bash
pkill -f '.*GradleDaemon.*'
```
