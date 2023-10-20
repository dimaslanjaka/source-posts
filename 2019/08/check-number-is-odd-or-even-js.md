---
author:
  nick: Dimas Lanjaka Kumala Indra
  link: https://www.blogger.com/profile/17555754514989936273
  email: noreply@blogger.com
categories:
  - programming
comments: true
date: 2019-08-02T12:10:00.000Z
description: "Check number is Odd or Even [JS] var oddoreven = function n =
  false, type = odd var time = n ? new Date.getDay : Numbern; if
  /^-0,1\\d/.testtime alertarguments i"
lang: en
tags:
  - javascript
thumbnail: https://res.cloudinary.com/dimaslanjaka/image/fetch/https://i.ytimg.com/vi/jFazrvLodrA/maxresdefault.jpg
title: Check number is Odd or Even [JS]
type: post
updated: 2023-09-02T23:34:51.000Z
wordcount: 204

---

```js
var oddoreven = function (n = false, type = 'odd') {
  var time = !n ? new Date().getDay() : Number(n);

  if (!/^-{0,1}\d+$/.test(time)){
    alert('arguments is not number, please remove quote');
    return;
  }
  hasil = time % 2;
  return hasil == (type == ('odd' || 'ganjil') ? 1 : 0);
}
```

**Test**

```js
document.write('isOdd / Ganjil : ' + oddoreven(false, 'odd'));
document.write('<br/>');
document.write('isEven / Genap : '+oddoreven(false, 'even'));
```

**Output**


isOdd / Ganjil : true
isEven / Genap : false

[![](https://res.cloudinary.com/dimaslanjaka/image/fetch/https://i.ytimg.com/vi/jFazrvLodrA/maxresdefault.jpg)](https://res.cloudinary.com/dimaslanjaka/image/fetch/https://i.ytimg.com/vi/jFazrvLodrA/maxresdefault.jpg)