---
author:
  nick: Dimas Lanjaka Kumala Indra
  link: https://www.blogger.com/profile/17555754514989936273
  email: noreply@blogger.com
categories:
  - programming
comments: true
date: 2020-01-30T17:36:00.001Z
description: How to tethering vpn on android ROOT
  Terminal Emulator Tutorial Start your
lang: en
tags:
  - android
  - tips & tricks
  - bash
thumbnail: https://4.bp.blogspot.com/-4_aOS3F7Fg0/XlutU8-PrnI/AAAAAAAAAK0/7KvHUpX78WQw8a-2MYQjo-P1Oq9Mv1zTACLcBGAsYHQ/s1600/imgingest-2117968900021071073.png
title: Tether VPN Android
type: post
updated: 2023-11-18T08:09:34+07:00
---

**How to tethering vpn on android**[![](https://4.bp.blogspot.com/-4_aOS3F7Fg0/XlutU8-PrnI/AAAAAAAAAK0/7KvHUpX78WQw8a-2MYQjo-P1Oq9Mv1zTACLcBGAsYHQ/s1600/imgingest-2117968900021071073.png)](https://4.bp.blogspot.com/-4_aOS3F7Fg0/XlutU8-PrnI/AAAAAAAAAK0/7KvHUpX78WQw8a-2MYQjo-P1Oq9Mv1zTACLcBGAsYHQ/s1600/imgingest-2117968900021071073.png)

> **ROOT** is required

#### Requirement

1.  [Terminal Emulator](https://play.google.com/store/apps/details?id=jackpal.androidterm&hl=in)

#### Tutorial

1.  Start your VPN until connected
2.  Open terminal emulator and input below commands

```bash
su
ip link show
id
iptables -t filter -F FORWARD
iptables -t nat -F POSTROUTING
iptables -t filter -l FORWARD -j ACCEPT
iptables -t nat -I POSTROUTING -j MASQUERADE
ip rule del from 192.168.43.0/24 lookup 61
ip route del default dev tun0 scope link table 61
ip route del 192.168.43.0/24 dev wlan0 scope link table 61
ip route broadcast 255.255.255.255 dev wlan0 scope link table 61
exit
```

4.  Now connect your other devices to your android hotspot, try browsing any websites now :)

### Alternative

install [VPN tethering](https://play.google.com/store/apps/details?id=com.ardadem.vpntethering&hl=en) from [play store](https://play.google.com/store/apps/details?id=com.ardadem.vpntethering&hl=en)