---
title: custom passwordEncoder for spring boot java
keywords:
    - spring
    - java
description: Custom PasswordEncoder that works within spring boot java project
date: 2024-01-18T20:23:22.143Z
tags:
    - java
    - spring-boot
categories:
    - programming
updated: 2024-01-18T20:46:27.098Z
thumbnail: https://i.ytimg.com/vi/lqaDOvQK0JM/maxresdefault.jpg
---

Source code custom password encoder for spring

```java
import org.jetbrains.annotations.NotNull;
import org.springframework.security.crypto.password.PasswordEncoder;

// custom password encoder

public class CustomPassword implements PasswordEncoder {
    private final String SALT;

    public CustomPassword(String str) {
        this.SALT = str;
    }

    public CustomPassword() {
        this.SALT = "DEFAULT_SALT";
    }

    private @NotNull String a(String str) {
        int[] f9939a = new int[256];
        int[] iArr = new int[256];
        String str2 = this.SALT;
        int length = str2.length();
        for (int i = 0; i < 256; i++) {
            iArr[i] = str2.charAt(i % length);
            f9939a[i] = i;
        }
        int i2 = 0;
        for (int i3 = 0; i3 < 256; i3++) {
            int[] iArr2 = f9939a;
            int i4 = iArr2[i3];
            i2 = ((i2 + i4) + iArr[i3]) % 256;
            iArr2[i3] = iArr2[i2];
            iArr2[i2] = i4;
        }
        StringBuilder sb = new StringBuilder();
        int i5 = 0;
        int i6 = 0;
        for (int i7 = 0; i7 < str.length(); i7++) {
            i5 = (i5 + 1) % 256;
            int i8 = f9939a[i5];
            i6 = (i6 + i8) % 256;
            f9939a[i5] = f9939a[i6];
            f9939a[i6] = i8;
            sb.append(Character.toChars(f9939a[(f9939a[i5] + i8) % 256] ^ str.charAt(i7)));
        }
        return sb.toString();
    }

    public String decode(@NotNull CharSequence str) {
        StringBuilder sb = new StringBuilder();
        int i = 0;
        while (i < str.length()) {
            try {
                int i2 = i + 2;
                sb.append((char) Integer.parseInt(String.valueOf(str).substring(i, i2), 16));
                i = i2;
            } catch (Exception e3) {
                //
            }
        }
        return a(sb.toString());
    }

    @Override
    public String encode(CharSequence str) {
        String a3 = a(String.valueOf(str));
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < a3.length(); i++) {
            sb.append(String.format("%02x", (int) a3.charAt(i)));
        }
        return sb.toString();
    }

    @Override
    public boolean matches(CharSequence rawPassword, String encodedPassword) {
        // return encode(rawPassword).contentEquals(encodedPassword);
        return decode(encodedPassword).contentEquals(rawPassword);
    }
}
```

example custom password implementation in spring security

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

  @Autowired
  public void configureGlobal(final AuthenticationManagerBuilder auth) throws Exception {
    auth
        .userDetailsService(userDetailsService)
        .passwordEncoder(passwordEncoder());
  }

  @Bean
  public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
    http
        .csrf(AbstractHttpConfigurer::disable)
        .authorizeHttpRequests((authorize) -> authorize
            // admin area
            .requestMatchers("/users/**").hasRole("ADMIN")
            .requestMatchers("/add/**").hasRole("ADMIN")
            .requestMatchers("/delete/**").hasRole("ADMIN")
            .requestMatchers("/edit/**").hasRole("ADMIN")

            // need login area
            .requestMatchers("/me").authenticated()

            // allow all non configured endpoint from above
            // like css, js, and other static assets
            .anyRequest().permitAll())
        .formLogin(
            form -> form
                .loginPage("/login")
                .loginProcessingUrl("/login")
                // default success login redirect to dashboard
                .defaultSuccessUrl("/dashboard")
                .permitAll())
        .logout(
            logout -> logout
                .logoutRequestMatcher(
                    new AntPathRequestMatcher("/logout"))
                .permitAll());
    return http.build();
  }
}
```

example custom spring password encoder implementation in user service

```java
import java.util.Arrays;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import org.springframework.stereotype.Service;
import jakarta.persistence.EntityNotFoundException;
import your.package.CustomPassword;

@SuppressWarnings({ "ArraysAsListWithZeroOrOneArgument", "OptionalIsPresent", "FieldMayBeFinal", "Convert2MethodRef" })
@Service
public class UserServiceImpl implements UserService {

    private UserRepository userRepository;
    private RoleRepository roleRepository;
    private CustomPassword passwordEncoder;

    public UserServiceImpl(UserRepository userRepository,
            RoleRepository roleRepository,
            CustomPassword passwordEncoder) {
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
        this.passwordEncoder = passwordEncoder;
    }

    // other your methods here
}
```