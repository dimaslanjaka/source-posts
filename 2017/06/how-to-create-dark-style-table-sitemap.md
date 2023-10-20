---
author:
  nick: Unknown
  link: ""
  email: noreply@blogger.com
categories:
  - programming
comments: true
date: 2017-06-24T21:08:00.000+07:00
description: How to Create Dark Style Table Sitemap Blogger This is version 2
  from Blogger sitemap per table Blogger sitemap per table
id: b4e7ebcc-fce9-4888-8ace-41290bb49cef
lang: en
tags:
  - css
  - javascript
  - blogger
  - html
thumbnail: https://res.cloudinary.com/dimaslanjaka/image/fetch/http://4.bp.blogspot.com/-0ALg8SCnD24/VSsqzL7AxJI/AAAAAAAACOQ/4w_tFyoUEVo/s320/Menerapkan%2BDaftar%2Bisi%2BMenurut%2BLabel.png
title: How to Create Dark Style Table Sitemap Blogger
type: post
updated: 2023-10-20T07:34:48+07:00
---

[![dark style sitemap per table](https://res.cloudinary.com/dimaslanjaka/image/fetch/http://4.bp.blogspot.com/-0ALg8SCnD24/VSsqzL7AxJI/AAAAAAAACOQ/4w_tFyoUEVo/s320/Menerapkan%2BDaftar%2Bisi%2BMenurut%2BLabel.png "dark style sitemap per table")](https://res.cloudinary.com/dimaslanjaka/image/fetch/http://4.bp.blogspot.com/-0ALg8SCnD24/VSsqzL7AxJI/AAAAAAAACOQ/4w_tFyoUEVo/s1600/Menerapkan%2BDaftar%2Bisi%2BMenurut%2BLabel.png)


**This is version 2 from [Blogger sitemap per table](https://webmanajemen.com/p/test-sitemap.html)**


```html
<div-sitemap id='wrapper'>
<div-sitemap dir="ltr" style="text-align:left;" trbidi="on">
<div-sitemap class="table-of-content" id="table-of-content">
<div-sitemap class='loading'><img class='loading' src='https://res.cloudinary.com/dimaslanjaka/image/fetch/http://www.robosoftin.com/asset/custom/img/icon-load.gif'></div-sitemap></div-sitemap>
</div-sitemap>
</div-sitemap>
   <script async='async' custom-element='div-sitemap' src='https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js'></script>
  <link href='https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css' rel='stylesheet'>
 <link href='https://codepen.io/dimaslanjaka/pen/zwwNGj.css' rel='stylesheet preload' scoped=''>
<script type='text/javascript'>
  var toc_config = {
    url: 'https://www.webmanajemen.com/',
    containerId: 'table-of-content',
    showNew: 15,
    newText: ' <strong style="font-weight:normal;font-style:normal;color:#fff;font-size:11px;background:#009fef;padding:1px 6px 3px 6px;line-height:normal;float:right;border-radius:3px;">baru</strong>',
    sortAlphabetically: {
        thePanel: true,
        theList: true
    },
    maxResults: 9999,
    activePanel: 1,
    slideSpeed: {
        down: 400,
        up: 400
    },
    slideEasing: {
        down: null,
        up: null
    },
    slideCallback: {
        down: function() {},
        up: function() {}
    },
    clickCallback: function() {},
    jsonCallback: '_toc',
    delayLoading: 0
};

!function(e,o){var t=o.getElementById(toc_config.containerId),c=o.getElementsByTagName("head")[0],n=[];e[toc_config.jsonCallback]=function(e){for(var o,c,i=e.feed.entry,a=e.feed.category,l="",s=0,d=a.length;d>s;++s)n.push(a[s].term);for(var r=0,f=i.length;f>r;++r)(toc_config.showNew||toc_config.showNew>0)&&r<toc_config.showNew+1&&(i[r].title.$t+=" %new%");i=toc_config.sortAlphabetically.theList?i.sort(function(e,o){return e.title.$t.localeCompare(o.title.$t)}):i,toc_config.sortAlphabetically.thePanel&&n.sort();for(var g=0,h=n.length;h>g;++g){l+='<h3 class="toc-header">'+n[g]+"</h3>",l+='<div class="toc-content"><ol>';for(var _=0,p=i.length;p>_;++_){o=i[_].title.$t;for(var w=0,u=i[_].link.length;u>w;++w)if("alternate"==i[_].link[w].rel){c=i[_].link[w].href;break}for(var v=0,m=i[_].category.length;m>v;++v)n[g]==i[_].category[v].term&&(l+='<li><a rel="nofollow" rel="noreferrer"href="'+c+'">'+o.replace(/ \%new\%$/,"")+"</a>"+(o.match(/\%new\%/)?" "+toc_config.newText:"")+"</li>")}l+="</ol></div>"}t.innerHTML=l,"undefined"!=typeof jQuery&&($("#"+toc_config.containerId+" .toc-content").hide(),$("#"+toc_config.containerId+" .toc-header").click(function(){$(this).hasClass("active")||(toc_config.clickCallback(this),$("#"+toc_config.containerId+" .toc-header").removeClass("active").next().slideUp(toc_config.slideSpeed.up,toc_config.slideEasing.up,toc_config.slideCallback.up),$(this).addClass("active").next().slideDown(toc_config.slideSpeed.down,toc_config.slideEasing.down,toc_config.slideCallback.down))}).eq(toc_config.activePanel-1).addClass("active").next().slideDown(toc_config.slideSpeed.down,toc_config.slideEasing.down,toc_config.slideCallback.down))};var i=o.createElement("script");i.src=toc_config.url.replace(/\/$/,"")+"/feeds/posts/summary?alt=json-in-script&max-results="+toc_config.maxResults+"&callback="+toc_config.jsonCallback,"onload"==toc_config.delayLoading?e.onload=function(){c.appendChild(i)}:e.setTimeout(function(){c.appendChild(i)},toc_config.delayLoading)}(window,document);
</script>
```


**DEMO:**

{% codepen https://codepen.io/dimaslanjaka/pen/bWWBzd default_tab=result height=800 %}

**OR:** visit [This Page](http://www.webmanajemen.com/p/dark-table-sitemap.html "demo").