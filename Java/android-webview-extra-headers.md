---
title: Android Webview With Extra Headers
date:
updated:
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
