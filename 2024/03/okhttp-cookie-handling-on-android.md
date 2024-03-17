---
title: OkHttp cookie handling on android (webview supported)
date: 2024-03-17T09:06:22+07:00
categories: [programming]
tags: [java, kotlin, android]
---

create `WebkitCookieManager.kt`

Here how i implement cookie handling for android lollipop - tiramisu and also jvm and non-persistent connection.

```kotlin
import android.content.Context
import android.webkit.WebView
import okhttp3.Cookie
import okhttp3.CookieJar
import okhttp3.HttpUrl
import java.net.CookieHandler
import java.net.CookiePolicy
import java.net.HttpCookie


/**
 * android webkit webview cookie manager.
 * [FULL USAGES](https://dimaslanjaka.github.io/2024/03/okhttp-cookie-handling-on-android.html)
 *
 * @author Dimas Lanjaka <a href="https://www.webmanajemen.com">https://www.webmanajemen.com</a>
 */
open class WebkitCookieManager : CookieJar {
    /**
     * support for below android 10
     */
    private var webkitCookieManager: android.webkit.CookieManager? = null

    /**
     * support for jvm or android 10+
     */
    private var javaCookieManager: java.net.CookieManager? = null

    /**
     * support for webview intercept connection cookie handling
     */
    private var webview: WebView? = null

    /**
     * the android context for clearing cookies on non-webview instance
     */
    private var context: Context? = null

    /**
     * for non-persistent cookies
     */
    private val cookieStore = mutableMapOf<HttpUrl, List<Cookie>>()

    /**
     * construct android cookie manager without webview
     */
    constructor(manager: android.webkit.CookieManager, ctx: Context? = null) {
        webkitCookieManager = manager
        setupAndroidCookieManager()
        this.context = ctx
    }

    /**
     * construct android cookie manager with webview
     */
    constructor(manager: android.webkit.CookieManager, webView: WebView, ctx: Context? = null) {
        webkitCookieManager = manager
        setupAndroidCookieManager(webView)
        this.webview = webView
        this.context = ctx
    }

    /**
     * construct non-persistent cookie manager
     */
    constructor(ctx: Context? = null) {
        this.context = ctx
    }

    /**
     * construct java cookie manager
     */
    constructor(manager: java.net.CookieManager, ctx: Context? = null) {
        manager.setCookiePolicy(CookiePolicy.ACCEPT_ALL)
        javaCookieManager = manager
        CookieHandler.setDefault(javaCookieManager)
        this.context = ctx
    }

    /**
     * make android webkit cookie manager accept third-party cookies
     */
    private fun setupAndroidCookieManager(webView: WebView? = null) {
        webkitCookieManager?.setAcceptCookie(true);
        if (webView != null) webkitCookieManager?.setAcceptThirdPartyCookies(webView, true);
    }

    /**
     * save cookies after request finished
     */
    override fun saveFromResponse(url: HttpUrl, cookies: List<Cookie>) {
        cookies.forEach { cookie ->
            webkitCookieManager?.setCookie(url.toString(), cookie.toString())
            javaCookieManager?.cookieStore?.add(url.toUri(), HttpCookie.parse(cookie.toString())[0])
        }
        cookieStore.put(url, cookies);
    }

    /**
     * load cookies before okhttp execute request {@link okhttp3.OkHttpClient#newCall(request)}
     */
    override fun loadForRequest(url: HttpUrl): List<Cookie> {
        return if (webkitCookieManager != null) {
            // get from android webkit cookie manager
            when (val cookies = webkitCookieManager?.getCookie(url.toString())) {
                null -> emptyList()
                else -> cookies.split("; ").mapNotNull { Cookie.parse(url, it) }
            }
        } else if (javaCookieManager != null) {
            // get from java cookie manager
            when (val cookies = javaCookieManager?.cookieStore?.cookies) {
                null -> emptyList()
                else -> cookies.toString().split("; ").mapNotNull { Cookie.parse(url, it) }
            }
        } else {
            // get from non-persisten cookie store
            val cookies = cookieStore[url]
            return cookies ?: ArrayList()
        }
    }

    /**
     * clear all stored cookies everywhere
     */
    fun clearCookies() {
        // remove non-persistent stored cookies
        cookieStore.clear()
        // initialize android webkit cookie manager on null
        if (webkitCookieManager == null) {
            webkitCookieManager = android.webkit.CookieManager.getInstance()
            setupAndroidCookieManager()
        }
        // indicator when webview not initialized
        var standaloneWebview = false
        // initalize fake webview instance
        if (webview == null && context != null) {
            // declare standalone webview
            webview = WebView(context!!)
            // treat as standalone webview
            standaloneWebview = true
        }
        // remove all stored cookies from android webkit cookie manager
        webkitCookieManager?.removeAllCookies(null)
        webkitCookieManager?.flush()
        webkitCookieManager?.removeSessionCookies(null);
        // clear all caches from webview
        webview?.clearCache(true)
        webview?.clearHistory()
        webview?.clearFormData();
        webview?.clearSslPreferences();
        if (standaloneWebview) {
            // destroy standalone webview
            webview?.destroy()
            webview = null
        }
        // initialize java cookie manager
        if (javaCookieManager == null) {
            javaCookieManager = java.net.CookieManager(null, CookiePolicy.ACCEPT_ALL)
            java.net.CookieHandler.setDefault(javaCookieManager)
        }
        // remove all stored cookies from java cookie manager
        javaCookieManager?.cookieStore?.removeAll()
    }
}
```

my usage within view binding webview + custom webviewclient intercept using okhttp

```kotlin
val clientBuilder = OkHttpClient.Builder()
clientBuilder.cookieJar(WebkitCookieManager(CookieManager.getInstance(), binding!!webview, applicationContext))
```

[![declaration of okhttp][1]][1]

[![on intercept section create connection][2]][2]

this work and tested, when i clear cookies the value of cookies on website changed, otherwise all same until expiration date of cookie.


  [1]: https://i.stack.imgur.com/1AcJt.png
  [2]: https://i.stack.imgur.com/EgV2P.png
