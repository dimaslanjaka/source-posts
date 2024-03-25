---
title: Android Activity lifecycle
tags: [kotlin, java, android]
categories: [programming]
date: 2024-03-25T19:23:10+07:00
---

In the Android Activity lifecycle, `onCreate()` is triggered before `onStart()`. Here's a brief overview of the sequence of method calls when an Activity is created:

1.  `onCreate()`: This method is called when the activity is first created. It is where you typically perform one-time initialization such as setting up the user interface, binding data to lists, or initializing variables.

2.  `onStart()`: This method is called after `onCreate()` (if the activity is being started for the first time) or when the activity is being brought back to the foreground from a stopped state. It is where the activity becomes visible to the user, but it may not yet be in the foreground and interactive.

So, `onCreate()` is always triggered before `onStart()` in the Android Activity lifecycle.
