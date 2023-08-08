---
author:
  nick: Kuswati
  link: https://www.blogger.com/profile/09256263851708439294
  email: noreply@blogger.com
categories:
  - programming
  - kotlin
comments: true
cover: https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png
date: 2020-10-24T09:19:00.000+07:00
description: Example getting properties value from settings.gradle.kts
  pluginManagement resolutionStrategy eachPlugin // Work around
  https://github.com/gradle/gradle/issues/1697. if requested.version == null def
  pluginName = requested.id.name.split-
excerpt: Example getting properties value from settings.gradle.kts
  pluginManagement resolutionStrategy eachPlugin // Work around
  https://github.com/gradle/gradle/issues/1697. if requested.version == null def
  pluginName = requested.id.name.split-
id: ae22a991-faa5-4888-8e98-80e28ad9835d
lang: en
photos:
  - https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png
subtitle: Example getting properties value from settings.gradle.kts
  pluginManagement resolutionStrategy eachPlugin // Work around
  https://github.com/gradle/gradle/issues/1697. if requested.version == null def
  pluginName = requested.id.name.split-
tags:
  - kotlin
thumbnail: https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png
title: Example getting properties value from settings.gradle.kts
type: post
updated: 2023-08-08T14:45:12+07:00
uuid: 27d03306-0c58-4888-8a64-b45d83662e64
wordcount: 292
---

```kotlin
pluginManagement {
    resolutionStrategy {
        eachPlugin {
            // Work around https://github.com/gradle/gradle/issues/1697.
            if (requested.version == null) {
                def pluginName = requested.id.name.split('-').collect { it.capitalize() }.join().uncapitalize()
                def versionPropertyName = (requested.id.id == 'org.jetbrains.kotlin.jvm') ?
                        "kotlinPluginVersion" : "${pluginName}PluginVersion"
                logger.info("Checking for plugin version property '$versionPropertyName'.")
                if (gradle.rootProject.hasProperty(versionPropertyName)) {
                    def version = gradle.rootProject.properties[versionPropertyName]
                    logger.info("Setting '${requested.id.id}' plugin version to $version.")
                    useVersion version
                } else {
                    logger.warn("No version specified for plugin '${requested.id.id}' and property " +
                            "'$versionPropertyName' does not exist.")
                }
            }
        }
    }
}
```
