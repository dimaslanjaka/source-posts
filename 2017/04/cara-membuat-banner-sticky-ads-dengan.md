---
author:
  nick: Unknown
  link: ""
  email: noreply@blogger.com
categories:
  - programming
comments: true
date: 2017-04-27T17:29:00.000Z
description: Cara membuat banner sticky ads dengan tombol close di blogger
  Bagaimana cara membuat iklan banner melayang di footer page blogger dengan
  tombol close </body> <s
excerpt: Cara membuat banner sticky ads dengan tombol close di blogger Bagaimana
  cara membuat iklan banner melayang di footer page blogger dengan tombol close
  </body> <s
id: 9172691a-f5c9-4888-84ee-166b5505f987
lang: en
tags:
  - blogger
  - html
thumbnail: https://s2.loli.net/2023/10/20/lNuF92VkgZoQPmT.jpg
title: Cara membuat banner sticky ads dengan tombol close di blogger
type: post
updated: 2023-10-09T07:07:47.000Z
---

<h3><img height="320" src="https://s2.loli.net/2023/10/20/lNuF92VkgZoQPmT.jpg" width="318"></h3><h3>Bagaimana cara membuat iklan banner melayang di footer page blogger dengan tombol close</h3>Berikut tutorialnya:<br>1. Buka dashboard blogger -&gt; template -&gt; edit HTML -&gt; lalu masukkan kode dibawah ini diatas <mark>&lt;/body&gt;</mark><br><pre>&lt;script type='text/javascript'&gt;<br>$(document).ready(function() {$(&amp;#39;img#closed&amp;#39;).click(function(){$(&amp;#39;#bl_banner&amp;#39;).hide(90);});});<br>&lt;/script&gt;<br>&lt;div id='fixedban' style='width:100%;margin:auto;text-align:center;float:none;overflow:hidden;display:scroll;position:fixed;bottom:0;z-index:999;-webkit-transform:translateZ(0);'&gt;<br>&lt;div&gt;&lt;a id='close-fixedban' onclick='document.getElementById(&amp;apos;fixedban&amp;apos;).style.display = &amp;apos;none&amp;apos;;' style='cursor:pointer;'&gt;&lt;img alt='close' src='http://1.bp.blogspot.com/-_A83iDM6JYc/VhtxROLILrI/AAAAAAAADK4/aM4ikIA6aqI/s1600/btn_close.gif' title='close button' style='vertical-align:middle;'/&gt;&lt;/a&gt;&lt;/div&gt;<br>&lt;div style='text-align:center;display:block;<mark>max-width:728px</mark>;height:auto;overflow:hidden;margin:auto'&gt;<br>&lt;a href='#' title='Banner iklan'&gt;&lt;img style='max-width:100%;height:auto;vertical-align:middle;' alt='Banner iklan' src='<mark>https://3.bp.blogspot.com/-9h86Fhn6zZU/VhtxRDTM4qI/AAAAAAAADK0/fQN3Z00kWwk/s1600/arlina-tea.png</mark>'/&gt;&lt;/a&gt;<br>&lt;/div&gt;<br>&lt;/div&gt;</pre><br><blockquote>Ganti <kbd>lebar</kbd> iklan (<kbd>max-width:728px</kbd>) dengan lebar yang anda inginkan.</blockquote><blockquote>Ganti <kbd>source</kbd> gambar banner (<kbd>https://3.bp.blogspot.com/-9h86Fhn6zZU/VhtxRDTM4qI/AAAAAAAADK0/fQN3Z00kWwk/s1600/arlina-tea.png</kbd>) dengan iklan banner anda</blockquote><br><b>DEMO:</b><br><style>.embed-container { position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; } .embed-container iframe, .embed-container object, .embed-container embed { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }</style><br><div class="embed-container">{% codepen https://codepen.io/dimaslanjaka/pen/gWgEZx default_tab=result height=500 %}</div><strong>Selesai.</strong><i> Jangan lupa share yah&nbsp;Cara membuat banner sticky ads dengan tombol close di blogger.</i><br><b>Incoming Terms:</b> <i>Sticky Ads Banner | Membuat Sticky Ads Footer | Membuat Iklan Melayang Di Blogger | Iklan Melayang Di Bagian Bawah Halaman Blog | Sticky Ads Responsive | Cara membuat Sticky Ads Footer</i>