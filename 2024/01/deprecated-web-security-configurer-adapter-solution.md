---
title: Deprecated WebSecurityConfigurerAdapter Solution
description: Solve WebSecurityConfigurerAdapter deprecated in spring boot
date: 2024-01-19T13:51:33.635Z
updated: 2024-01-19T19:54:20.464Z
categories:
  - programming
tags:
  - java
  - spring-boot
thumbnail: https://opengraph.githubassets.com/65fe56b7c2a4be082a5dffe7a9833511b6d4d1f637ac0a06b3ee130392b7d963/spring-projects/spring-security/issues/10822
---

How to solve **Deprecated WebSecurityConfigurerAdapter** in spring boot security `>= 5.7.0-M2`

## SecurityConfiguration method structures

Spring Security `v5.7.0-M2` deprecates **WebSecurityConfigurerAdapter** for customizing HTTP security.
 Developers are strongly encouraged to prioritize content-based security configuration over extension classes.
 This change focuses on adapting to newer practices.

### Old codes

```java
@Configuration
@EnableWebSecurity
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        // configure HTTP security...
    }

    @Override
    public void configure(WebSecurity web) throws Exception {
        // configure Web security...
    }
}
```

### New codes

To resolve this issue, replace the WebSecurityConfigurerAdapter extension with the __SecurityFilterChain__ and __WebSecurityCustomizer__ bean declarations as shown below.

```java
@Configuration
public class SecurityConfiguration {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
      // configure HTTP security...
    }

    @Bean
    public WebSecurityCustomizer webSecurityCustomizer() {
      // configure Web security...
    }
}
```

## Configure http security

We are currently moving our code, including security configuration, to a component-based approach.
 Below is the code that extends the WebSecurityConfigurerAdapter class.

### Old codes

```java
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class WebSecurity extends WebSecurityConfigurerAdapter {
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.cors().and().csrf().disable()
                .authorizeHttpRequests()
                .requestMatchers(HttpMethod.POST, SecurityConstants.SIGN_UP_URL).permitAll()
                .anyRequest().authenticated().and()
                .addFilter(getAuthenticationFilter())
                .addFilter(new AuthorizationFilter(authenticationManager(), userRepository))
                .sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS);
    }
    // Configure AuthenticationManagerBuilder
    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(userDetailsService).passwordEncoder(bCryptPasswordEncoder);
    }
    protected AuthenticationFilter getAuthenticationFilter() throws Exception {
        final AuthenticationFilter filter = new AuthenticationFilter(authenticationManager());
        filter.setFilterProcessesUrl("/users/login");
        return filter;
    }
}
```

### New codes
Below is the same code without extending the WebSecurityConfigurerAdapter class in new spring boot API.

```java
@Configuration
@EnableWebSecurity
@EnableMethodSecurity(prePostEnabled = true)
public class WebSecurity {
    // expose authentication manager to @Controller
    @Bean
    public AuthenticationManager authenticationManager(HttpSecurity http) throws Exception {
      return http.getSharedObject(AuthenticationManagerBuilder.class)
          .build();
    }
    @Bean
    public SecurityFilterChain configure(HttpSecurity http) throws Exception {
        // Configure AuthenticationManagerBuilder
        AuthenticationManagerBuilder authenticationManagerBuilder = http.getSharedObject(AuthenticationManagerBuilder.class);
        authenticationManagerBuilder.userDetailsService(userDetailsService).passwordEncoder(bCryptPasswordEncoder);
        // Get AuthenticationManager
        AuthenticationManager authenticationManager = authenticationManagerBuilder.build();
        http
                .cors(withDefaults())
                .csrf((csrf) -> csrf.disable())
                .authorizeHttpRequests((authz) -> authz
                .requestMatchers(HttpMethod.POST, SecurityConstants.SIGN_UP_URL).permitAll()
                .anyRequest().authenticated())

                .authenticationManager(authenticationManager)
                .addFilter(authenticationFilter)
                .addFilter(new AuthorizationFilter(authenticationManager))
                .sessionManagement((session) -> session
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS));
        return http.build();
    }
    protected AuthenticationFilter getAuthenticationFilter(AuthenticationManager authenticationManager) throws Exception {
        final AuthenticationFilter filter = new AuthenticationFilter(authenticationManager);
        filter.setFilterProcessesUrl("/users/login");
        return filter;
    }
    @Bean
    CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOrigins(Arrays.asList("*"));
        configuration.setAllowedMethods(Arrays.asList("POST", "PUT", "GET", "OPTIONS", "DELETE", "PATCH")); // or simply "*"
        configuration.setAllowedHeaders(Arrays.asList("*"));
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }
}
```