---
author:
  nick: Unknown
  link: ""
  email: noreply@blogger.com
categories:
  - programming
comments: true
date: 2017-12-06T12:07:00.000Z
description: https//www.webmanajemen.com
lang: en
tags:
  - css
  - javascript
  - blogger
  - html
thumbnail: https://s2.loli.net/2023/10/20/Um5lVGZNscihQHE.jpg
title: Random Posts Widget Blogger
type: post
updated: 2023-09-02T23:35:03.000Z
---

<h2>How to create random posts widget blogger (simple and stylish).</h2><img height="272" src="https://s2.loli.net/2023/10/20/Um5lVGZNscihQHE.jpg" width="400"><br>1. Login to dashboard blogger -&gt; navigate to layout tab -&gt; create widget html/javascript -&gt; insert this code to the widget.<br><br><pre class="html"><code>&lt;style scoped='' type="text/css"&gt;<br>#arlina-random ul{list-style:none;margin:0;padding:0}#arlina-random li{display:block;clear:both;overflow:hidden;list-style:none;border-bottom:1px solid #e3e3e3;word-break:break-word;padding:10px 0;margin:0;}<br>#arlina-random li:last-child{border-bottom:0;}<br>#arlina-random li a{color:#444;}#arlina-random li a:hover{color:#444;text-decoration:underline}<br>&lt;/style&gt;<br>&lt;div id='arlina-random'&gt;Memuat...&lt;/div&gt;<br>&lt;script&gt;<br>//&lt;![CDATA[<br>// Random Post Widget<br>var homePage = '<span style="color: red;">https://www.webmanajemen.com</span>',<br>&nbsp; &nbsp; maxResults = <span style="color: red;">10</span>,<br>&nbsp; &nbsp; containerId = 'arlina-random';<br>function getRandomInt(min, max) {<br>&nbsp; &nbsp; return Math.floor(Math.random() * (max - min + 1)) + min;<br>}<br>function shuffleArray(arr) {<br>&nbsp; &nbsp; var i = arr.length, j, temp;<br>&nbsp; &nbsp; if (i === 0) return false;<br>&nbsp; &nbsp; while (--i) {<br>&nbsp; &nbsp; &nbsp; &nbsp; j = Math.floor(Math.random() * (i + 1));<br>&nbsp; &nbsp; &nbsp; &nbsp; temp = arr[i];<br>&nbsp; &nbsp; &nbsp; &nbsp; arr[i] = arr[j];<br>&nbsp; &nbsp; &nbsp; &nbsp; arr[j] = temp;<br>&nbsp; &nbsp; }<br>&nbsp; &nbsp; return arr;<br>}<br>function ArlinaRandomPosts(json) {<br>&nbsp; &nbsp; var startIndex = getRandomInt(1, (json.feed.openSearch$totalResults.$t - maxResults));<br>&nbsp; &nbsp; // console.log('Get the post feed start from ' + startIndex + ' until ' + (startIndex + maxResults));<br>&nbsp; &nbsp; document.write('&lt;scr' + 'ipt src="' + homePage + '/feeds/posts/summary?alt=json-in-script&amp;orderby=updated&amp;start-index=' + startIndex + '&amp;max-results=' + maxResults + '&amp;callback=randomPosts"&gt;&lt;/scr' + 'ipt&gt;');<br>}<br>function randomPosts(json) {<br>&nbsp; &nbsp; var link, ct = document.getElementById(containerId),<br>&nbsp; &nbsp; &nbsp; &nbsp; entry = shuffleArray(json.feed.entry),<br>&nbsp; &nbsp; &nbsp; &nbsp; skeleton = "&lt;ul&gt;";<br>&nbsp; &nbsp; for (var i = 0, len = entry.length; i &lt; len; i++) {<br>&nbsp; &nbsp; &nbsp; &nbsp; for (var j = 0, jen = entry[i].link.length; j &lt; jen; j++) {<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; link = (entry[i].link[j].rel == "alternate") ? entry[i].link[j].href : '#';<br>&nbsp; &nbsp; &nbsp; &nbsp; }<br>&nbsp; &nbsp; &nbsp; &nbsp; skeleton += '&lt;li&gt;&lt;a href="' + link + '"&gt;' + entry[i].title.$t + '&lt;/a&gt;&lt;/li&gt;';<br>&nbsp; &nbsp; }<br>&nbsp; &nbsp; ct.innerHTML = skeleton + '&lt;/ul&gt;';<br>}<br>document.write('&lt;scr' + 'ipt src="' + homePage + '/feeds/posts/summary?alt=json-in-script&amp;max-results=0&amp;callback=ArlinaRandomPosts"&gt;&lt;/scr' + 'ipt&gt;');<br>//]]&gt;<br>&lt;/script&gt;</code></pre><br>Change "https://www.webmanajemen.com" to your address blogs.<br>Change number "10" to your chances, it will display how much random posts will displayed in the widget.<br>Done.<br><br><h3>Results</h3><br><iframe src="https://codepen.io/dimaslanjaka/embed/LyRxXj" data-theme-id="300" frameborder="0" data-slug-hash="LyRxXj" width="100%" height="300"></iframe><br><i>What this article help you ?</i>. Please share this yeah !!...