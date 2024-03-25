---
title: Android Activity lifecycle
tags: [kotlin, java, android]
categories: [programming]
date: 2024-03-25T19:23:10+07:00
---

## is `onStart` or `onCreate` first will be triggered in android activity?

In the Android Activity lifecycle, `onCreate()` is triggered before `onStart()`. Here's a brief overview of the sequence of method calls when an Activity is created:

1.  `onCreate()`: This method is called when the activity is first created. It is where you typically perform one-time initialization such as setting up the user interface, binding data to lists, or initializing variables.

2.  `onStart()`: This method is called after `onCreate()` (if the activity is being started for the first time) or when the activity is being brought back to the foreground from a stopped state. It is where the activity becomes visible to the user, but it may not yet be in the foreground and interactive.

So, `onCreate()` is always triggered before `onStart()` in the Android Activity lifecycle.

## Basic ifecycle of android activity

Here's the basic lifecycle of an Android Activity:

1.  **onCreate()**: This method is called when the activity is first created. Here, you typically perform initialization of the activity, such as setting up the user interface with `setContentView()` and initializing variables.

2.  **onStart()**: This method is called when the activity becomes visible to the user. It prepares the activity to enter the foreground and become interactive.

3.  **onResume()**: This method is called when the activity is about to start interacting with the user. It signals that the activity is now in the foreground and ready to receive user input.

4.  **onPause()**: This method is called when the activity is going into the background but is still partially visible to the user. It indicates that the activity is no longer in the foreground and may be paused or stopped.

5.  **onStop()**: This method is called when the activity is no longer visible to the user. It typically happens when the activity is being covered by another activity or when the user navigates away from it.

6.  **onDestroy()**: This method is called when the activity is being destroyed. It is the final callback that the activity receives before it is removed from memory. Here, you release any resources or unregister any listeners that were associated with the activity.

Additionally, there are two other methods that are important for handling configuration changes:

-   **onRestart()**: This method is called when the activity is being restarted after being stopped. It is called after `onStop()` and before `onStart()`.

-   **onSaveInstanceState()** and **onRestoreInstanceState()**: These methods are called when the activity is being temporarily destroyed and recreated due to a configuration change (such as screen rotation). They allow you to save and restore the state of your activity's UI and data.

Understanding these lifecycle methods is crucial for properly managing the state and behavior of your Android activities.

## Graph of android lifecycle

```
            +-------------------+
            |                   |
            |      onCreate()   |
            |                   |
            +---------+---------+
                      |
                      v
            +-------------------+
            |                   |
            |      onStart()    |
            |                   |
            +---------+---------+
                      |
                      v
            +-------------------+
            |                   |
            |      onResume()    |
            |                   |
            +---------+---------+
                      |
                      v
     +-------------------------+
     |                         |
     | User interacts with the |
     |       Activity          |
     |                         |
     +------------+------------+
                  |
                  v
            +-------------------+
            |                   |
            |      onPause()    |
            |                   |
            +---------+---------+
                      |
                      v
            +-------------------+
            |                   |
            |      onStop()     |
            |                   |
            +---------+---------+
                      |
                      v
            +-------------------+
            |                   |
            |      onDestroy()  |
            |                   |
            +-------------------+
```
