---
title: spring Content-Type 'application/x-www-form-urlencoded;charset=UTF-8' is not supported
date: 2024-02-08T01:02:20+07:00
categories: [programming]
tags: [java, kotlin]
updated: 2024-02-08T01:09:50+07:00
thumbnail: https://github.com/dimaslanjaka/source-posts/assets/12471057/3fb94ad5-f947-408e-a180-31bc2d286a8c
---

Usually, the message "Content-Type 'application/x-www-form-urlencoded;charset=UTF-8' is not supported" suggests that there is a problem with the content type that was given in the request header. This issue frequently happens while using an API or web application. The errors log like sample below:

```log
21-06-10 15:32:10.363 ERROR [-nio-8080-exec-8] c.e.pay.common.ResponseErrorHandler :50 - Base Exception caughtorg.springframework.web.HttpMediaTypeNotSupportedException: Content type 'application/x-not supported at org.springframework.web.servlet.mvc.method.annotation.AbstractMessageConverterMethodArgumentResolver.readWithMessageConverters(AbstractMessageConverterMethodArgumentResolver.java:235) at org.springframework.web.servlet.mvc.method.annotation.RequestResponseBodyMethodProcessor.readWithMessageConverters(RequestResponseBodyMethodProcessor.java:147) at org.springframework.web.servlet.mvc.method.annotation.RequestResponseBodyMethodProcessor.resolveArgument(RequestResponseBodyMethodProcessor.java:125) at org.springframework.web.method.support.HandlerMethodArgumentResolverComposite.resolveArgument(HandlerMethodArgumentResolverComposite.java:99) at org.springframework.web.method.support.InvocableHandlerMethod.getMethodArgumentValues(InvocableHandlerMethod.java:161) at org.springframework.web.method.support.InvocableHandlerMethod.invokeForRequest(InvocableHandlerMethod.java:128) at org.springframework.web.servlet.mvc.method.annotation.ServletInvocableHandlerMethod.invokeAndHandle(ServletInvocableHandlerMethod.java:110) at org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerAdapter.invokeHandlerMethod(RequestMappingHandlerAdapter.java:832) at org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerAdapter.handleInternal(RequestMappingHandlerAdapter.java:743) at org.springframework.web.servlet.mvc.method.AbstractHandlerMethodAdapter.handle(AbstractHandlerMethodAdapter.java:85) at org.springframework.web.servlet.DispatcherServlet.doDispatch(DispatcherServlet.java:961) at org.springframework.web.servlet.DispatcherServlet.doService(DispatcherServlet.java:895) at org.springframework.web.servlet.FrameworkServlet.processRequest(FrameworkServlet.java:967) at org.springframework.web.servlet.FrameworkServlet.doPost(FrameworkServlet.java:869) at javax.servlet. at org.springframework.web.servlet.FrameworkServlet.service(FrameworkServlet.java:843) at javax.servlet. at org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:292) at org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:207) at org.apache.tomcat.websocket.server.WsFilter.doFilter(WsFilter.java:52) at org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:240) at org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:207) at org.springframework.web.filter.CharacterEncodingFilter.doFilterInternal(CharacterEncodingFilter.java:121) at org.springframework.web.filter.OncePerRequestFilter.doFilter(OncePerRequestFilter.java:107) at org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:240) at org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:207) at org.apache.catalina.core.StandardWrapperValve.invoke(StandardWrapperValve.java:212) at org.apache.catalina.core.StandardContextValve.invoke(StandardContextValve.java:106) at org.apache.catalina.authenticator.AuthenticatorBase.invoke(AuthenticatorBase.java:502) at org.apache.catalina.core.StandardHostValve.invoke(StandardHostValve.java:141) at org.apache.catalina.valves.ErrorReportValve.invoke(ErrorReportValve.java:79) at org.apache.catalina.core.StandardEngineValve.invoke(StandardEngineValve.java:88) at org.apache.catalina.connector.CoyoteAdapter.service(CoyoteAdapter.java:528) at org.apache.coyote. at org.apache.coyote.AbstractProtocol$AbstractConnectionHandler.process(AbstractProtocol.java:687) at org.apache.tomcat.util.net.NioEndpoint$SocketProcessor.doRun(NioEndpoint.java:1520) at org.apache.tomcat.util.net.NioEndpoint$SocketProcessor.run(NioEndpoint.java:1476) at java.base/java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1128) at java.base/java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:628) at org.apache.tomcat.util.threads.TaskThread$WrappingRunnable.run(TaskThread.java:61) at java.base/java.lang.Thread.run(Thread.java:835)
```

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

## Conclusion

now test send form post to your endpoint.

![spring Content-Type application/x-www-form-urlencoded;charset=UTF-8 is not supported](https://github.com/dimaslanjaka/source-posts/assets/12471057/3fb94ad5-f947-408e-a180-31bc2d286a8c)
