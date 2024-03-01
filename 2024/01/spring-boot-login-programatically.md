---
title: Spring Boot login programmatically
description: How to implement login programmatically in spring boot java
date: 2024-01-18T20:56:37.270Z
tags:
    - spring-boot
    - java
categories:
    - programming
updated: 2024-01-19T19:45:48+07:00
keywords:
    - spring boot
thumbnail: https://javadeveloperzone.com/wp-content/uploads/2018/04/spring-boot-set-active-profile-programmatically-1024x488.jpg
---

**Important**:
First you need a [custom password encoder](/2024/01/spring-boot-custom-passwordEncoder.html) for your spring boot project, so you can log in using your user credentials. [READ HERE - custom password encoder for spring boot](/2024/01/spring-boot-custom-passwordEncoder.html).

## Setup Spring Security
Expose context of `org.springframework.security.authentication.AuthenticationManager` from security config class to be used in `LoginController`

```java
import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

@Configuration
@EnableWebSecurity
public class SecurityConfig {
  @Autowired
  private UserDetailsService userDetailsService;
  @Autowired
  DataSource dataSource;

  @Bean
  public static CustomPassword passwordEncoder() {
    return new CustomPassword("passwordEncoder");
  }

  @Bean
  public AuthenticationManager authenticationManager(HttpSecurity http) throws Exception {
    return http.getSharedObject(AuthenticationManagerBuilder.class)
        .build();
  }
}
```

## Setup Controller
add custom fields to your `@Controller` class like my LoginController below.

```java
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.stereotype.Controller;
import org.springframework.beans.factory.annotation.Autowired;

@Controller
public class LoginController {
  @Autowired
  private UserService userService;
  private CustomPassword passwordEncoder;
  private AuthenticationManager authenticationManager;

  public LoginController(UserService userService, CustomPassword passwordEncoder, AuthenticationManager authenticationManager) {
      this.userService = userService;
      this.passwordEncoder = passwordEncoder;
      this.authenticationManager = authenticationManager;
  }
}
```

## Create endpoint mapping

create new url mapping for authenticate the given identifier to valid session token.

```java
@RequestMapping(value = "/login/{uuid}", produces = MediaType.APPLICATION_JSON_VALUE)
@ResponseBody
public String loginUUID(@PathVariable String uuid, HttpServletRequest request, HttpServletResponse response) {
    JSONObject jsonObject = new JSONObject();
    Optional<User> find = Optional.ofNullable(userService.findUserByEmail(uuid));
    SecurityContext securityContext = SecurityContextHolder.getContext();
    if (find.isPresent()) {
        User user = find.get();
        String password = passwordEncoder.decode(user.getPassword());
        String email = user.getEmail();
        jsonObject.put("email", user.getEmail());
        try {
            UsernamePasswordAuthenticationToken loginToken = new UsernamePasswordAuthenticationToken(email,
                    password);
            Authentication authenticatedUser = authenticationManager.authenticate(loginToken);
            securityContext.setAuthentication(authenticatedUser);
            HttpSession session = request.getSession(true);
            session.setAttribute("SPRING_SECURITY_CONTEXT", securityContext);
        } catch (Exception e) {
            System.err.println("Error while login");
        }
    }
    Authentication authentication = securityContext.getAuthentication();
    if (authentication != null) {
        jsonObject.put("is login", authentication.isAuthenticated());
        jsonObject.put("authorities", authentication.getAuthorities());
        jsonObject.put("authorities has admin", authentication.getAuthorities().stream()
                .anyMatch(a -> a.getAuthority().toLowerCase(Locale.ROOT).contains("admin")));
    }
    return jsonObject.toString();
}
```

above codes will return content-type: application/json

## Full codes sample
full my sample codes login programmatically with [custom password encoder for spring boot](/2024/01/spring-boot-custom-passwordEncoder.html).

```java
package web.user;

import java.util.Locale;
import java.util.Optional;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import web.CustomPassword;

@Controller
public class LoginController {
    @Autowired
    private UserService userService;
    private CustomPassword passwordEncoder;
    private AuthenticationManager authenticationManager;

    public LoginController(UserService userService, CustomPassword passwordEncoder,
            AuthenticationManager authenticationManager) {
        this.userService = userService;
        this.passwordEncoder = passwordEncoder;
        this.authenticationManager = authenticationManager;
    }

    @RequestMapping(value = "/login/{uuid}", produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    public String loginUUID(@PathVariable String uuid, HttpServletRequest request, HttpServletResponse response) {
        JSONObject jsonObject = new JSONObject();
        Optional<User> find = Optional.ofNullable(userService.findUserByUuid(uuid));
        SecurityContext securityContext = SecurityContextHolder.getContext();
        if (find.isPresent()) {
            User user = find.get();
            String password = passwordEncoder.decode(user.getPassword());
            String email = user.getEmail();
            jsonObject.put("email", user.getEmail());
            try {
                UsernamePasswordAuthenticationToken loginToken = new UsernamePasswordAuthenticationToken(email,
                        password);
                Authentication authenticatedUser = authenticationManager.authenticate(loginToken);
                securityContext.setAuthentication(authenticatedUser);
                HttpSession session = request.getSession(true);
                session.setAttribute("SPRING_SECURITY_CONTEXT", securityContext);
            } catch (Exception e) {
                System.err.println("Error while login");
            }
        }
        Authentication authentication = securityContext.getAuthentication();
        if (authentication != null) {
            jsonObject.put("is login", authentication.isAuthenticated());
            jsonObject.put("authorities", authentication.getAuthorities());
            jsonObject.put("authorities has admin", authentication.getAuthorities().stream()
                    .anyMatch(a -> a.getAuthority().toLowerCase(Locale.ROOT).contains("admin")));
        }
        return jsonObject.toString();
    }
}
```

## Conclusion

this are important part for **Spring Boot login programmatically**, for full spring application project with **Spring Boot login programmatically** implementation you can view my sample project on [Github](https://github.com/dimaslanjaka/Java/tree/master/Spring%20User%20Management).