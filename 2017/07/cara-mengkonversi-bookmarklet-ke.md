---
author:
  nick: Unknown
  link: https://www.blogger.com/profile/18262459107951035499
  email: noreply@blogger.com
categories:
  - uncategorized
comments: true
date: 2017-07-13T00:34:00.000Z
description: Cara Mengkonversi Bookmarklet ke Ekstensi Chrome Bookmarklets, atau
  kemampuan untuk mengeksekusi kode JavaScript Anda sendiri pada halaman
  manapun, memungkinkan
lang: en
tags:
  - tips & tricks
thumbnail: https://res.cloudinary.com/dimaslanjaka/image/fetch/http://i.imgur.com/QLNHFRe.png
title: Cara Mengkonversi Bookmarklet ke Ekstensi Chrome
type: post
updated: 2023-08-08T07:45:53.000Z
wordcount: 1296

---

[![](https://res.cloudinary.com/dimaslanjaka/image/fetch/http://i.imgur.com/QLNHFRe.png)](https://res.cloudinary.com/dimaslanjaka/image/fetch/http://i.imgur.com/QLNHFRe.png)

  
  

Bookmarklets, atau kemampuan untuk mengeksekusi kode JavaScript Anda sendiri pada halaman manapun, memungkinkan Anda menyesuaikan pengalaman penjelajahan Anda dengan berbagai cara. Beberapa waktu yang lalu saya menulis beberapa kode JS yang akan menghapus semua konten dari halaman manapun dan hanya menampilkan gambar dengan fungsi zoom on click. Ini bekerja dengan baik sebagai bookmarklet tapi saya ingin melihat betapa mudahnya mengemasnya ke Ekstensi Chrome.Saya melakukan ini untuk bersenang-senang tapi ada beberapa alasan kuat seperti akses ke sumber daya lintas domain, akses ke permintaan jaringan, dan kemampuan untuk berbagi dengan orang lain melalui Toko Chrome.

Berikut adalah beberapa langkah sederhana yang menunjukkan cara mengubah kode JavaScript menjadi Ekstensi Chrome  
  
Persyaratannya sederhana: tekan ikon ekstensi yang mengeksekusi kode JS pada halaman. Jadi, saya memerlukan sebuah ikon, file JavaScript dengan kode, dan file manifest yang menentukan cara mengeksekusi file JS tersebut saat ekstensi diklik dan izin apa untuk memberikannya. Karena saya hanya mengubah halaman web di tab yang aktif, saya hanya memerlukan izin "activeTab". Saya melakukan tindakan browser dan mengeksekusi file JS sebagai latar belakang. Inilah manifestonya.

[Manifest.json](https://github.com/techslides/OnlyImages/blob/master/manifest.json)

Karena ekstensi didefinisikan sebagai tindakan browser, file JS saya perlu membungkus kode dengan benar di sekitar acara itu. Jadi, kami memberi tahu Chrome untuk menambahkan pendengar untuk acara klik ( **chrome.browserAction.onClicked.addListener**) dan saat itu terjadi, kami meminta Chrome untuk menjalankan beberapa kode JavaScript di tab ( **chrome.tabs.executeScript** ). Berikut adalah file JS lengkap:

[Background.js](https://github.com/techslides/OnlyImages/blob/master/background.js)

Dan inilah ekstensi pada GitHub yang dapat Anda unduh dan tambahkan sendiri dengan membuka ekstensi Chrome (chrome: // extensions /), mengaktifkan mode pengembang, dan memilih folder yang diunduh dengan tombol "load unpacked extension".

**[OnlyImages Ekstensi Chrome](https://translate.googleusercontent.com/translate_c?depth=3&nv=1&rurl=translate.google.com&sl=auto&sp=nmt4&tl=id&u=https://github.com/techslides/OnlyImages&usg=ALkJrhig0F5IiTddtPIW0A9YOkGgW3Lfew)**

Luar:  
[Ekstensi](http://translate.googleusercontent.com/translate_c?depth=3&nv=1&rurl=translate.google.com&sl=auto&sp=nmt4&tl=id&u=http://extensionizr.com/&usg=ALkJrhgLlY_a97E2s-ZmQiMlsJNhlkwt1g)  
[Mengembangkan Ekstensi Google Chrome](https://translate.googleusercontent.com/translate_c?depth=3&nv=1&rurl=translate.google.com&sl=auto&sp=nmt4&tl=id&u=https://github.com/tutsplus/developing-google-chrome-extensions&usg=ALkJrhiBmugBpWbTyfS_SYWue2-mKknA4A)  
[Aplikasi Chrome di GitHub](https://translate.googleusercontent.com/translate_c?depth=3&nv=1&rurl=translate.google.com&sl=auto&sp=nmt4&tl=id&u=https://github.com/GoogleChrome/chrome-app-samples&usg=ALkJrhgVTgW-hyHC_JHBq5KB9lhMhP6zog)  
[Proyek boilerplate untuk ekstensi Chrome DevTools](https://translate.googleusercontent.com/translate_c?depth=3&nv=1&rurl=translate.google.com&sl=auto&sp=nmt4&tl=id&u=https://github.com/GoogleChrome/devtools-extension-boilerplate&usg=ALkJrhgNJ2iO5-Nke64wJEhrVcJo4X8OLA)