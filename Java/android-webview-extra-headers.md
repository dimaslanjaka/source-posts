---
title: Android Webview With Extra Headers
date: 2022-11-11T07:00:19+07:00
updated: 2023-03-28T09:52:52+07:00
category: ['programming', 'java']
tags: ['android', 'webview']
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
