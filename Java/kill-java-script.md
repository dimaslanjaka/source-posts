---
author: Dimas Lanjaka
categories:
  - programming
comments: true
date: 2023-08-23T20:32:38+07:00
description: Script java killer Windows CMD create script with name killjava.cmd or killjava.bat killjava.cmd killjava.bat @echo offtaskkill /f /im jqs.exetaskkill /f /im ja
lang: en
tags:
  - java
  - shell
title: Script java killer
type: post
updated: 2023-08-23T20:39:35+07:00
wordcount: 768
---

## Windows CMD

create script with name `killjava.cmd` or `killjava.bat`

```cmd
@echo off
taskkill /f /im jqs.exe
taskkill /f /im javaw.exe
taskkill /f /im java.exe
taskkill /f /im geckodriver.exe
taskkill /f /im chromedriver.exe
taskkill /f /im node.exe
```

## Windows Powershell
create script with name `killjava.ps1`

```powershell
cmd "/C TASKKILL /IM node.exe /F"
```

## Bash

create script with name `kill-process` 

```bash
#!/usr/bin/env bash

# make cygwin bin as priority
export PATH="/usr/local/bin:/usr/bin:/bin:/usr/local/sbin:/usr/sbin:/sbin:$PATH";

(set -o igncr) 2>/dev/null && set -o igncr; # cygwin encoding fix

# absolute path working directory
basecwd=${PWD}
# base script directory
basedir=`dirname "$0"`
# absolute path script directory
SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )

case `uname` in
  *CYGWIN*) basedir=`cygpath -w "$basedir"`;;
esac

ps -W | grep "$1" | awk '{print $1}' | xargs kill -f;
```

create java killer script with name `killjava`

```bash
#!/usr/bin/env bash

# make cygwin bin as priority
export PATH="/usr/local/bin:/usr/bin:/bin:/usr/local/sbin:/usr/sbin:/sbin:$PATH";

(set -o igncr) 2>/dev/null && set -o igncr; # cygwin encoding fix

# absolute path working directory
basecwd=${PWD}
# base script directory
basedir=`dirname "$0"`
# absolute path script directory
SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )

case `uname` in
  *CYGWIN*) basedir=`cygpath -w "$basedir"`;;
esac

#kill -9 $(ps aux | grep '\\snode\\s' | awk '{print $2}')

if ! [ -x "$(command -v killall)" ]; then
  kill-process java
  kill-process javaw
else
  killall java
  killall javaw
fi
```

## Usage
- add parent folder these files into enviroment PATH
- now you can type `killjava` at terminal to kill java processes
