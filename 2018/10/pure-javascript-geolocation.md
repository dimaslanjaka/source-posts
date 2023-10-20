---
author:
  nick: Dimas Lanjaka Kumala Indra
  link: https://www.blogger.com/profile/17555754514989936273
  email: noreply@blogger.com
categories:
  - programming
comments: true
date: 2018-10-30T20:13:00.001Z
description: img
  src=https://res.cloudinary.com/dimaslanjaka/image/fetch/https://imgdb.net/images/4291.jpg
  class=w3-image title=JS Geolocation
lang: en
tags:
  - script
  - javascript
thumbnail: https://res.cloudinary.com/dimaslanjaka/image/fetch/https://imgdb.net/images/4291.jpg
title: Pure Javascript Geolocation
type: post
updated: 2023-09-02T23:35:01.000Z
wordcount: 236

---

<img src="https://res.cloudinary.com/dimaslanjaka/image/fetch/https://imgdb.net/images/4291.jpg" class="w3-image" title="JS Geolocation" alt="Javascript"><b>Read <a href="https://webmanajemen.com/2019/07/cara-defer-loading-javascript.html" target="_blank" rel="follow">How to async defer CSS JS perfectly</a></b><pre><br>&lt;script&gt;<br>function locationSuccess(position) {<br>        var latitude = position.coords.latitude;<br>        var longitude = position.coords.longitude;<br>        var altitude = position.coords.altitude;<br>        var accuracy = position.coords.accuracy;<br>        var altitudeAccuracy = position.coords.altitudeAccuracy;<br>        var heading = position.coords.height;<br>        var speed = position.coords.speed;<br>        var timestamp = position.timestamp;<br><br>        // bekerja dengan informasi ini sesuka Anda!<br>    }<br><br>    function locationError(error) {<br>        var code = error.code;<br>        var message = error.message;<br><br>        // baca kode dan pesan dan putuskan bagaimana Anda ingin menangani ini!<br>    }<br>navigator.geolocation.getCurrentPosition(locationSuccess, locationError);<br>&lt;/script&gt;<br></pre>