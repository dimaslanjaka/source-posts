---
author:
  nick: Dimas Lanjaka Kumala Indra
  link: https://www.blogger.com/profile/17555754514989936273
  email: noreply@blogger.com
categories:
  - uncategorized
comments: true
cover: https://res.cloudinary.com/dimaslanjaka/image/fetch/https://image3.mouthshut.com/images/imagesp/925039881s.png
date: 2019-06-25T14:48:00.004+07:00
description: How might I make a Cygwin alternate way that will open Cygwin at a
  particular envelope This would hinder composing cd
excerpt: How might I make a Cygwin alternate way that will open Cygwin at a
  particular envelope This would hinder composing cd
id: 7db66f2d-bfa5-4888-8b7a-369b12571f51
lang: en
photos:
  - https://res.cloudinary.com/dimaslanjaka/image/fetch/https://image3.mouthshut.com/images/imagesp/925039881s.png
subtitle: How might I make a Cygwin alternate way that will open Cygwin at a
  particular envelope This would hinder composing cd
tags:
  - tips & tricks
thumbnail: https://res.cloudinary.com/dimaslanjaka/image/fetch/https://image3.mouthshut.com/images/imagesp/925039881s.png
title: Cygwin In Context Menus
type: post
updated: 2023-08-08T14:45:31+07:00
uuid: 68ca946d-b045-4888-8151-ea26e99578b6
wordcount: 500
---

<div dir="ltr" style="text-align: left;" trbidi="on"><blockquote>How might I make a Cygwin alternate way that will open Cygwin at a particular envelope? This would hinder composing <pre>cd disc/cygdrive/c/Users/Tom/Desktop/ </pre>each time I dispatch Cygwin. </blockquote><img src="https://res.cloudinary.com/dimaslanjaka/image/fetch/https://image3.mouthshut.com/images/imagesp/925039881s.png"><p>When you introduce Cygwin (or in the event that you've just introduced it, download it   again and begin setup again to run an update), ensure that you select   the <code>chere</code> bundle under the "Shells" classification. </p><p>    After Cygwin is launched, open Cygwin terminal and type command: </p><pre>chere -i -t mintty -s bash</pre><p></p><p>    Presently you bought to have "Bash Prompt Here" in the Windows right-click setting   menu. </p><p>    (<a href="https://code.google.com/p/mintty/" rel="noopener noreferer nofollow">mintty</a> is     Cygwin's default terminal. If you don't choose it with the <code>-t</code>    option, your "Bash Prompt Here" will use the same terminal as the Windows     Command Prompt, which prevents horizontal resizing.) </p> </div>