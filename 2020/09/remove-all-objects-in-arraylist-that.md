---
author:
  nick: Kuswati
  link: https://www.blogger.com/profile/09256263851708439294
  email: noreply@blogger.com
categories:
  - programming
comments: true
cover: https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png
date: 2020-09-22T10:36:00.001+07:00
description: pre><br>ArrayListlt;Stringgt; firstArr = new ArrayListlt;gt;;<br
  /> firstArr.addquot;1quot;;<br>
lang: en
photos:
  - https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png
tags:
  - java
thumbnail: https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png
title: Remove all objects in an arraylist that exist in another arraylist Java
type: post
updated: 2023-09-03T04:28:07+07:00
wordcount: 135
---

```java
  ArrayList<String> firstArr = new ArrayList<>();
  firstArr.add("1");
  firstArr.add("2");
  firstArr.add("3");

  // array/list to be removed from firstArr
  ArrayList<String> filterArr = new ArrayList<>();
  filterArr.add("1");
  filterArr.add("3");

  // filter now
  filterArr.removeAll(blockedArr);

  // Dump
  System.out.println(filterArr.toString); // output 1 and 3
```
