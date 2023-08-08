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
id: b84881b3-91eb-4888-8f8e-09699590c913
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
updated: 2023-03-28T09:52:52+07:00
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
