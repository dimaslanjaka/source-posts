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

How to create random posts widget blogger (simple and stylish).
---------------------------------------------------------------

![](https://s2.loli.net/2023/10/20/Um5lVGZNscihQHE.jpg)
1\. Login to dashboard blogger -> navigate to layout tab -> create widget html/javascript -> insert this code to the widget.


```html
<style scoped='' type="text/css">
#arlina-random ul{list-style:none;margin:0;padding:0}#arlina-random li{display:block;clear:both;overflow:hidden;list-style:none;border-bottom:1px solid #e3e3e3;word-break:break-word;padding:10px 0;margin:0;}
#arlina-random li:last-child{border-bottom:0;}
#arlina-random li a{color:#444;}#arlina-random li a:hover{color:#444;text-decoration:underline}
</style>
<div id='arlina-random'>Memuat...</div>
<script>
//<![CDATA[
// Random Post Widget
var homePage = 'https://www.webmanajemen.com',
    maxResults = 10,
    containerId = 'arlina-random';
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function shuffleArray(arr) {
    var i = arr.length, j, temp;
    if (i === 0) return false;
    while (--i) {
        j = Math.floor(Math.random() * (i + 1));
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
}
function ArlinaRandomPosts(json) {
    var startIndex = getRandomInt(1, (json.feed.openSearch$totalResults.$t - maxResults));
    // console.log('Get the post feed start from ' + startIndex + ' until ' + (startIndex + maxResults));
    document.write('<scr' + 'ipt src="' + homePage + '/feeds/posts/summary?alt=json-in-script&orderby=updated&start-index=' + startIndex + '&max-results=' + maxResults + '&callback=randomPosts"></scr' + 'ipt>');
}
function randomPosts(json) {
    var link, ct = document.getElementById(containerId),
        entry = shuffleArray(json.feed.entry),
        skeleton = "<ul>";
    for (var i = 0, len = entry.length; i < len; i++) {
        for (var j = 0, jen = entry[i].link.length; j < jen; j++) {
            link = (entry[i].link[j].rel == "alternate") ? entry[i].link[j].href : '#';
        }
        skeleton += '<li><a href="' + link + '">' + entry[i].title.$t + '</a></li>';
    }
    ct.innerHTML = skeleton + '</ul>';
}
document.write('<scr' + 'ipt src="' + homePage + '/feeds/posts/summary?alt=json-in-script&max-results=0&callback=ArlinaRandomPosts"></scr' + 'ipt>');
//]]>
</script>
```


Change **https://www.webmanajemen.com** to your address blogs.
Change number "10" to your chances, it will display how much random posts will displayed in the widget.
Done.


### Results

<iframe src="https://codepen.io/dimaslanjaka/embed/LyRxXj" data-theme-id="300" frameborder="0" data-slug-hash="LyRxXj" width="100%" height="300"></iframe>

_What this article help you ?_. Please share this yeah !!...