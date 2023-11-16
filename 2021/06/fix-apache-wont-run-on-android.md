---
author:
  nick: Dimas Lanjaka
  link: https://www.blogger.com/profile/07981649157148639830
  email: noreply@blogger.com
categories:
  - uncategorized
comments: true
date: 2021-06-02T23:00:00.002Z
description: Previous Install XAMPP apache on android termux Fix error starting
  apache on android Open httpd.conf nano
lang: en
tags:
  - android
  - tips & tricks
thumbnail: https://res.cloudinary.com/dimaslanjaka/image/fetch/https://parzibyte.me/blog/wp-content/uploads/2018/11/Configuraci%C3%B3n-httpd-en-termux-Android.jpg
title: Fix apache wont run on android
type: post
updated: 2023-08-08T07:45:10.000Z
wordcount: 260

---

<div id="bootstrap-wrapper">  Previous <a href="/2021/06/install-xampp-lampp-on-android-non-root.html" rel="follow">Install XAMPP apache on android termux</a>  <h2>Fix error starting apache on android</h2>  <p>  </p><ul>    <li>Open <b>httpd.conf</b>      <pre><code class="lang-bash"><span class="hljs-keyword">nano</span> /data/data/com.termux/files/usr/etc/apache2/httpd.conf</code></pre>    </li>    <li>Find the lines that contain <b>LoadModule</b>. Comment the following line with <b>hash(#)</b>:       <pre><code class="lang-conf">LoadModule mpm_worker_module <span class="hljs-regexp">libexec/apache2/mod_mpm_worker.so</span></code></pre>      to       <pre><code class="lang-conf"><span class="hljs-regexp">#</span>LoadModule mpm_worker_module <span class="hljs-regexp">libexec/apache2/mod_mpm_worker.so</span></code></pre>    </li>    <li>Then uncomment the following line (remove hash[#]):       <pre><code class="lang-conf"><span class="hljs-regexp">#</span>LoadModule mpm_prefork_module <span class="hljs-regexp">libexec/apache2/mod_mpm_prefork.so</span></code></pre>      to       <pre><code class="lang-conf">LoadModule mpm_prefork_module <span class="hljs-regexp">libexec/apache2/mod_mpm_prefork.so</span></code></pre>    </li>    Preview:     <img src="https://res.cloudinary.com/dimaslanjaka/image/fetch/https://parzibyte.me/blog/wp-content/uploads/2018/11/Configuraci%C3%B3n-httpd-en-termux-Android.jpg" alt="Preview">  </ul>  <p></p></div><script>hljs.initHighlightingOnLoad();</script>