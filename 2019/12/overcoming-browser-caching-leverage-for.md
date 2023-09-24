---
author:
  nick: Dimas Lanjaka Kumala Indra
  link: https://www.blogger.com/profile/17555754514989936273
  email: noreply@blogger.com
categories:
  - uncategorized
comments: true
cover: https://imgcdn.000webhostapp.com/https/1.bp.blogspot.com/784bea405c9b1bc89e2d5bda77cf8752.jpeg
date: 2019-12-25T00:01:00.000+07:00
description: Overcoming Browser Caching Leverage for Favicon.ico Favicon is the
  main icon of a website that appears on the left side of the browser
lang: en
photos:
  - https://imgcdn.000webhostapp.com/https/1.bp.blogspot.com/784bea405c9b1bc89e2d5bda77cf8752.jpeg
tags:
  - share
  - tips & tricks
thumbnail: https://imgcdn.000webhostapp.com/https/1.bp.blogspot.com/784bea405c9b1bc89e2d5bda77cf8752.jpeg
title: Overcoming Browser Caching Leverage for Favicon.ico
type: post
updated: 2023-08-08T14:45:15+07:00
wordcount: 3735
---

<div id="A-G-C" date="09 Dec 2019 17:01:02"><div class="post-body entry-content" id="post-body-5562675611904764504"><br><div class="clear"></div><br><p class="desc-post fontroboto fontweight400 m0 p0"> <span class="notranslate"> Overcoming Browser Caching Leverage for Favicon.ico - Favicon is the main icon of a website that appears on the left side of the browser tab and is the logo of the web.</span> <span class="notranslate"> A favicon can also be known as a shortcut icon, website icon, URL icon, or bookmark icon.</span> </p><noscript><img alt="Mengatasi Leverage Browser Caching Untuk Favicon.ico" height="720" src="https://imgcdn.000webhostapp.com/https/1.bp.blogspot.com/784bea405c9b1bc89e2d5bda77cf8752.jpeg" title="Overcoming Browser Caching Leverage for Favicon.ico" width="1280"></noscript><p> <span class="notranslate"> This favicon generally uses an image with the extension .ico with a fairly small size that is 16x16 pixels.</span> </p><p> <span class="notranslate"> Even though the size is quite small, the picture is still a picture.</span> <span class="notranslate"> And this is often a problem in the blog loading speed measuring tool that is browser caching leverage from Favicon.ico.</span> </p><p> <span class="notranslate"> To overcome the problem of Favicon.ico's browser caching leverage, please follow the following tricks.</span> </p><h4>Using Base64</h4><p> <span class="notranslate"> One way to overcome the browser caching leverage of Favicon.ico is to use a favicon with base64, here's how:</span> </p><ol><li> <span class="notranslate"> Please download a picture of your current blog favicon.</span> <span class="notranslate"> Please right-click on your blog page then select View source page.</span> <span class="notranslate"> Then find the code like this:</span> <br><pre class="notranslate html"> <code class="notranslate html"> &lt;link href='https://www.domainanda.com/favicon.ico' rel='icon' type='image/x-icon'/&gt;</code> </pre><br> <span class="notranslate"> Please click the blue URL, after the favicon image is open, please save the image on the computer.</span> </li><li> <span class="notranslate"> Next, please use <a href="https://www.webmanajemen.com/page/safelink.html?url=aHR0cHM6Ly9iYXNlNjQuZ3VydS9jb252ZXJ0ZXIvZW5jb2RlL2ltYWdlL2ljbw==" rel="nofollow noopener" target="_blank" title="favicon to base64 conversion tool">the favicon to base64 conversion tool</a> , upload the favicon image that was saved on the computer then select URI Data - data: content / type; base64 for the Output Format.</span> </li><li> <span class="notranslate"> After that, go to the HTML edit blog then look for the code as follows:</span> <br><pre class="notranslate html"> <code class="notranslate html"> &lt;link expr:href='data:blog.canonicalHomepageUrl + &amp;quot;favicon.ico&amp;quot;' rel='icon' type='image/x-icon'/&gt;</code> </pre><br> <span class="notranslate"> Then please change to the following:</span> <br><pre class="notranslate html"> <code class="notranslate html"> &lt;link href='</code> <mark>URL BASE64 FROM STEP 2</mark>' rel='icon' type='image/x-icon'/&gt;</pre><br> <span class="notranslate"> Please replace the <code class="notranslate plaintext">URL BASE64 DARI LANGKAH 2</code> code <code class="notranslate plaintext">URL BASE64 DARI LANGKAH 2</code> with the base64 URL of the favicon that was converted in step 2.</span> </li></ol><p> <span class="notranslate"> Now please check your blog with the blog loading speed measuring tool that you normally use.</span> <span class="notranslate"> Has the browser caching notification from Favicon.ico disappeared?</span> </p><h4>Using Staticaly</h4><p> <span class="notranslate"> Base64 usually produces a URL that is long enough for an image, which of course will affect the HTML size of the blog.</span> </p><p> <span class="notranslate"> If you are not comfortable with a URL that is long enough from base64, you can overcome this browser caching leverage from Favicon.ico in a more simple way, namely by using <a href="https://www.webmanajemen.com/page/safelink.html?url=aHR0cHM6Ly9zdGF0aWNhbGx5LmlvL2Zhdmljb25z" rel="nofollow noopener" target="_blank" title="Staticaly">Staticaly</a> , the way is as follows:</span> </p><ol><li> <span class="notranslate"> Please enter the HTML blog edit then look for the code as follows:</span> <br><pre class="notranslate html"> <code class="notranslate html"> &lt;link expr:href='data:blog.canonicalHomepageUrl + &amp;quot;favicon.ico&amp;quot;' rel='icon' type='image/x-icon'/&gt;</code> </pre></li><li> <span class="notranslate"> Then please change to the following:</span> <br><pre class="notranslate html"> <code class="notranslate html"> &lt;link href='https://cdn.statically.io/favicons/</code> <mark>www.yourdomain.com</mark>' rel='icon' type='image/x-icon'/&gt;</pre><br> <span class="notranslate"> Please replace the code <code class="notranslate plaintext">www.domainanda.com</code> with your blog's domain name, it can also be without <code class="notranslate plaintext">www</code> .</span> </li><li> <span class="notranslate"> Done, pretty simple right?</span> </li></ol><p> <span class="notranslate"> Now please check your blog with the blog loading speed measuring tool that you normally use.</span> <span class="notranslate"> Has the browser caching notification from Favicon.ico disappeared?</span> </p><h4>UPDATE:</h4><p> <span class="notranslate"> It turns out that there was a mistake for the Staticaly domain above, which caused an error at Lighthouse.</span> <span class="notranslate"> It turns out that now Staticaly uses the <code class="notranslate plaintext">statically.io</code> (double L) domain, but we can still use the <code class="notranslate plaintext">staticaly.com</code> domain (single L).</span> <span class="notranslate"> I have corrected the above tutorial for using Favicon with Staticaly.</span> </p><p> <span class="notranslate"> And in addition, we can control the length of cache for Favicon with Staticaly.</span> <span class="notranslate"> By default, Staticaly provides 1 day cache.</span> <span class="notranslate"> But we can provide parameters to increase the cache time by seconds such as the following for 1 year cache (as long as it is not clear cache).</span> </p><pre class="notranslate html"> <code class="notranslate html"> &lt;link href='https://cdn.statically.io/favicons/www.domainanda.com</code> <mark>?cache=31556952</mark>' rel='icon' type='image/x-icon'/&gt;</pre><p> <span class="notranslate"> And this post about how to overcome the leverage of browser caching from Favicon is also made with audio visual that you can watch in the following video:</span> </p><amp-youtube data-videoid="E0Zqo3HpJdU" height="270" layout="responsive" width="480"></amp-youtube><p> <span class="notranslate"> May be useful.</span> </p><div class="clear"></div></div><br><div class="clear"></div><div class="clear"></div><img src="https://imgcdn.000webhostapp.com/https/imgcdn.000webhostapp.com/c76671c4067b4ca042a47c629a10c838.jpeg" alt="Overcoming Browser Caching Leverage for Favicon.ico"></div><link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/dimaslanjaka/Web-Manajemen@master/AGC/css/responsive.css"><link rel="stylesheet" href="//cdn.jsdelivr.net/gh/highlightjs/cdn-release@9.16.2/build/styles/default.min.css"><script src="//cdn.jsdelivr.net/gh/highlightjs/cdn-release@9.16.2/build/highlight.min.js"></script><script src="https://codepen.io/dimaslanjaka/pen/dyPYagy.js"></script><script src="https://codepen.io/dimaslanjaka/pen/aQRrbR.js"></script>