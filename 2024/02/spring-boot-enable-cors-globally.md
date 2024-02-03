---
title: Enable CORS globally in spring boot
description: How spring boot enable CORS globally
date: 2024-02-03T12:29:15+07:00
updated: 2024-02-03T12:29:15+07:00
categories: [programming]
tags: [java, kotlin]
keywords: [java, cors, "spring boot", security]
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
