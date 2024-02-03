---
title: Enable CORS globally in spring boot
description: How spring boot enable CORS globally
date: 2024-02-03T12:29:15+07:00
updated: 2024-02-03T12:48:58+07:00
categories: [programming]
tags: [java, kotlin]
keywords: [java, cors, "spring boot", security]
thumbnail: https://github.com/dimaslanjaka/source-posts/assets/12471057/c5f5e304-9e64-4cc0-b763-8df4020fc83d
---

To enable Cross-Origin Resource Sharing (CORS) globally in a Spring Boot application with Spring Security,
you can configure CORS in your security configuration class. 
Here's an example of codes how you can do this:

```java
import java.util.List;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

@Configuration
@EnableWebSecurity
public class SecurityConfig {
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        // disable CSRF (optional)
        http.csrf(AbstractHttpConfigurer::disable);

        // enable CORS globally
        // by default uses a Bean by the name of corsConfigurationSource
        http.cors(Customizer.withDefaults());

        // your others http configuration here

        // build the http configurations
        return http.build();
    }

    @Bean
    CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedHeaders(List.of("*"));
        configuration.setAllowedOrigins(List.of("*"));
        configuration.setAllowedMethods(List.of("*"));
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }
}
```

[reference](https://stackoverflow.com/a/76319932/6404439)

**Description of `CorsConfiguration` methods**

-   **setAllowedHeaders**-> you have to specify which parameters are allowed to be sent to the backend services through the front-end app, for example, if you are using Bearer/Basic Token Authorization methods, you need to pass your JWT-Token through the "Authorization" header. So you need to make sure that backed would accept this data accordingly and for this purpose, you must put "Authorization" in the list of Allowed-Headers.

-   **setAllowedMethods**-> Do not forget to put "OPTIONS" method in the list for Pre-flight process. Don't worry, [read more here!](https://developer.mozilla.org/en-US/docs/Glossary/Preflight_request)

-   **setAllowCredentials**-> If you are using Authorization header, set it True.

-   **setExposedHeaders**-> If you are returning data through Response Headers, you need to specify them here. for example, some APIs are designed to return Authorization token after success /authentication through Response Headers. Thus, the related header needs to be exposed accordingly.

-   **setAllowedOrigins**-> You must specify the domains that are eligible to send requests to your backend applications. for example, if your application is hosted on <https://penguin.com> and your APIs are on <https://api.penguin.com>, you need to allow "https://penguing.com" to send requests to your backend. Also, you are able to pass wildcard (*) to allow any domains to send requests to your backend. But it's recommended to not use "any" unless you are providing public APIs or you are deploying in the non-production environments.

## Customize

You can customize header allowed like `Authorization`, request methods, etc. Below is example of codes:

```java
CorsConfiguration corsConfiguration = new CorsConfiguration();
// allow cors when these headers sent
corsConfiguration.setAllowedHeaders(List.of("Authorization", "Cache-Control", "Content-Type"));
// allow for all hostname of CORS came from,
// or you can specify hostnames List.of("example.com", "sub.example.com")
corsConfiguration.setAllowedOrigins(List.of("*"));
// allow only these request method
corsConfiguration.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE", "PUT","OPTIONS","PATCH", "DELETE"));
// allow credentials
corsConfiguration.setAllowCredentials(true);
// expose Authorization header
corsConfiguration.setExposedHeaders(List.of("Authorization"));
```

[reference](https://stackoverflow.com/a/66590699/6404439)

## Conclusion

Now you need to customize the CORS configuration based on your need. Adjust the configuration according to your specific needs. Ensure that your Spring Boot application has the necessary dependencies, such as spring-boot-starter-security and spring-boot-starter-web.

![spring security with cors](https://github.com/dimaslanjaka/source-posts/assets/12471057/c5f5e304-9e64-4cc0-b763-8df4020fc83d)
