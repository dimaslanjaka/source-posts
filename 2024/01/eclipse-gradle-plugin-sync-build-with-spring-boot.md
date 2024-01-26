---
title: spring boot with eclipse gradle plugin
description: sync compiled classes from eclipse gradle plugin with spring boot devtools
date: 2024-01-26T10:38:40+07:00
updated: 2024-01-26T11:02:03+07:00
tags: [java, gradle, kotlin]
categories: [programming]
---

Spring Boot DevTools provides a set of tools that can help improve the development experience. One of the features is automatic class reloading, which can be particularly useful during development. Eclipse, on the other hand, has its own set of tools for Java development. To sync compiled classes from the Eclipse Gradle plugin with Spring Boot DevTools, you can follow these general steps:

## Ensure Spring Boot DevTools is Configured

-   Make sure that the `spring-boot-devtools` dependency is included in your Spring Boot project. Add the following dependency to your `build.gradle` file:

```gradle
dependencies {
    implementation 'org.springframework.boot:spring-boot-devtools'
}
```

## Configure gradle

### Configure `eclipse` gradle plugin

```gradle
eclipse {
    classpath {
        defaultOutputDir = file('build/eclipse')
        baseSourceOutputDir = file('build/classes/java')
        file.whenMerged {
            entries.each { entry ->
                if (entry.kind == 'src' && entry.hasProperty('output')) {
                    if (entry.output != null) entry.output = entry.output.replace('bin/', "build/")
                }
            }
        }
    }
}
```

### Configure `JavaCompile` tasks

#### Groovy DSL

```gradle
tasks.withType(JavaCompile).configureEach {
    options.compilerArgs.add("-parameters")
}
```

#### Kotlin DSL

```gradle
tasks.withType<JavaCompile>() {
    options.compilerArgs.add("-parameters")
}
```

### Configure `jar` and `bootJar` tasks

In Gradle, if you want to create a JAR file and exclude duplicate files, you can use the DuplicatesStrategy.EXCLUDE strategy. This strategy excludes duplicates from the final JAR by keeping only the first occurrence of each duplicate file.

```
// Optional: Specify the main class if your JAR is executable
application {
    mainClassName = 'web.MainApplication'
}
// Configure the JAR task
jar {
    duplicatesStrategy = DuplicatesStrategy.EXCLUDE
    manifest {
        attributes "Start-Class": "web.MainApplication"
    }
}
// Configure the spring JAR task
bootJar {
    duplicatesStrategy = DuplicatesStrategy.EXCLUDE
    manifest {
        attributes "Start-Class": "web.MainApplication"
    }
}
```

> Replace 'web.MainApplication' with the actual main class of your application.
>
> Note: The `application` block is optional and is only necessary if your JAR is executable, and you want to specify the main class. If your JAR is not executable, you can omit the `application` block.

## Initialize configuration for Eclipse

When working with Gradle in Eclipse, you can use the `eclipse` plugin to generate Eclipse-specific configuration files. These files help to set up your Eclipse project based on the dependencies and structure defined in your Gradle build script. To initialize the Eclipse configuration for your Gradle project, follow these step:

```bash
gradlew eclipse --no-daemon
```

> `--no-daemon` parameter will kill the java when app exit (CTRL+C or Close terminal)

## Configure Eclipse for Automatic Building

-   In Eclipse, go to `Project` > `Build Automatically` to ensure that automatic building is enabled.-   **Configure Gradle Build in Eclipse:**

-   Ensure that your Eclipse project is properly configured to use the Gradle build system. You can do this by right-clicking on your project in the Eclipse Project Explorer, selecting `Properties`, and then navigating to `Project Facets`. Make sure that the `Gradle` facet is selected.-   **Enable Automatic Project Refresh in Eclipse:**

-   Go to `Window` > `Preferences` > `General` > `Workspace`.
-   Enable the option "Refresh using native hooks or polling".
-   Enable the option "Refresh on access".-   **Configure Spring Boot DevTools in `application.properties`:**

-   In your `src/main/resources/application.properties` (or `application.yml`) file, ensure that DevTools is configured to enable class reloading:

```properties
spring.devtools.restart.enabled=true
```

## Run the Application with DevTools

-   Run your Spring Boot application from Eclipse with the Gradle plugin.
-   Spring Boot DevTools should detect changes in your class files and automatically trigger a restart.

```bash
gradlew bootrun --no-daemon
```

> `--no-daemon` parameter will kill the java when app exit (CTRL+C or Close terminal)

## Conclusion

Now spring boot livereload working even you changes the `java`, `kotlin`, `groovy` or `resources` files.

Keep in mind that the effectiveness of DevTools may depend on various factors, and not all changes can be hot-reloaded. Certain types of changes, such as those to method signatures or certain structural changes, may still require a manual restart.

By following these steps, you should be able to synchronize the compiled classes from the Eclipse Gradle plugin with Spring Boot DevTools during development. If you encounter any issues, consider checking the Spring Boot DevTools documentation and the Eclipse documentation for further troubleshooting.
