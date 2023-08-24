---
author: Dimas Lanjaka
categories:
  - programming
  - java
comments: true
date: 2022-11-11T07:00:19+07:00
description: Android Webview With Extra Headers public void
  testLoadURLWithHTTPHeaders final String url =
  http://androidyue.github.io/;WebView webView = new
  WebViewgetActivity;Map<String,String> extraHeaders = new HashMap<String,
  String>;extraHeaders.putReferer, http://www.google.com;webVie
excerpt: Android Webview With Extra Headers public void
  testLoadURLWithHTTPHeaders final String url =
  http://androidyue.github.io/;WebView webView = new
  WebViewgetActivity;Map<String,String> extraHeaders = new HashMap<String,
  String>;extraHeaders.putReferer, http://www.google.com;webVie
lang: en
photos: []
subtitle: Android Webview With Extra Headers public void
  testLoadURLWithHTTPHeaders final String url =
  http://androidyue.github.io/;WebView webView = new
  WebViewgetActivity;Map<String,String> extraHeaders = new HashMap<String,
  String>;extraHeaders.putReferer, http://www.google.com;webVie
tags:
  - android
  - webview
title: Android Webview With Extra Headers
type: post
updated: 2023-08-08T14:44:16+07:00
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
