---
author:
  nick: Dimas Lanjaka Kumala Indra
  link: https://www.blogger.com/profile/17555754514989936273
  email: noreply@blogger.com
categories:
  - uncategorized
comments: true
cover: https://imgdb.net/images/3212.jpg
date: 2017-10-02T21:42:00.000+07:00
description: "how to fix mdadm.conf defines no arrays on UBUNTU SERVER 16.04
  Setting up initramfs-tools 0.122ubuntu8.3 ...update-initramfs: deferring
  update trigger activatedProcessing triggers for initramfs-tools 0.122ubuntu8.3
  ...update-initramfs: Generating /boot/initrd.img-4.4.0-38-genericW: mdadm: /"
excerpt: "how to fix mdadm.conf defines no arrays on UBUNTU SERVER 16.04 Setting
  up initramfs-tools 0.122ubuntu8.3 ...update-initramfs: deferring update
  trigger activatedProcessing triggers for initramfs-tools 0.122ubuntu8.3
  ...update-initramfs: Generating /boot/initrd.img-4.4.0-38-genericW: mdadm: /"
id: d41d8cd9-f00b-4888-804e-800998ecf842
lang: en
photos:
  - https://imgdb.net/images/3212.jpg
subtitle: "how to fix mdadm.conf defines no arrays on UBUNTU SERVER 16.04
  Setting up initramfs-tools 0.122ubuntu8.3 ...update-initramfs: deferring
  update trigger activatedProcessing triggers for initramfs-tools 0.122ubuntu8.3
  ...update-initramfs: Generating /boot/initrd.img-4.4.0-38-genericW: mdadm: /"
tags:
  - tips & tricks
  - linux/unix
thumbnail: https://imgdb.net/images/3212.jpg
title: how to fix  mdadm.conf defines no arrays on UBUNTU SERVER 16.04
type: post
updated: 2017-10-02T21:42:04+07:00
uuid: 7f916828-d486-4888-8a96-f86034ba51db
wordcount: 191
---

<div class="separator" style="clear: both; text-align: center;"><a href="https://imgdb.net/images/3212.jpg" imageanchor="1" style="margin-left: 1em; margin-right: 1em;" rel="noopener noreferer nofollow"><img border="0" data-original-height="303" data-original-width="485" height="199" src="https://imgdb.net/images/3212.jpg" width="320"></a></div>While performing reports on Ubuntu server 16.04 we see the accompanying cautioning. (Tolerating it is a notice, it is none-the-less irritating).<br><pre style="background: rgb(238, 238, 238); box-sizing: inherit; color: #333333; font-family: &quot;Courier 10 Pitch&quot;, Courier, monospace; font-size: 15px; line-height: 1.6; margin-bottom: 1.6em; max-width: 100%; overflow: auto; padding: 1.6em;"><code style="box-sizing: inherit; font-family: Monaco, Consolas, &quot;Andale Mono&quot;, &quot;DejaVu Sans Mono&quot;, monospace; font-size: 0.9375rem;">Setting up initramfs-tools (0.122ubuntu8.3) ...<br>update-initramfs: deferring update (trigger activated)<br>Processing triggers for initramfs-tools (0.122ubuntu8.3) ...<br>update-initramfs: Generating /boot/initrd.img-4.4.0-38-generic<br>W: mdadm: /etc/mdadm/mdadm.conf defines no arrays.</code></pre>The notice is shown at whatever point there's no Exhibit line in mdadm.conf<br><br>The least complex fix for this notice is to add the accompanying line to the finish of/and so on/mdadm/mdadm.conf <br><pre style="background: rgb(238, 238, 238); box-sizing: inherit; color: #333333; font-family: &quot;Courier 10 Pitch&quot;, Courier, monospace; font-size: 15px; line-height: 1.6; margin-bottom: 1.6em; max-width: 100%; overflow: auto; padding: 1.6em;"><code style="box-sizing: inherit; font-family: Monaco, Consolas, &quot;Andale Mono&quot;, &quot;DejaVu Sans Mono&quot;, monospace; font-size: 0.9375rem;">ARRAY &lt;ignore&gt; devices=/dev/sda</code></pre>