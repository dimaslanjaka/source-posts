---
author:
  nick: Unknown
  link: ""
  email: noreply@blogger.com
categories:
  - programming
date: 2017-11-16T19:34:00.000+07:00
description: How to create Stylish blogger sitemap per tables
id: f1e6c104-4fce-4888-8dac-7b5ee742d827
lang: en
tags:
  - css
  - javascript
  - blogger
thumbnail: https://4.bp.blogspot.com/-0ALg8SCnD24/VSsqzL7AxJI/AAAAAAAACOQ/4w_tFyoUEVo/s1600/Menerapkan%2BDaftar%2Bisi%2BMenurut%2BLabel.png
title: How to create blogger sitemap per tables 100 Worked
type: post
updated: 2023-10-20T07:31:20+07:00
---

Stylish blogger sitemap per tables
----------------------------------

![](https://4.bp.blogspot.com/-0ALg8SCnD24/VSsqzL7AxJI/AAAAAAAACOQ/4w_tFyoUEVo/s1600/Menerapkan%2BDaftar%2Bisi%2BMenurut%2BLabel.png)
**Tutorial Create Blogger Sitemap Per Tables:**

1.  Open dashboard _blogger._
2.  Navigate to pages tab
3.  Create _New Page_
4.  Enter the code below in html editor mode

```html
<div-wrapper id='wrapper'><div-wrapper dir="ltr" style="text-align:left;" trbidi="on"><div-wrapper class="table-of-content" id="table-of-content"><div-wrapper class="loading"><img class='loading' src='https://res.cloudinary.com/dimaslanjaka/image/fetch/http://www.amcsscentry.gov.in/asset/images/please_wait.gif'></div-wrapper></div-wrapper></div-wrapper><div-wrapper><script async='async' custom-element='div-wrapper' src='https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js'></script>
<link href='https://codepen.io/dimaslanjaka/pen/eWWzrL.css' rel='stylesheet'>
<style type="text/css">
#comments{visibility; hidden; display:none;}
</style>
<script>
var toc_config = {
    url: 'https://www.webmanajemen.com/',
    containerId: 'table-of-content',
    showNew: 15,
    newText: ' <strong style="font-weight:normal;font-style:normal;color:#fff;font-size:11px;background:#5c5a78;padding:1px 6px 3px 6px;line-height:normal;float:right;border-radius:3px;">baru</strong>',
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

{% codepen https://codepen.io/dimaslanjaka/pen/WjjGda default_tab=result height=800 %}

**_OR:_** [Click Here](https://web-manajemen.blogspot.jp/p/test-sitemap.html "DEMO"). I've made demo on my page.
**Dont forget share this article**
**Incoming Terms:**

1.  _How to create blogger sitemap per tables_
2.  _How to make blogger sitemap per tables_
3.  _Blogger sitemap tables tab style_
4.  _Stylish blogger sitemap with tables tab style_
5.  _Blogger sitemap per tables_
6.  _How to create sitemap per tables on blogger 100% Worked._