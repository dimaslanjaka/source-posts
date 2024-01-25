---
title: classpath config for gradle within vscode redhat java extension
description: configuration classpath for gradle in eclipse or vscode redhat java
date: 2024-01-26T02:45:04+07:00
categories: [programming]
tags: [java, kotlin, groovy, vscode]
---

Configuring the classpath for a Gradle project in Visual Studio Code (VSCode) involves specifying the dependencies and build settings. 
Here's a guide for both IDEs:

## Search java source

Searching source configs inside `.classpath` and `*.prefs` files

- Search java source config by substring `path="src/main/java"`
- Replace output attribute to gradle build folder `output="build/classes/java/main"`

result looks like:

```xml
<classpath>
	<classpathentry excluding="**/*.txt" kind="src" output="build/classes/java/main" path="src/main/java">
		<attributes>
			<attribute name="gradle_scope" value="main"/>
			<attribute name="gradle_used_by_scope" value="main,test"/>
		</attributes>
	</classpathentry>
</classpath>
```

- Search annotation config `bin/generated-sources/annotations` and `bin/generated-test-sources/annotations`
- Replace with `build/generated/sources/annotationProcessor/java/main` and `build/generated/sources/annotationProcessor/java/test`

![image](https://github.com/dimaslanjaka/source-posts/assets/12471057/97281fc6-22cb-4347-a5e6-3e9872ab8c76)
![image](https://github.com/dimaslanjaka/source-posts/assets/12471057/ee62a458-68b8-4e9a-9a0d-264d8f4d3d60)


**Configure `settings.json`:**

- In the `.vscode` directory (created by the above task), there should be a `settings.json` file.
- Ensure it has the necessary classpath settings.

Example `settings.json`:
```json
{
 "java.project.referencedLibraries": [
   "build/classes/java/main",
   "build/resources/main",
   "lib/**/*.jar"  // Adjust this based on your project structure
 ]
}
```
