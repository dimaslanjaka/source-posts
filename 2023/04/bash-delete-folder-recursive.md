---
author: Dimas Lanjaka
categories:
  - programming
  - bash
comments: true
date: 2023-04-13T16:17:00+07:00
description: bash script delete folder recursively script bash to recursive
  delete folder /usr/bin/env bash make cygwin bin as priorityexport
  PATH=/usr/local/bin:/usr/bin:/bin:/usr/local/sbin:/usr/sbin:/sbin:PATH;set -o
  igncr 2>/dev/null set -o igncr; cygwin encoding fixbasedir=dirname 0
excerpt: bash script delete folder recursively script bash to recursive delete
  folder /usr/bin/env bash make cygwin bin as priorityexport
  PATH=/usr/local/bin:/usr/bin:/bin:/usr/local/sbin:/usr/sbin:/sbin:PATH;set -o
  igncr 2>/dev/null set -o igncr; cygwin encoding fixbasedir=dirname 0
id: dbdd2514-dfe9-4888-8823-88eaeee52b77
lang: en
photos: []
subtitle: bash script delete folder recursively script bash to recursive delete
  folder /usr/bin/env bash make cygwin bin as priorityexport
  PATH=/usr/local/bin:/usr/bin:/bin:/usr/local/sbin:/usr/sbin:/sbin:PATH;set -o
  igncr 2>/dev/null set -o igncr; cygwin encoding fixbasedir=dirname 0
tags:
  - bash
  - script
title: bash script delete folder recursively
type: post
updated: 2023-04-13T16:17:00+07:00
wordcount: 416
---

## script bash to recursive delete folder

```bash
#!/usr/bin/env bash

# make cygwin bin as priority
export PATH="/usr/local/bin:/usr/bin:/bin:/usr/local/sbin:/usr/sbin:/sbin:$PATH";

(set -o igncr) 2>/dev/null && set -o igncr; # cygwin encoding fix

basedir=`dirname "$0"`

case `uname` in
  *CYGWIN*) basedir=`cygpath -w "$basedir"`;;
esac

if [ -z "$1" ]; then
    echo "You need to provide a file or folder path"
    exit
fi

if [ ! -d "$1" ]; then
  echo "$1 not found"
  exit
fi

vowels=( a i u e o A I U E O )
for letter in {{a..z},{A..Z}}; do
    for vowel in "${vowels[@]}"; do
      toBeDeleted=( "$1/.${letter}*" "$1/@${letter}*" "$1/${letter}*" "$1/@${letter}${vowel}*" "$1/.${letter}${vowel}*" "$1/${letter}${vowel}*" )
      for fpath in "${toBeDeleted[@]}"; do
        echo "deleting ${fpath}"
        rm -rf $fpath &
      done
    done
done

wait

echo "cleaning $1"
rm -rf $1 &

wait
```
