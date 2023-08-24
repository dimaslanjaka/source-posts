---
title: Common Settings For .bashrc
tags: [bash]
category: [programming]
date: 2023-08-24T07:00:51+07:00
updated: 2023-08-24T07:35:21+07:00
---

```properties
# custom NodeJS executable paths
if [ -d "/media/dimaslanjaka/DATA/bin/node/linux/bin" ] ; then
    export PATH="$PATH:/media/dimaslanjaka/DATA/bin/node/linux/bin"
fi
# search executable files <cwd>/bin
if [ -d "./bin" ] ; then
    export PATH="$PATH:./bin"
fi
# search executable files <cwd>/node_modules/.bin
if [ -d "./node_modules/.bin" ] ; then
    export PATH="$PATH:./node_modules/.bin"
fi
# lampp configuration starts
if [ -d "/opt/lampp" ] ; then
    export PATH="$PATH:/opt/lampp"
fi
if [ -d "/opt/lampp/bin" ] ; then
    export PATH="$PATH:/opt/lampp/bin"
fi
# lampp configuration ends
if [ -d "/media/dimaslanjaka/DATA/bin/composer" ] ; then
    export PATH="$PATH:/media/dimaslanjaka/DATA/bin/composer"
fi
# android development
export ANDROID_HOME="$HOME/Android/Sdk"
export PATH="$ANDROID_HOME/cmdline-tools/bin:$ANDROID_HOME/tools/bin:$ANDROID_HOME/platform-tools:$PATH"
# android, groovy, gradle development
export GRADLE_HOME="$HOME/.gradle"
export GRADLE_USER_HOME="$GRADLE_HOME"
# python development
export PYTHON="/usr/bin/python"
# java, kotlin development
export JAVA_HOME="/media/dimaslanjaka/DATA/bin/java/linux/java-11"
export PATH="$PATH:$JAVA_HOME/bin"
# search executable files ~/.local/bin
export PATH="$PATH:$HOME/.local/bin"
# yarn v1 devekioment
export PATH="$HOME/.yarn/bin:$HOME/.config/yarn/global/node_modules/.bin:$PATH"
```
