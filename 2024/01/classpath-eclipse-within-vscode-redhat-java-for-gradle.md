---
title: classpath config for gradle within vscode redhat java extension
description: configuration classpath for gradle in eclipse or vscode redhat java
date: 2024-01-26T02:45:04+07:00
updated: 2024-01-26T03:23:59+07:00
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
<classpathentry excluding="**/*.txt" output="build/classes/java/main" kind="src" path="src/main/java">
	<attributes>
		<attribute name="gradle_scope" value="main"/>
		<attribute name="gradle_used_by_scope" value="main,test"/>
	</attributes>
</classpathentry>
<classpathentry output="build/classes/java/test" kind="src" path="src/test/java">
	<attributes>
		<attribute name="gradle_scope" value="test"/>
		<attribute name="gradle_used_by_scope" value="test"/>
		<attribute name="test" value="true"/>
	</attributes>
</classpathentry>
```

- Search annotation config `bin/generated-sources/annotations` and `bin/generated-test-sources/annotations`
- Replace with `build/generated/sources/annotationProcessor/java/main` and `build/generated/sources/annotationProcessor/java/test`

![image](https://github.com/dimaslanjaka/source-posts/assets/12471057/97281fc6-22cb-4347-a5e6-3e9872ab8c76)
![image](https://github.com/dimaslanjaka/source-posts/assets/12471057/ee62a458-68b8-4e9a-9a0d-264d8f4d3d60)

- Verify all output directory are configured by searching subtring `bin/` for `.classpath` and `*.prefs` files

![image](https://github.com/dimaslanjaka/source-posts/assets/12471057/3e264d78-f046-47d0-85f0-ffceedd0bbe1)


**Configure `settings.json`:**

- In the `.vscode` directory (created by the above task), there should be a `settings.json` file.
- Ensure it has the necessary classpath settings.

Example `settings.json`:
```jsonc
{
 "java.project.referencedLibraries": [
   "build/classes/java/main",
   "build/resources/main",
   "lib/**/*.jar"  // Adjust this based on your project structure
 ]
}
```

## Conclusion
Now you don't have to wait long when opening a Java project in VScode with the Redhat Java plugin, because all build output is synchronized from Gradle and Eclipse JDT which are used by the Redhat Java extension.

And this trick can change the output folder from Redhat Java Extension to the Gradle build folder.

You can checkout our repository of [gradle+eclipse in vscode - sample project](https://github.com/dimaslanjaka/Java/tree/master/eclipse-gradle)
