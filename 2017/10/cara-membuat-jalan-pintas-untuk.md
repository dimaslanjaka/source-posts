---
author:
  nick: Dimas Lanjaka Kumala Indra
  link: https://www.blogger.com/profile/17555754514989936273
  email: noreply@blogger.com
categories:
  - uncategorized
comments: true
date: 2017-10-14T17:42:00.000Z
description: Anda perlu menentukan nama dan ikon untuk pintasan aplikasi Modern
  karena nilai tersebut tidak diambil langsung dari folder
lang: en
tags:
  - tips & tricks
thumbnail: https://3.bp.blogspot.com/-7ZnAq5qCUqU/UnUovHpfPYI/AAAAAAAAaQE/Wn5m_IyQ7MA/s1600/Modern-Apps-Shortcut-1.png
title: Cara Membuat Jalan pintas untuk Aplikasi UI Modern di Windows 8.1
type: post
updated: 2023-08-08T07:45:44.000Z
wordcount: 590

---

cara untuk membuat shortcut untuk aplikasi Modern yang diinstal dengan     menggunakan nilai AppUserModelID (Application User Model ID). <br><h3>    Tangga </h3>Buka kotak dialog Run, ketik <code>shell:AppsFolder</code> , dan tekan     Enter. Ini akan membuka folder 'Applications' yang berisi daftar semua     aplikasi desktop dan modern yang terinstal di Windows. <br>Dalam folder tekan F10 , pergi ke item menu 'View', dan klik 'Choose     details'. Pada dialog berikutnya, centang kotak 'AppUserModelId'. <br><center>    </center>Sekarang ubah tampilan folder menjadi "Details". Anda sekarang harus bisa     melihat kolom bernama 'AppUserModelId' - inilah yang akan kita gunakan     untuk membuat shortcut. <br>Sekarang gulir ke aplikasi yang ingin Anda buat pintasannya, dan catat     nilai 'AppUserModelId'. Sebagai contoh, di sini saya akan membuat shortcut     untuk aplikasi Dropbox.     <br>    <img alt="Modern Apps list" height="368" src="https://3.bp.blogspot.com/-7ZnAq5qCUqU/UnUovHpfPYI/AAAAAAAAaQE/Wn5m_IyQ7MA/s1600/Modern-Apps-Shortcut-1.png" title="Daftar aplikasi modern" width="680"><br>Nilai aplikasi Dropbox adalah <em>C27EB4BA.Dropbox_xbfy0k16fey96! App</em>    - catat nilai untuk aplikasi Anda sendiri. <br><strong>Kiat:</strong>    Anda tidak dapat menyalin nilainya dari sini. Cara yang lebih mudah adalah     mengetik beberapa karakter pertama dari nilai AppUserModelId aplikasi yang     Anda pilih di bilah alamat. Istirahat disarankan secara otomatis.Salin dari     sana. <br>Sekarang pergi ke desktop Anda, dan buat shortcut dengan yang berikut ini     sebagai target: <code>explorer.exe shell:AppsFolder\</code> . Tambahkan     nilai apl. Sebagai contoh: <br><pre>  shell explorer.exe: AppsFolder \ C27EB4BA.Dropbox_xbfy0k16fey96! App </pre><div><img alt="Modern Apps Shortcut" height="466" src="https://4.bp.blogspot.com/-4sRFIXP8zH0/UnUou1rPWGI/AAAAAAAAaQA/CAgqSQIAlvw/s1600/Modern-Apps-Shortcut-2.png" title="Pintasan Aplikasi Modern" width="628">    <br>Anda perlu menentukan nama dan ikon untuk pintasan aplikasi Modern         karena nilai tersebut tidak diambil langsung dari folder Applications.     <br>Itu dia! Anda dapat membuat banyak jalan pintas yang Anda inginkan         mengikuti metode yang sama, pin ke taskbar Anda, atau menambahkannya ke         folder Startup Anda.     </div>