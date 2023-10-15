---
author:
  nick: Dimas Lanjaka Kumala Indra
  link: https://www.blogger.com/profile/17555754514989936273
  email: noreply@blogger.com
categories:
  - uncategorized
comments: true
cover: https://imgdb.net/images/3179.png
date: 2017-09-03T15:36:00.003+07:00
description: 'Tutorial Cara symlink file di android SYMLINK file di android
  tutorial.bagaimana cara symlink/symbolic links folder atau file di
  android.Jika Perangkat Android '
lang: en
photos:
  - https://imgdb.net/images/3179.png
tags:
  - android
  - tips & tricks
thumbnail: https://imgdb.net/images/3179.png
title: Tutorial Cara symlink file di android
type: post
updated: 2023-10-16T03:22:55+07:00
---

SYMLINK file di android tutorial.

[![Symlink](https://imgdb.net/images/3179.png 'Symlink')](https://imgdb.net/images/3179.png)

bagaimana cara symlink/symbolic links folder atau file di android.

Jika Perangkat Android Anda sudah root dan memasang terminal, Anda harus bisa memasukkan yang berikut ini:

```bash
ln -sf /source/path/from/file /target/path/to/file
```

Contoh :
— Symlink Folder to Folder (folder baru, tidak bisa overwrite folder yang sudah ada)

```bash
ln -sf /sd-ext/media/audio /system/media/audio
```

— Symlink file to file

```bash
ln -sf /sdcard/folder/file /system/folder/file
```

> Tidak bisa symlink dari system atau data ke sdcard. (Kecual menggunakan directory binder -Baca-> [Tutorial Bind/symlink directory data to sdcard using binder](http://webmanajemen.com/search/?q=directory+binder) )

### Symlink Folder/File Di android Menggunakan Root Explorer (Rootex)

1.  Download Root Explorer ->
2.  Install dan buka root explorer
3.  Buka folder dimana file atau folder yang akan di symlink
4.  Klik tahan file atau folder target -> klik menu disebelah icon icon diatasnya.
5.  Nanti akan muncul box menu -> pilih yang bawah sendiri "link to this file" -Cek Contoh Screenshot->

    [![](https://4.bp.blogspot.com/-qL_df_2RacQ/WKoeooYyN3I/AAAAAAAAFAU/mi7d1QL1JyAMaYaAgZxWUXIf0LmPI8HTgCLcB/s320/Screenshot_2017-02-09-07-23-51-picsay.png?utm=webmanajemen.com)](https://4.bp.blogspot.com/-qL_df_2RacQ/WKoeooYyN3I/AAAAAAAAFAU/mi7d1QL1JyAMaYaAgZxWUXIf0LmPI8HTgCLcB/s1600/Screenshot_2017-02-09-07-23-51-picsay.png?utm=webmanajemen.com)

6.  Setelah di "link to this file" -> Buka folder dimana folder tersebut akan dijadikan tempat symlink file/folder kita (misal: **/system/bin** atau **/system/xbin**) -> klik icon symlink di pojok kiri bawah (diatas icon **X**) -Cek Screenshot ->

    [![](https://3.bp.blogspot.com/-TkMyPvubUss/WKofgR_YJZI/AAAAAAAAFAc/jnmWoy_Lv149VobN4CVyKrmbGKdKVCeCgCLcB/s320/Screenshot_2017-02-09-07-24-10-picsay.png?utm=webmanajemen.com)](https://3.bp.blogspot.com/-TkMyPvubUss/WKofgR_YJZI/AAAAAAAAFAc/jnmWoy_Lv149VobN4CVyKrmbGKdKVCeCgCLcB/s1600/Screenshot_2017-02-09-07-24-10-picsay.png?utm=webmanajemen.com)

7.  Selesai. Symlink berhasil

Sekian artikel tutorial saya tentang bagaimana cara symlink/symbolic links folder atau file di android.
