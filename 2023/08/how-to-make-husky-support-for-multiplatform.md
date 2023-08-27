---
title: How to make husky support for multiple platform
description: husky support for linux, husky support for windows, husky support for cygwin, husky support for WSL
date: 2023-08-27T21:09:03+07:00
updated: 2023-08-27T21:19:52+07:00
thumbnail: https://miro.medium.com/v2/resize:fit:800/1*S3u42EBG_BMesapjXHy06w.jpeg
tags: [javascript, bash]
categories: [programming]
---

## husky support for cygwin
```bash
#!/bin/sh

(set -o igncr) 2>/dev/null && set -o igncr; # cygwin encoding fix

# absolute path working directory
basecwd=${PWD}
# base script directory
basedir=`dirname "$0"`

# determine current platform shell is Cygwin bash
case `uname` in
  *CYGWIN*)
    basedir=`cygpath -w "$basedir"`
    # make cygwin bin as priority
    export PATH="/usr/local/bin:/usr/bin:/bin:/usr/local/sbin:/usr/sbin:/sbin:$PATH"
    # add ../node_modules/.bin to PATH enviroment
    if [ -d "${basedir}/../node_modules/.bin" ]; then
      export PATH="$PATH:${basedir}/../node_modules/.bin"
    fi
    ;;
esac

# initialize husky
. "$(dirname "$0")/_/husky.sh"

## YOUR CODE HERE
```

## husky support for windows
```bash
#!/bin/sh

# export ../node_modules/.bin
if [ -d "${basedir}/../node_modules/.bin" ]; then
  export PATH="$PATH:${basedir}/../node_modules/.bin"
fi

# initialize husky
. "$(dirname "$0")/_/husky.sh"

## YOUR CODE HERE
```

## husky support for WSL 2

```bash
# determine current platform shell is WSL bash
IS_WSL="false"
if [ -x "$(command -v wslpath)" ]; then
  if [ `uname` = "Linux" ] && type wslpath &>/dev/null ; then
    IS_WSL="true"
  fi
fi
# declare functions
no_node_dir() {
  # if this didn't work, then everything else below will fail
  echo "Could not determine Node.js install directory" >&2
  exit 1
}

# determine node path
## determine when this package installed in global
NODE_EXE="$basedir/node.exe"
if ! [ -x "$NODE_EXE" ]; then
  NODE_EXE="$basedir/node"
fi
## fallback to default node
if ! [ -x "$NODE_EXE" ]; then
  NODE_EXE=node
fi

# determine npx path
## this path is passed to node.exe, so it needs to match whatever
## kind of paths Node.js thinks it's using, typically win32 paths.
CLI_BASEDIR="$("$NODE_EXE" -p 'require("path").dirname(process.execPath)' 2> /dev/null)"
if [ $? -ne 0 ]; then
  # this fails under WSL 1 so add an additional message. we also suppress stderr above
  # because the actual error raised is not helpful. in WSL 1 node.exe cannot handle
  # output redirection properly. See https://github.com/microsoft/WSL/issues/2370
  if [ "$IS_WSL" == "true" ]; then
    echo "WSL 1 is not supported. Please upgrade to WSL 2 or above." >&2
  fi
  no_node_dir
fi
NPM_CLI_JS="$CLI_BASEDIR/node_modules/npm/bin/npm-cli.js"
## check is linux symlink
## $NPM_CLI_JS on windows found but not in linux
## global node_modules located in <node bin>/../lib
if ! [ -f "$NPM_CLI_JS" ]; then
  NPM_CLI_JS="$CLI_BASEDIR/../lib/node_modules/npm/bin/npm-cli.js"
fi
NPX_CLI_JS="$CLI_BASEDIR/node_modules/npm/bin/npx-cli.js"
if ! [ -f "$NPX_CLI_JS" ]; then
  NPX_CLI_JS="$CLI_BASEDIR/../lib/node_modules/npm/bin/npx-cli.js"
fi
## get node home
NODE_HOME=`"$NODE_EXE" "$NPM_CLI_JS" prefix -g`
## throw when not found (node not installed correctly)
if [ $? -ne 0 ]; then
  no_node_dir
fi

## a path that will fail -f test on any posix bash
NPX_WSL_PATH="/.."

## WSL can run Windows binaries, so we have to give it the win32 path
## however, WSL bash tests against posix paths, so we need to construct that
## to know if npm is installed globally.
if [ "$IS_WSL" == "true" ]; then
  NPX_WSL_PATH=`wslpath "$NPM_PREFIX_NPX_CLI_JS"`
fi
## overriding $NPX_CLI_JS on WSL
if [ -f "$NPM_PREFIX_NPX_CLI_JS" ] || [ -f "$NPX_WSL_PATH" ]; then
  NPX_CLI_JS="$NPM_PREFIX_NPX_CLI_JS"
fi

## YOUR CODES HERE
```

## husky support for multiplatform (ALL IN ONE)

full support for multiplatform example run `npx lint-staged`

```bash
#!/bin/sh

(set -o igncr) 2>/dev/null && set -o igncr; # cygwin encoding fix

# absolute path working directory
basecwd=${PWD}
# base script directory
basedir=`dirname "$0"`
# absolute path script directory
SCRIPT_DIR=$(cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd)

# determine current platform shell is Cygwin bash
case `uname` in
  *CYGWIN*)
    basedir=`cygpath -w "$basedir"`
    # make cygwin bin as priority
    export PATH="/usr/local/bin:/usr/bin:/bin:/usr/local/sbin:/usr/sbin:/sbin:$PATH"
    ;;
esac

# add ../node_modules/.bin to PATH enviroment
if [ -d "${basedir}/../node_modules/.bin" ]; then
  export PATH="$PATH:${basedir}/../node_modules/.bin"
fi

# determine current platform shell is WSL bash
IS_WSL="false"
if [ -x "$(command -v wslpath)" ]; then
  if [ `uname` = "Linux" ] && type wslpath &>/dev/null ; then
    IS_WSL="true"
  fi
fi

# initialize husky
. "$(dirname "$0")/_/husky.sh"

# declare functions
no_node_dir() {
  # if this didn't work, then everything else below will fail
  echo "Could not determine Node.js install directory" >&2
  exit 1
}

# determine node path
## determine when this package installed in global
NODE_EXE="$basedir/node.exe"
if ! [ -x "$NODE_EXE" ]; then
  NODE_EXE="$basedir/node"
fi
## fallback to default node
if ! [ -x "$NODE_EXE" ]; then
  NODE_EXE=node
fi

# determine npx path
## this path is passed to node.exe, so it needs to match whatever
## kind of paths Node.js thinks it's using, typically win32 paths.
CLI_BASEDIR="$("$NODE_EXE" -p 'require("path").dirname(process.execPath)' 2> /dev/null)"
if [ $? -ne 0 ]; then
  # this fails under WSL 1 so add an additional message. we also suppress stderr above
  # because the actual error raised is not helpful. in WSL 1 node.exe cannot handle
  # output redirection properly. See https://github.com/microsoft/WSL/issues/2370
  if [ "$IS_WSL" == "true" ]; then
    echo "WSL 1 is not supported. Please upgrade to WSL 2 or above." >&2
  fi
  no_node_dir
fi
NPM_CLI_JS="$CLI_BASEDIR/node_modules/npm/bin/npm-cli.js"
## check is linux symlink
## $NPM_CLI_JS on windows found but not in linux
## global node_modules located in <node bin>/../lib
if ! [ -f "$NPM_CLI_JS" ]; then
  NPM_CLI_JS="$CLI_BASEDIR/../lib/node_modules/npm/bin/npm-cli.js"
fi
NPX_CLI_JS="$CLI_BASEDIR/node_modules/npm/bin/npx-cli.js"
if ! [ -f "$NPX_CLI_JS" ]; then
  NPX_CLI_JS="$CLI_BASEDIR/../lib/node_modules/npm/bin/npx-cli.js"
fi
## get node home
NODE_HOME=`"$NODE_EXE" "$NPM_CLI_JS" prefix -g`
## throw when not found (node not installed correctly)
if [ $? -ne 0 ]; then
  no_node_dir
fi

# fix WSL
NODE_HOME_NPX_CLI_JS="$NODE_HOME/node_modules/npm/bin/npx-cli.js"

## a path that will fail -f test on any posix bash
NPX_WSL_PATH="/.."

## WSL can run Windows binaries, so we have to give it the win32 path
## however, WSL bash tests against posix paths, so we need to construct that
## to know if npm is installed globally.
if [ "$IS_WSL" == "true" ]; then
  NPX_WSL_PATH=`wslpath "$NPM_PREFIX_NPX_CLI_JS"`
fi
## overriding $NPX_CLI_JS on WSL
if [ -f "$NPM_PREFIX_NPX_CLI_JS" ] || [ -f "$NPX_WSL_PATH" ]; then
  NPX_CLI_JS="$NPM_PREFIX_NPX_CLI_JS"
fi

## SAMPLE CODES
### npx lint-staged
"$NODE_EXE" "$NPX_CLI_JS" lint-staged
```