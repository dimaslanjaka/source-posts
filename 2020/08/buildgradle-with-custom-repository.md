---
author:
  nick: Kuswati
  link: https://www.blogger.com/profile/09256263851708439294
  email: noreply@blogger.com
categories:
  - programming
date: 2020-08-03T11:02:00.005Z
description: Fix missing dependencies from your gradle project android, maven,
  etc with this build.gradle. <br>insert into
lang: en
tags:
  - java
  - gradle
  - kotlin
  - android
thumbnail: https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png
title: build.gradle with custom repository
type: post
updated: 2023-11-18T16:01:37+07:00
---

Fix missing dependencies from your gradle project (android, maven, etc) with this build.gradle.  
insert into YOUR\_PROJECT\_GRADLE/build.gradle

```gradle
// Top-level build file where you can add configuration options common to all sub-projects/modules.

buildscript {
    repositories {
        maven { url "https://maven.google.com" }
        jcenter()
        maven { url "https://jitpack.io" }
        maven { url "https://dl.bintray.com/android/android-tools" }
        maven { url "https://plugins.gradle.org/m2/" }
        maven { url "https://maven.fabric.io/public" }
        mavenCentral()
        mavenLocal()
    }
    dependencies {
        classpath 'com.android.tools.build:gradle:3.2.1'
    }
}

allprojects {
    repositories {
        maven { url "https://maven.google.com" }
        jcenter()
        maven { url "https://jitpack.io" }
        maven { url "https://dl.bintray.com/android/android-tools" }
        maven { url "https://plugins.gradle.org/m2/" }
        maven { url "https://maven.fabric.io/public" }
        mavenCentral()
        mavenLocal()
    }
}
```

##### Kotlin

YOUR\_PROJECT\_GRADLE/build.gradle.kts

  
```kotlin
buildscript {
    repositories {
        maven ("https://maven.google.com")
        jcenter()
        maven ("https://jitpack.io")
        maven ("https://dl.bintray.com/android/android-tools")
        maven ("https://plugins.gradle.org/m2/")
        maven ("https://maven.fabric.io/public")
        mavenCentral()
        mavenLocal()
    }
}
allprojects {
    repositories {
        maven ("https://maven.google.com")
        jcenter()
        maven ("https://jitpack.io")
        maven ("https://dl.bintray.com/android/android-tools")
        maven ("https://plugins.gradle.org/m2/")
        maven ("https://maven.fabric.io/public")
        mavenCentral()
        mavenLocal()
    }
}
```
