---
author:
  nick: Dimas Lanjaka Kumala Indra
  link: https://www.blogger.com/profile/17555754514989936273
  email: noreply@blogger.com
categories:
  - uncategorized
comments: true
cover: https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png
date: 2019-07-28T06:31:00.002+07:00
description: Memperbaiki low wifi signal kali linux git clone
  https://github.com/lwfinger/rtlwifi_new.gitcd rtlwifi_newsudo makesudo make
  installsudo
lang: en
photos:
  - https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png
tags:
  - tips & tricks
  - linux/unix
thumbnail: https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png
title: FIX Low signal wifi kali linux
type: post
updated: 2023-08-08T14:45:30+07:00
wordcount: 280
---

<div dir="ltr" style="text-align: left;" trbidi="on">Memperbaiki <b>low wifi signal kali linux</b><br><b>&nbsp;</b> <br><pre>git clone https://github.com/lwfinger/rtlwifi_new.git<br>cd rtlwifi_new<br>sudo make<br>sudo make install<br>sudo modprobe -rv rtl8723be<br>sudo modprobe -v rtl8723be ant_sel=2<br>echo "options rtl8723be ant_sel=2" | sudo tee /etc/modprobe.d/rtl8723be-ant.conf<br>sudo modprobe -r rtl8723de<br>sudo modprobe rtl8723de ant_sel=2<br>echo "options rtl8723de ant_sel=2" | sudo tee /etc/modprobe.d/rtl8723de-ant.conf<br></pre><br><ol style="text-align: left;"><li>Low signal wifi linux fix</li><li>fix low signal linux</li><li>fix kali linux wifi signal</li><li>fix kali wifi</li><li>install RTL wifi driver linux</li><li>HP laptop linux wifi driver</li><li>DELL laptop wifi driver linux</li></ol></div>