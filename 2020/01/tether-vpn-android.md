---
author:
  nick: Dimas Lanjaka Kumala Indra
  link: https://www.blogger.com/profile/17555754514989936273
  email: noreply@blogger.com
categories:
  - uncategorized
comments: true
date: 2020-01-30T17:36:00.001Z
description: How to tethering vpn on android ROOT is required Requirement
  Terminal Emulator Tutorial Start your
lang: en
tags:
  - share
  - android
  - tips & tricks
thumbnail: https://4.bp.blogspot.com/-4_aOS3F7Fg0/XlutU8-PrnI/AAAAAAAAAK0/7KvHUpX78WQw8a-2MYQjo-P1Oq9Mv1zTACLcBGAsYHQ/s1600/imgingest-2117968900021071073.png
title: Tether VPN Android
type: post
updated: 2023-08-08T07:45:14.000Z
wordcount: 534

---

<div dir="ltr" style="text-align: left;" trbidi="on">  <b>How to tethering vpn on android</b><a href="https://4.bp.blogspot.com/-4_aOS3F7Fg0/XlutU8-PrnI/AAAAAAAAAK0/7KvHUpX78WQw8a-2MYQjo-P1Oq9Mv1zTACLcBGAsYHQ/s1600/imgingest-2117968900021071073.png" imageanchor="1" rel="noopener noreferer nofollow"><img border="0" src="https://4.bp.blogspot.com/-4_aOS3F7Fg0/XlutU8-PrnI/AAAAAAAAAK0/7KvHUpX78WQw8a-2MYQjo-P1Oq9Mv1zTACLcBGAsYHQ/s1600/imgingest-2117968900021071073.png" data-original-width="300" data-original-height="300"></a>  <br>  <blockquote>    <b>ROOT</b> is required</blockquote>  <h4 style="text-align: left;">    Requirement</h4>  <div style="text-align: left;">  </div>  <ol style="text-align: left;">    <li><a href="https://play.google.com/store/apps/details?id=jackpal.androidterm&amp;hl=in" rel="noopener noreferer nofollow" target="_blank">Terminal Emulator</a></li>  </ol>  <h4 style="text-align: left;">    Tutorial</h4>  <div style="text-align: left;">  </div>  <ol style="text-align: left;">    <li>Start your VPN until connected</li>    <li>Open terminal emulator</li>   <blockquote>    Type:<br>    <pre><br>su<br>ip link show<br>id<br>iptables -t filter -F FORWARD<br>iptables -t nat -F POSTROUTING<br>iptables -t filter -l FORWARD -j ACCEPT<br>iptables -t nat -I POSTROUTING -j MASQUERADE<br>ip rule del from 192.168.43.0/24 lookup 61<br>ip route del default dev tun0 scope link table 61<br>ip route del 192.168.43.0/24 dev wlan0 scope link table 61<br>ip route broadcast 255.255.255.255 dev wlan0 scope link table 61<br>exit<br></pre>  </blockquote>  <li>Now connect your other devices to your android hotspot, try browsing any websites now :)</li></ol><h3>Alternative</h3><p>  install <a href="https://play.google.com/store/apps/details?id=com.ardadem.vpntethering&amp;hl=en" target="_blank" rel="noopener noreferer nofollow">VPN tethering</a> from <a href="https://play.google.com/store/apps/details?id=com.ardadem.vpntethering&amp;hl=en" target="_blank" rel="noopener noreferer nofollow">play store</a></p></div>