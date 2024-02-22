---
title: How to exclude anoying tags in intellij idea or android studio
description: In IntelliJ IDEA and Android Studio, you can exclude specific log tags in the Logcat view
date: 2024-02-22T14:12:51+07:00
thumbnail: https://github.com/dimaslanjaka/source-posts/assets/12471057/5241507b-bdf2-48b4-8712-5d1dc0761690
updated: 2024-02-22T15:07:53+07:00
---

![image](https://github.com/dimaslanjaka/source-posts/assets/12471057/5241507b-bdf2-48b4-8712-5d1dc0761690)

In IntelliJ IDEA and Android Studio, you can exclude specific log tags in the Logcat view. Here's how you can do it:

- Open Android Studio or Intellij IDEA.
- Go to Tools > Android > Logcat.
- In Logcat, seek for options related to "Ignore Tags" or "Ignored Log Tags".
- Add a list of tags that you want to ignore, by separating it using spaces or commas.

```text
HardwareCodecCapability AudioCapabilities OpenGLRenderer ViewRoot ForceDarkHelper Looper PlayCore AudioTrack SurfaceUtils cr_ChildProcessConn FA ActivityThread DynamiteModule Perf DynamitePackage EgretLoader cr_LibraryLoader BpBinder chatty FeatureParser MediaCodec ExtendedACodec MapperHal OMXClient VideoCapabilities Gralloc3 MetadataUtil AdrenoGLES chromium DpmTcmClient WebViewFactory cr_CachingUmaRecorder AdrenoUtils cr_media AudioManager cr_SpareChildConn Chrome_InProcGp Choreographer AdInternalSettings Keep-Alive Vary pool-15-thread- WifiMulticast WifiHW MtpService PushClient EGL_emulation OpenGl* InputReader art dalvik Environment DataRouter AlarmManager WindowManager PhoneStatusBar ActivityManager ResourceType PackageManager gralloc Gnss NetRec ResolverController GAv4 AsyncOperation AppOps WificondControl aofp wifi netmgr ctxmgr BestClock FirebaseInstanceId android.os.Debug memtrack netd system_server StrictMode bluetooth NetworkMonitor BroadcastQueue ConnextivityService WakeLock HttpClientWrapper RAWR Tenor BgTask WifiService BluetoothAdapter UpdateStatsService AppIdleHistory Connectivity VelvetNetworkClient WorkerManager ActivityTaskManager UsageStatsService ocess.gservice DropBoxManagerService EventLogChimeraService PContextMetricsRunner MemoryController MultiDex AutofillManager libMEOW
```

## Setting result looks like below screenshoot

![image](https://github.com/dimaslanjaka/source-posts/assets/12471057/1061e3cb-b57f-44de-96b8-78aab3cebeba)

## Additional for GeckoView

Put below pattern to logcat filter column 

```text
-tag~:GeckoConsole|SurfaceComposerClient|BufferQueueConsumer|GeckoSession|GeckoThread|Web\sContent|GeckoEventDispatcher|BLASTBufferQueue|GeckoNetworkManager|linker
```

![image](https://github.com/dimaslanjaka/source-posts/assets/12471057/78a27118-5eae-43e1-abba-0a6a3ad81270)

## Conclusion

Done, now all common anoying tags should not be displayed on logcat logs. Looks like below screenshot, no more annoying tags shown :)

![image](https://github.com/dimaslanjaka/source-posts/assets/12471057/6a72637d-6ee7-410d-bed5-a6d666663201)


