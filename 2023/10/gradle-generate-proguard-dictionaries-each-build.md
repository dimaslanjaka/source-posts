---
title: Gradle script to generate proguard dictionaries each build
description: Gradle script to generate proguard dictionaries each build
date: 2023-10-25T21:32:33+07:00
updated: 2023-10-30T15:19:17+07:00
thumbnail: https://learn.microsoft.com/id-id/xamarin/android/deploy-test/release-prep/proguard-images/01-xa-chain.png
category: [programming]
tags: [android, gradle, groovy, proguard]
---

## Gradle task to generate proguard dictonary

### Always overwrite existing generated dictionary

```gradle
def dictDest = new File('build/builddict.txt')

tasks.register('genDict') {
    outputs.file(dictDest)
    doLast {
        if (dictDest.exists()) return
        def r = new Random()
        println(r)
        def begin = r.nextInt(1000) + 0x0100
        def end = begin + 0x40000
        println("end: " + end)
        def chars = (begin..end)
                .findAll { Character.isValidCodePoint(it) && Character.isJavaIdentifierPart(it) }
                .collect { String.valueOf(Character.toChars(it)) }
        println("chars: " + chars)
        int max = chars.size()
        println(max)
        def start = []
        def dict = []
        for (int i = 0; i < max; i++) {
            char c = chars.get(i).charAt(0)
            if (Character.isJavaIdentifierStart(c)) {
                start << String.valueOf(c)
            }
        }
        println(start.size())
        def f = outputs.files.getSingleFile()
        f.getParentFile().mkdirs()
        f.withWriter("UTF-8") {
            it.write(start.join(System.lineSeparator()))
            it.write()
        }
    }
}
```

### Prevent overwriting existing generated dictionary

```gradle
// tell others this file cannot be replaced (final)
final def dictDest = project.file("build/builddict.txt")

tasks.register("genDict") {
    // prevent duplicate
    println "$dictDest exists ${dictDest.exists()}"
    if (!dictDest.exists()) {
        outputs.file(dictDest)
        doLast {
            def r = new Random()
            println(r)
            def begin = r.nextInt(1000) + 0x0100
            def end = begin + 0x40000
            println("end: " + end)
            def chars = (begin..end)
                    .findAll { Character.isValidCodePoint(it) && Character.isJavaIdentifierPart(it) }
                    .collect { String.valueOf(Character.toChars(it)) }
            println("chars: " + chars)
            int max = chars.size()
            println(max)
            def start = []
            def dict = []
            for (int i = 0; i < max; i++) {
                char c = chars.get(i).charAt(0)
                if (Character.isJavaIdentifierStart(c)) {
                    start << String.valueOf(c)
                }
            }
            println(start.size())
            def f = outputs.files.getSingleFile()
            f.getParentFile().mkdirs()
            f.withWriter("UTF-8") {
                it.write(start.join(System.lineSeparator()))
                it.write()
            }
        }
    }
}
```

run manual with `./gradlew genDict` or `bash ./gradlew genDict`

but you can automated generator dictionary using `afterEvaluate`

```gradle
afterEvaluate {
    // each variant depends on `genDict` task
    android.applicationVariants.all { variant ->
        if (variant.name.endsWith('Release'))
            variant.javaCompileProvider.configure {
                dependsOn 'genDict'
            }
    }
}
```

in new API Androig Gradle Plugin v8
```gradle
afterEvaluate {
    // each variant depends on `genDict` task
    android.applicationVariants.configureEach { variant ->
        if (variant.name.endsWith('Release'))
            variant.javaCompileProvider.configure {
                dependsOn 'genDict'
            }
    }
}
```

in your proguard rules dont forget put

```proguard
-obfuscationdictionary build/dict.txt
-classobfuscationdictionary build/dict.txt
-packageobfuscationdictionary build/dict.txt
```

## My working scripts

put in `app/build.gradle`

```gradle
def dictDest = new File('.', 'build/builddict.txt')

tasks.register('genDict') {
    outputs.file(dictDest)
    doLast {
        // prevent rewrite
        if (dictDest.exists()) return
        def r = new Random()
        println(r)
        def begin = r.nextInt(1000) + 0x0100
        def end = begin + 0x40000
        println("end: " + end)
        def chars = (begin..end)
                .findAll { Character.isValidCodePoint(it) && Character.isJavaIdentifierPart(it) }
                .collect { String.valueOf(Character.toChars(it)) }
        println("chars: " + chars)
        int max = chars.size()
        println(max)
        def start = []
        def dict = []
        for (int i = 0; i < max; i++) {
            char c = chars.get(i).charAt(0)
            if (Character.isJavaIdentifierStart(c)) {
                start << String.valueOf(c)
            }
        }
        println(start.size())
        def f = outputs.files.getSingleFile()
        f.getParentFile().mkdirs()
        f.withWriter("UTF-8") {
            it.write(start.join(System.lineSeparator()))
            it.write()
        }
    }
}

// generate proguard dictionary on preBuild task (debug variant included)
//tasks.named("preBuild") {
//    dependsOn(tasks.named("genDict"))
//}

afterEvaluate {
    // each variant depends on `genDict` task
    android.applicationVariants.configureEach { variant ->
        // apply online variant with `release` substring
        if (variant.name.toLowerCase().contains('release'))
            variant.javaCompileProvider.configure {
                dependsOn 'genDict'
            }
    }
}
```