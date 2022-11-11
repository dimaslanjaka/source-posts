---
title: Android Webview With Extra Headers
date: 2022-11-11T07:00:19+07:00
updated: 2022-11-11T07:00:19+07:00
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
