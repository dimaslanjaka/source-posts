---
title: Script java killer
date: 2023-08-23T20:32:38+07:00
updated: 2023-08-23T20:32:38+07:00
category: [programming]
tags: [bash, cmd, java]
---

## Windows

```cmd
@echo off
taskkill /f /im jqs.exe
taskkill /f /im javaw.exe
taskkill /f /im java.exe
taskkill /f /im geckodriver.exe
taskkill /f /im chromedriver.exe
taskkill /f /im node.exe
```

## Bash

create `kill-process` script

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

create java killer script

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
