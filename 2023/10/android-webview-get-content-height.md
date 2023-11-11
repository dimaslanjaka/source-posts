---
title: android webview get content height
description: script to get content height of android webview
date: 2023-10-29T11:43:36+07:00
updated: 2023-10-29T11:43:36+07:00
tags: [android, kotlin, java, webview]
categories: [programming]
thumbnail: https://i.ytimg.com/vi/z1gUOTZrMFc/maxresdefault.jpg
---

## Basic methods
Basic methods of Various ways to get the height of a Webview on Android. Nothing really works on all cases 

```kotlin
import android.view.ViewTreeObserver
import android.webkit.JavascriptInterface
import android.webkit.WebView
import android.webkit.WebViewClient

// Try 1

private fun getHeightFromDocumentBodyScrollHeight(webView: WebView, setHeight: (Int)->Unit) {
    webView.webViewClient = object : WebViewClient() {
        override fun onPageFinished(view: WebView?, url: String?) {
            view?.let {
                it.settings.javaScriptEnabled = true
                it.addJavascriptInterface(WebAppInterface(it, setHeight), "AndroidGetHeightFunction")
                it.loadUrl("javascript:AndroidGetHeightFunction.resize(document.body.scrollHeight)")
            }
        }
    }
}

class WebAppInterface(private val webView: WebView, val setHeight: (Int)->Unit) {
    @JavascriptInterface
    fun resize(height: Float) {
        webView.post {
            val h = Math.floor((height * webView.context.resources.displayMetrics.density).toDouble()).toInt()
            setHeight(h)
            webView.settings.javaScriptEnabled = false
        }
    }
}

// Try 2

private val heightWebViewJSScript = "(function() {var pageHeight = 0;function findHighestNode(nodesList) { for (var i = nodesList.length - 1; i >= 0; i--) {if (nodesList[i].scrollHeight && nodesList[i].clientHeight) {var elHeight = Math.max(nodesList[i].scrollHeight, nodesList[i].clientHeight);pageHeight = Math.max(elHeight, pageHeight);}if (nodesList[i].childNodes.length) findHighestNode(nodesList[i].childNodes);}}findHighestNode(document.documentElement.childNodes); return pageHeight;})()"
private fun getHeightWithJavascriptEvaluation(webView: WebView, setHeight: (Int)->Unit) {
    webView.settings.javaScriptEnabled = true
    webView.webViewClient = object : WebViewClient() {
        override fun onPageFinished(view: WebView, url: String) {
            webView.evaluateJavascript(heightWebViewJSScript) { height ->
                val h = Math.floor((height.toInt() * webView.context.resources.displayMetrics.density).toDouble()).toInt()
                setHeight(h)
                webView.settings.javaScriptEnabled = false
            }
        }
    }
}

// Try 3

private fun getHeightWithViewTreeObserver(webView: WebView, setHeight: (Int)->Unit) {
        webView.viewTreeObserver.addOnPreDrawListener(object : ViewTreeObserver.OnPreDrawListener {
            override fun onPreDraw(): Boolean {
                val height = webView.measuredHeight
                if (height != 0) {
                    val h = Math.floor((height * webView.context.resources.displayMetrics.density).toDouble()).toInt()
                    setHeight(height)
                    webView.viewTreeObserver.removeOnPreDrawListener(this)
                }
                return false
            }
        })
}

// Try 4

private fun getHeightWithLayoutChangeListener(webView: WebView, setHeight: (Int)->Unit) {
    webView.addOnLayoutChangeListener{ _, _, _, _, _, _, _, _, _ ->
        setHeight(webView.contentHeight)
    }
}

```
