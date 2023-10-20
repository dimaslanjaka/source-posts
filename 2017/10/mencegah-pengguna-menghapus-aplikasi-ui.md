---
author:
  nick: Dimas Lanjaka Kumala Indra
  link: https://www.blogger.com/profile/17555754514989936273
  email: noreply@blogger.com
categories:
  - uncategorized
comments: true
date: 2017-10-16T17:47:00.000Z
description: Ada pengaturan lain di GPE yang mencegah pencopotan pemasangan
  aplikasi yang terpasang. Inilah cara mengaktifkannya .. br /><img
lang: en
tags:
  - tips & tricks
thumbnail: https://4.bp.blogspot.com/-w5jNzr6G-40/UMwiN9YrkUI/AAAAAAAAWtA/rYrCZ839NCU/s1600/Uninstall-Modern-UI-Apps.png
title: Mencegah Pengguna Menghapus Aplikasi UI Modern di Windows 8
type: post
updated: 2023-08-08T07:45:44.000Z
wordcount: 363

---

Ada pengaturan lain di GPE yang mencegah pencopotan pemasangan aplikasi     yang terpasang. Inilah cara mengaktifkannya .. <br><img alt="Uninstall Modern UI Apps" height="249" src="https://4.bp.blogspot.com/-w5jNzr6G-40/UMwiN9YrkUI/AAAAAAAAWtA/rYrCZ839NCU/s1600/Uninstall-Modern-UI-Apps.png" title="Copot pemasangan UI Modern Apps" width="700"><br><h3>    Mencegah Pencabutan Aplikasi UI Modern </h3><ol><li>        Mulai Group Policy Editor dengan mengetikkan <code>gpedit.msc</code> di         kotak Run, dan tekan Enter.     </li><li>        Navigasikan ke User Configuration&gt; Administrative Templates&gt;         Start Menu dan Taskbar.     </li><li>        Dalam daftar kebijakan di sisi kanan cari setting yang disebut "Cegah         pengguna menguninstall aplikasi dari Start", klik dua kali di dalamnya.     </li><li>        Dalam dialog properties, pilih tombol radio berlabel "Enabled", lalu         klik tombol OK.     </li></ol>Itu dia. Sekarang ketika Anda klik kanan pada ubin layar Start, opsi     uninstall tidak akan muncul lagi. <br><center>    </center>Jika Anda tidak dapat segera melihat perubahannya, jalankan perintah     berikut di command prompt: <br><pre>  gpupdate / force </pre>