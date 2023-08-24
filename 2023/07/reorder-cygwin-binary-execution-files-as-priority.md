---
title: How to reorder cygwin binary execution files as first priority
date: 2023-08-24T18:00:39+07:00
updated: 2023-08-24T18:00:39+07:00
tags: [bash]
category: [programming]
---

## Script header bash to reorder cygwin binary execution files as priority
```bash
#!/usr/bin/env bash

# install variant debug and start activity

(set -o igncr) 2>/dev/null && set -o igncr; # cygwin encoding fix

# absolute path working directory
basecwd=${PWD}
# base script directory
basedir=`dirname "$0"`
# absolute path script directory
SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )

case `uname` in
  *CYGWIN*)
    basedir=`cygpath -w "$basedir"`
    # make cygwin bin as priority
    export PATH="/usr/local/bin:/usr/bin:/bin:/usr/local/sbin:/usr/sbin:/sbin:$PATH"
    ;;
esac

# YOUR CODES
```

## Script header bash to acquire sudo previlege

```bash
#!/usr/bin/env bash

# install variant debug and start activity

(set -o igncr) 2>/dev/null && set -o igncr; # cygwin encoding fix

# absolute path working directory
basecwd=${PWD}
# base script directory
basedir=`dirname "$0"`
# absolute path script directory
SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )

case `uname` in
  *CYGWIN*)
    basedir=`cygpath -w "$basedir"`
    # make cygwin bin as priority
    export PATH="/usr/local/bin:/usr/bin:/bin:/usr/local/sbin:/usr/sbin:/sbin:$PATH"
    ;;
esac

SUDO_CMD=""
if [ "$USER" != "root" ]; then
  SUDO_CMD="sudo "
fi

$SUDO_CMD echo "sudo granted"

# YOUR CODES
```
