---
title: spring Content-Type 'application/x-www-form-urlencoded;charset=UTF-8' is not supported
date: 2024-02-08T01:02:20+07:00
categories: [programming]
tags: [java, kotlin]
updated: 2024-02-08T01:09:50+07:00
---

Usually, the message "Content-Type 'application/x-www-form-urlencoded;charset=UTF-8' is not supported" suggests that there is a problem with the content type that was given in the request header. This issue frequently happens while using an API or web application.

The following actions can be taken to troubleshoot and fix this problem:

## Post data model type

Modify your post data model type, for example `ProxyAddModel.java`

```java
package web.models;

import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ProxyAddModel {
    @NotNull(message = "Proxies should not be empty")
    public String proxies;
}
```

## Controller method

Modify your controller method to accept `Content-Type: application/x-www-form-urlencoded;` using `consumes = { MediaType.APPLICATION_FORM_URLENCODED_VALUE }`, and add jakarta validation `@Valid` before Post data model type.

Below here working code:

```java
package web.proxy;

import java.util.List;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import com.fasterxml.jackson.databind.JsonNode;
import jakarta.validation.Valid;
import utility.proxy.ProxyModel;
import utility.proxy.ProxyUtils;
import web.models.AjaxResponse;
import web.models.ProxyAddModel;

@Controller
public class ProxyList {
    @PostMapping(value = { "/proxy/add" },
            consumes = { MediaType.APPLICATION_FORM_URLENCODED_VALUE })
    @ResponseBody
    public ResponseEntity<JsonNode> addReceiver(@Valid ProxyAddModel postBody) {
        if (postBody != null && postBody.proxies != null) {
            ProxyUtils proxyUtils = new ProxyUtils();
            proxyUtils.fromLocal(postBody.proxies);
        }
        // return "redirect:/proxy?success=add";
        return new AjaxResponse(false, "proxies added").toHttpResponse();
    }
}
```
