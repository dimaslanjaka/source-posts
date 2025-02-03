---
title: "Set Up ADB Wireless Debugging on Android: A Full Guide"
description: Learn how to set up and use ADB wireless debugging on Android devices with this comprehensive guide.
date: 2025-02-03T06:59:01+07:00
updated: 2025-02-03T07:10:42+07:00
keywords:
  - adb
  - Android debugging
  - wireless debugging
  - ADB setup
  - Android development
categories:
  - programming
tags:
  - android
thumbnail: https://i.ytimg.com/vi/YmkAzsbuinA/maxresdefault.jpg
---

Android Wireless Debugging is a feature that allows developers to connect their Android devices to their development environment (e.g., Android Studio) over a Wi-Fi network instead of using a physical USB cable. It provides a more convenient way to debug apps and interact with the device wirelessly.

To use it, both the Android device and the computer running Android Studio need to be connected to the same Wi-Fi network. Developers can enable wireless debugging on the Android device by going into the Developer Options menu, and then they can pair the device with Android Studio for wireless debugging sessions.

This feature is especially useful when testing apps on devices that are not easily accessible, such as when the device is mounted or located far from the computer.

To enable and pair wireless debugging in Android, follow these steps:

### Step 1: Enable Developer Options

1.  **Open the Settings app** on your Android device.
2.  Scroll down and tap **About phone**.
3.  Find and tap **Build number** 7 times to unlock Developer Options. You may need to enter your device's PIN or password.

### Step 2: Enable Wireless Debugging

1.  Once Developer Options are enabled, go back to the **Settings** menu.
2.  Tap **System** > **Developer options**.
3.  Find and enable **Wireless debugging**.

### Step 3: Pair Device for Wireless Debugging

1.  In the **Developer options** menu, scroll down and enable **Wireless debugging**.

2.  Tap **Pair device with pairing code**.

3.  On your computer, open a terminal or command prompt and run the following command to discover your device:

    ```bash
    adb devices
    ```

    This will show the list of connected devices.

4.  In the **Wireless Debugging** section on your Android device, tap **Pair device**. You'll see a pairing code.

5.  On your computer, use the following command to pair the device using the code:

    ```bash
    adb pair <device-ip>:<port> <pairing-code>
    ```

    Replace `<device-ip>`, `<port>`, and `<pairing-code>` with the details from the Android device. Like below screenshoot:

    ![Example interface pairing wireless debugging android](https://i.sstatic.net/3UUaA.png)

6. After pairing, you can run the following command to connect:

    ```bash
    adb connect <device-ip>:<port>
    ```

    Replace `<device-ip>` and `<port>` with the information provided in the pairing step.

Now, your Android device should be connected wirelessly for debugging! You can use `adb` commands just like you would with a wired connection.