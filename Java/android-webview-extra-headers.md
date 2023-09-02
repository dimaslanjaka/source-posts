---
author: Dimas Lanjaka
categories:
  - programming
comments: true
date: 2022-11-11T07:00:19+07:00
description: Android Webview With Extra Headers public void
  testLoadURLWithHTTPHeaders final String url =
  http://androidyue.github.io/;WebView webView = new WebViewgetActivi
lang: en
tags:
  - android
  - webview
  - java
title: Android Webview With Extra Headers
type: post
updated: 2023-09-03T04:28:01+07:00
wordcount: 73
---

```java
public void testLoadURLWithHTTPHeaders() {
final String url = "http://androidyue.github.io/";
WebView webView = new WebView(getActivity());
Map<String,String> extraHeaders = new HashMap<String, String>();
extraHeaders.put("Referer", "http://www.google.com");
webView.loadUrl(url, extraHeaders);
}
```
