---
title: What does google-services.json really do?
description: Android - What does google-services.json really do?
date: 2023-10-30T15:19:17+07:00
updated: 2023-10-30T15:19:17+07:00
categories: [programming]
tags: [android, json]
---

**What is this file really for:**

**google-services.json** contains developer credentials and configuration settings, which is needed to verify while connecting with GoogleApiClient. Though your service is working fine with your test device as it is detecting your developer account but after releasing your app in public, it will not work without the json file. So don't delete it.

**The Official Documentation says:**

The application builds a GoogleApiClient, specifying which scopes and APIs the application will access. When the GoogleApiClient connects, the user is signed in.

See the [how it works](https://developers.google.com/identity/sign-in/android/start) section
