---
author:
  nick: Kus Wati
  link: https://www.blogger.com/profile/06399286952380672824
  email: noreply@blogger.com
categories:
  - programming
  - java
comments: true
cover: https://res.cloudinary.com/dimaslanjaka/image/fetch/https://techcrunch.com/wp-content/uploads/2017/02/android-studio-logo.png?w=730&crop=1
date: 2020-02-25T05:25:00.001+07:00
description: "Increase Performance Android Studio Solver 1 You can speed up your
  Eclipse or Android Studio work, you just follow these: Open your single
  projectclean your project after running your app in emulator every timeuse
  mobile/external device instead of emulatordont close emulator after using o"
excerpt: "Increase Performance Android Studio Solver 1 You can speed up your
  Eclipse or Android Studio work, you just follow these: Open your single
  projectclean your project after running your app in emulator every timeuse
  mobile/external device instead of emulatordont close emulator after using o"
id: cc0bd265-9236-4888-8f21-e86e8522b5c5
lang: en
permalink: /2020/02/increase-performance-android-studio.html
photos:
  - https://res.cloudinary.com/dimaslanjaka/image/fetch/https://techcrunch.com/wp-content/uploads/2017/02/android-studio-logo.png?w=730&crop=1
subtitle: "Increase Performance Android Studio Solver 1 You can speed up your
  Eclipse or Android Studio work, you just follow these: Open your single
  projectclean your project after running your app in emulator every timeuse
  mobile/external device instead of emulatordont close emulator after using o"
tags:
  - android
  - tips & tricks
  - java
thumbnail: https://res.cloudinary.com/dimaslanjaka/image/fetch/https://techcrunch.com/wp-content/uploads/2017/02/android-studio-logo.png?w=730&crop=1
title: Increase Performance Android Studio
type: post
updated: 2023-08-23T18:40:32+07:00
wordcount: 3996
---

![Thumbnail](https://res.cloudinary.com/dimaslanjaka/image/fetch/https://techcrunch.com/wp-content/uploads/2017/02/android-studio-logo.png?w=730&crop=1)

### Solver 1

You can speed up your Eclipse or Android Studio work, you just follow these:

*   Open your single project
*   clean your project after running your app in emulator every time
*   use mobile/external device instead of emulator
*   don't close emulator after using once, use same emulator for running app each time
*   **Disable VCS** by using File->Settings->Plugins and disable the following things :
    
    1.  CVS Integration
    2.  Git Integration (Git & Github)
    3.  Google Cloud Tools for Android Studio
    4.  Subversion Integration
    5.  Firebase (Optional)

I am also using Android Studio with 4-GB installed main memory but following these statements really boost my Android Studio performance.

### Solver 2

### Android Studio (up to 1.5GB)

The IDE's JVM is configured to have a max heap size. You can see this in the lower-right corner of the main interface:

[![Android Studio showing 725M max heap size](https://i.stack.imgur.com/DItAL.png)](https://i.stack.imgur.com/DItAL.png)

You can reduce this by editing the [memory-related settings](http://tools.android.com/tech-docs/configuration#TOC-Increasing-IDE-Memory) in [the `.vmoptions` file](http://tools.android.com/tech-docs/configuration#sites-page-title-header) . For example, I changed my max heap size to 512MB:

    -Xmx512m

Unfortunately, I found that lowering this value increases the frequency of Android Studio temporarily freezing, perhaps to do its garbage collection.

### Gradle (up to 1.5GB)

Gradle can also use a lot of RAM after developing for a while. Windows just shows it as `Java(TM) Platform SE Binary`:

[![Windows 8.1 Task Manager showing "Java(TM Platform SE binary" using 1,460.5 MB of memory](https://i.stack.imgur.com/FTN8f.png)](https://i.stack.imgur.com/FTN8f.png)

You can fix this by changing the Gradle JVM options. You can do this on a per-user basis by editing [`gradle.properties`](https://docs.gradle.org/current/userguide/build_environment.html#sec:gradle_properties_and_system_properties) :

1.  Open the `gradle.properties` file, creating it if it doesn't exist:
    *   Windows: `%USERPROFILE%\.gradle\gradle.properties`
    *   Linux/Mac: `~/.gradle/gradle.properties`
2.  Update the `org.gradle.jvmargs` property, creating it if necessary. I set mine to this:
    
```properties
org.gradle.jvmargs=-Xmx256m -XX:MaxPermSize=256m -XX:+HeapDumpOnOutOfMemoryError -Dfile.encoding=UTF-8
```

#### For java 11 or higher
jvmarg for `-XX:MaxPermSize` java 11 has changed to `-XX:MaxMetaspaceSize`
```properties
org.gradle.jvmargs=-Xmx256m -XX:MaxMetaspaceSize=256m -XX:+HeapDumpOnOutOfMemoryError -Dfile.encoding=UTF-8
```

> If you got error **java.lang.OutOfMemoryError: Java heap space**, try below jvmargs

```properties
org.gradle.jvmargs=-Xmx2048m -XX:MaxMetaspaceSize=512m -XX:+HeapDumpOnOutOfMemoryError -Dfile.encoding=UTF-8
```
    

I haven't noticed any difference in build performance for my small project with the max heap size set to 256MB (`-Xmx256m`).

Note that you might need to restart Android Studio so the _old_ Gradle process is killed; otherwise you might end up with both running at the same time.

### Emulator

Regarding the emulator taking up a lot of your RAM, your screenshot shows it taking about 800MB. You can choose how much RAM to allocate to the emulator:

1.  Edit the AVD
2.  Press _Show Advanced Settings_
3.  Reduce the value of _RAM_

[![Android Virtual Device RAM configuration](https://i.stack.imgur.com/jEskn.png)](https://i.stack.imgur.com/jEskn.png)

### Definition

  

**Android Studio has recently published an official guide for low-memory machines: [Guide](https://developer.android.com/studio/intro/studio-config.html#low_memory)**

If you are running Android Studio on a machine with less than the recommended specifications (see System Requirements), you can customize the IDE to improve performance on your machine, as follows:

*   **Reduce the maximum heap size available to Android Studio** : Reduce the maximum heap size for Android Studio to 512Mb.
    
*   **Update Gradle and the Android plugin for Gradle** : Update to the latest versions of Gradle and the Android plugin for Gradle to ensure you are taking advantage of the latest improvements for performance.
    
*   **Enable Power Save Mode** : Enabling Power Save Mode turns off a number of memory- and battery-intensive background operations, including error highlighting and on-the-fly inspections, autopopup code completion, and automatic incremental background compilation. To turn on Power Save Mode, click File > Power Save Mode.
    
*   **Disable unnecessary lint checks** : To change which lint checks Android Studio runs on your code, proceed as follows: Click File > Settings (on a Mac, Android Studio > Preferences) to open the Settings dialog.In the left pane, expand the Editor section and click Inspections. Click the checkboxes to select or deselect lint checks as appropriate for your project. Click Apply or OK to save your changes.
    
*   **Debug on a physical device** : Debugging on an emulator uses more memory than debugging on a physical device, so you can improve overall performance for Android Studio by debugging on a physical device.
    
*   **Include only necessary Google Play Services as dependencies** : Including Google Play Services as dependencies in your project increases the amount of memory necessary. Only include necessary dependencies to improve memory usage and performance. For more information, see Add Google Play Services to Your Project.
    
*   **Reduce the maximum heap size available for DEX file compilation** : Set the javaMaxHeapSize for DEX file compilation to 200m. For more information, see [Improve build times by configuring DEX resources](https://developer.android.com/studio/run/index.html#configure-dexoptions) .
    
*   **Do not enable parallel compilation** : Android Studio can compile independent modules in parallel, but if you have a low-memory system you should not turn on this feature. To check this setting, proceed as follows: Click File > Settings (on a Mac, Android Studio > Preferences) to open the Settings dialog. In the left pane, expand Build, Execution, Deployment and then click Compiler. Ensure that the Compile independent modules in parallel option is unchecked.If you have made a change, click Apply or OK for your change to take effect.
    
*   **Turn on Offline Mode for Gradle** : If you have limited bandwitch, turn on Offline Mode to prevent Gradle from attempting to download missing dependencies during your build. When Offline Mode is on, Gradle will issue a build failure if you are missing any dependencies, instead of attempting to download them. To turn on Offline Mode, proceed as follows:
    
    *   Click File > Settings (on a Mac, Android Studio > Preferences) to open the Settings dialog.
        
    *   In the left pane, expand Build, Execution, Deployment and then click Gradle.
        
    *   Under Global Gradle settings, check the Offline work checkbox.
        
    *   Click Apply or OK for your changes to take effect.
        

#### Another tweak

1.  in Android Studio settings > compile enable checkbox Compile independent modules in parallel.
2.  Under Help > Edit Custom VM Options

```properties
-Xms1024m  
-Xmx4096m # <------ increase this to most of your RAM  
-XX:MaxPermSize=1024m  
-XX:ReservedCodeCacheSize=440m  
-XX:+UseCompressedOops  
-XX:-HeapDumpOnOutOfMemoryError  
-Dfile.encoding=UTF-8  
```

when you caught error like below:

![image](https://github.com/dimaslanjaka/source-posts/assets/12471057/301a5028-ec04-4427-a448-850c94c5038f)

You can find the file you're looking for under **C:\Users\YourUserName\AppData\Roaming\Google\AndroidStudio<version.code>**. _Delete or Modify_ **studios64.vmoptions** or **studios64.exe.vmoptions** and you should be able to launch Android Studio. If you're still trying to optimize your workspace you could try modify **vmoptions** file using **notepad**:

```properties
-Xms1024m
-Xmx4096m
-XX:MaxPermSize=1024m
-XX:ReservedCodeCacheSize=256m
-ea
-Dsun.io.useCanonCaches=false
-Djava.net.preferIPv4Stack=true
-Djna.nosys=true
-Djna.boot.library.path=

-Djna.debug_load=true
-Djna.debug_load.jna=true
-Djsse.enableSNIExtension=false
-XX:+UseCodeCacheFlushing
-XX:+UseConcMarkSweepGC
-XX:SoftRefLRUPolicyMSPerMB=50
-Didea.platform.prefix=AndroidStudio
-Didea.paths.selector=AndroidStudio
```

sources: https://developer.android.com/studio/intro/studio-config https://riptutorial.com/android-studio/example/11146/customize-the-vm-option

4.  Android studio 3.5 makes easier to change same of those values.

Preferences > Appearance & Behavior > System Settings > Memory Settings
