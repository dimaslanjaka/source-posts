---
title: How to use kotlin-bom?
description: To use the Kotlin BOM, you typically follow these steps
date: 2024-02-26
permalink: 2024/02/how-to-use-kotlin-bom.html
---

In **Kotlin**, a bill of materials is a more centralized way to manage dependencies. This allows you to specify a set of dependencies and their versions in one place, making it easier to manage and update dependencies across your projects.
 
To use **Kotlin BOM**, you typically follow these steps: 

## Add the BOM Dependency to Your Build File:

You need to add the BOM dependency to your build file. If you're using Gradle, you can add it like this:

```gradle
implementation platform("org.jetbrains.kotlin:kotlin-bom:1.5.31")
```

 Make sure to replace `1.5.31` with the **kotlin version** you want to use.

##  Use the BOM Dependency in Your Dependencies Section:

After adding the BOM dependency, you can declare dependencies without specifying their versions. The BOM will manage the versions for you. For example:

```gradle
implementation "org.jetbrains.kotlin:kotlin-stdlib"
implementation "org.jetbrains.kotlin:kotlin-reflect"
```

You don't need to specify the version for `kotlin-stdlib` and `kotlin-reflect` as it will be inherited from the BOM.

##  Sync Your Project:

After making changes to your build file, sync your project with your build tool (e.g., run `./gradlew` or click "Sync Project with Gradle Files" in Android Studio).

Here's an example of how your build.gradle (Kotlin DSL) file might look like:


```gradle
plugins {
    kotlin("jvm") version "1.5.31"
}

repositories {
    mavenCentral()
}

dependencies {
    implementation platform("org.jetbrains.kotlin:kotlin-bom:1.5.31")
    implementation "org.jetbrains.kotlin:kotlin-stdlib"
    implementation "org.jetbrains.kotlin:kotlin-reflect"
}
```

This way, you only need to update the version of the Kotlin BOM in one place, and it will automatically update the versions of all Kotlin dependencies in your project.

Keep in mind that the syntax might vary slightly depending on your build tool (Gradle, Maven, etc.) and the Kotlin plugin version you are using. Always refer to the official documentation for the most accurate and up-to-date information.

## Force kotlin using same version

Gradle's **ResolutionStrategy** allows you to force all subprojects to use the same Kotlin version.
The following is an example of using the **ResolutionStrategy** block in the root project's. Here the implementation of both `build.gradle.kts` and `build.gradle` file:

**Ensure you set the right kotlin version**.

For example i will set the kotlin version in variable

#### `build.gradle` file: 

```gradle
ext {
    kotlin_version = '1.5.31'
}
```

```groovy
// force kotlin same version
configurations.configureEach {
    resolutionStrategy.eachDependency { details ->
        if (requested.group == "org.jetbrains.kotlin") {
            useVersion "$kotlin_version"
            because "To avoid different kotlin version"
        }
    }
}
```

#### `build.gradle.kts` file:

```kotlin
ext {
    val kotlinVersion = "1.5.31"
}
```

```kotlin
configure<DependencyResolutionManagement> {
    resolutionStrategy {
        eachDependency { details ->
            if (details.requested.group == "org.jetbrains.kotlin") {
                details.useVersion("$kotlin_version")
            }
        }
    }
}
```
