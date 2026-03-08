---
title: How to build tun2socks for android
description: Tutorial building tun2socks.aar for android
date: 2026-03-08T13:52:43Z
tags:
  - android
categories:
  - programming
updated: 2026-03-08T13:53:56Z
---

## Windows

```cmd
go install golang.org/x/mobile/cmd/gomobile@latest
go get golang.org/x/mobile/bind
gomobile init

go install github.com/xjasonlyu/tun2socks/v2@latest

set DEST=%cd%\app\libs
mkdir %DEST%

cd %GOPATH%\pkg\mod\github.com\xjasonlyu\tun2socks\v2*
@rem for me : C:\Users\Dell\go\pkg\mod\github.com\xjasonlyu\tun2socks\v2@v2.6.0

@rem change your android SDK path
set ANDROID_HOME=D:\ProgramData\Android
set ANDROID_SDK_ROOT=D:\ProgramData\Android
set ANDROID_NDK_HOME=D:\ProgramData\Android\ndk\25.2.9519653
gomobile bind -o %DEST%\tun2socks.aar -target android ./engine
@rem specify android api: gomobile bind -o %DEST%\tun2socks.aar -target android -androidapi 21 ./engine

dir %DEST%
```

## Linux

```bash
$ go install golang.org/x/mobile/cmd/gomobile@latest
$ go get golang.org/x/mobile/bind
$ gomobile init
$ go install github.com/xjasonlyu/tun2socks/v2@latest
$ export DEST=$(pwd)/app/libs
$ mkdir -p DEST
$ cd $GOPATH/src/github.com/xjasonlyu/tun2socks
$ gomobile bind -o $DEST/tun2socks.aar -target android $GOPATH/src/github.com/xjasonlyu/tun2socks/engine
$ ls $DEST # you should see tun2socks.aar and tun2socks-sources.jar
```

## Apply to gradle project

Add the following to your `settings.gradle`:

```diff
 dependencyResolutionManagement {
     repositoriesMode.set(RepositoriesMode.FAIL_ON_PROJECT_REPOS)
     repositories {
         google()
         mavenCentral()
+        flatDir {
+            dirs 'app/libs'
+        }
     }
 }
```

Add the dependency to your `app/build.gradle`:

```diff
 dependencies {
+    implementation (name:'tun2socks', ext:'aar')

     implementation 'androidx.core:core-ktx:1.7.0'
     // omitted...
}
```

Execute "_Sync Project with Gradle Files_" action in Android Studio. Then the `engine` package would be added to your build path:

```java
import engine.Engine;
```

Note that it seemed necessary to set empty values even for unused options.
