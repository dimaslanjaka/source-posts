---
author:
  nick: Dimas Lanjaka Kumala Indra
  link: https://www.blogger.com/profile/17555754514989936273
  email: noreply@blogger.com
categories:
  - programming
comments: true
date: 2017-09-04T16:07:00.000+07:00
description: "Cara menggunakan Directory Bind Android Binding directories
  directory binder data on android. -> Tutorial cara menggunakan Directory bind
  di android Steps: Bind"
lang: id
tags:
  - android
  - tips & tricks
thumbnail: https://imgdb.net/images/3180.jpg
title: Cara menggunakan Directory Bind Android
type: post
updated: 2023-10-20T06:47:01+07:00
---

Binding directories (directory binder) data on android. -> Tutorial cara menggunakan Directory bind di android

[![](https://imgdb.net/images/3180.jpg)](https://imgdb.net/images/3180.jpg)

**Steps: (Binding folder data game)**

1.  Install Aplikasi directory bind -> [Download Disini](https://m.apkpure.com/id/root-directory-bind/com.vanpit.android.directorybind/download?from=details)
2.  Pergi ke pengaturan aplikasi
    Ubah jalur data default (Default Data Path) menjadi

    Code:

    ```plaintext
    /mnt/extSdCard/
    ```

    Ubah jalur target default (Target Path Default) menjadi


    Code:

    ```plaintext
    /sdcard/
    ```

3.  Pilih "add new entry" dan tekan tombol menu, Anda akan mendapatkan opsi yang disebut "data transfer assistant". Pilih itu.
4.  Sekarang pilih folder "data" sumber untuk dipindahkan.
5.  Setelah file dipindahkan ke lokasi baru pilih opsi "bind checked" di menu aplikasi.
6.  Selesai


Sekarang direktori sumber untuk game ini berada di "mnt/sdcard/android/obb"

direktori di atas terikat ke (binded to) "mnt/extSdCard/Directorybind/obb"

**Tips:**


*   pilih "bind on boot" dalam preferensi untuk menjaga mengikat setelah reboot
*   Anda dapat membuat cadangan pengaturan pengikatan Anda saat ini, secara default file tersebut disimpan dalam "/sdcard" sebagai file csv. 
*   hapus centang "handles usb connection" dalam preferensi jika Anda tidak ingin mengganggu pengikatan Anda saat menghubungkan / mencabut usb.

Upcoming Terms:1.  Directory Binder
2.  bind directory
3.  Symlink Game Data Android