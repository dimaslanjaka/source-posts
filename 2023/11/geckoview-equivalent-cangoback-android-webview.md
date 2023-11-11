---
title: Geckoview cangoback equivalent of android webview.canGoBack
date: 2023-11-11T13:41:10+07:00
updated: 2023-11-11T13:46:25+07:00
tags: [geckoview, webview, android, java, kotlin]
categories: [programming]
thumbnail: https://hacks.mozilla.org/files/2019/06/geckoview_logo.png
---

## How can i use canGoBack() on GeckoView?

below is sample default android webview `canGoBack()` implemention

```java
public void onBackPressed() {
    if (webView.canGoBack()) {
        webView.goBack();
    } else {
        super.onBackPressed();
    }
}
```

on geckoview 
> You need to set a navigation delegate on the gecko session and use a global boolean to keep track of whether it can go back or not.

## Java
```java
 private boolean canGoBack = false;
 public class MainActivity extends AppCompatActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        session.setNavigationDelegate(new GeckoSession.NavigationDelegate() {
                   @Override
                   public void onCanGoBack(@NonNull GeckoSession session, boolean canGoBack) {
                       MainActivity.this.canGoBack = canGoBack;
                   }
          });
    }
 }
```

## Kotlin

```kotlin
session.navigationDelegate = object : NavigationDelegate {
    override fun onCanGoBack(session: GeckoSession, canGoBack: Boolean) {
        // equivalent of webview.canGoBack
        this@MainActivity.canGoBack = canGoBack
    }
}
```
