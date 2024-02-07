---
title: Include livereload in spring boot web
date: 2024-02-09T09:32:14+07:00
categories: [programming]
tags: [java, kotlin]
---

LiveReload is a tool that automatically reloads your web application whenever you alter the source code or static resources. To integrate LiveReload into a Spring Boot web application, follow these steps:

## Add LiveReload Server as a Dependency

Add the LiveReload server as a dependency to your project. If you use Maven, you can include the following dependencies in your `pom.xml` file:

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-devtools</artifactId>
    <optional>true</optional>
</dependency>
```

If you're using Gradle, include the following in your build.gradle file:

```groovy
dependencies {
    implementation 'org.springframework.boot:spring-boot-devtools'
}
```

## Enable LiveReload

Enable LiveReload in either `application.properties` or `application.yml`.
Open the `src/main/resources/application.properties` or `src/main/resources/application.yml` file and add the following property:

### PROPERTIES

```properties
spring.devtools.livereload.enabled=true
spring.devtools.livereload.livereload=true
```

### YAML

```yml
spring:
    devtools:
        restart:
            enabled: true
        livereload:
            enabled: true
```

## Install livereload into your html

Call the livereload javascript into your html template. For example using `thymeleaf`:

```html
  <script th:inline="javascript">
    (function () {
      const port = /*[(${@environment.getProperty('server.port')})]*/ '8080';
      if (location.port == port && location.hostname == 'localhost') {
        const script = document.createElement('script');
        script.src = 'http://localhost:35729/livereload.js';
        script.async = true;
        document.body.appendChild(script);
      }
    })();
  </script>
```

## Open the Application in the Browser:

Launch your program in the browser.

Now, whenever you make changes to your code or resources, the LiveReload server will detect them and reload the browser to reflect the changes.

Keep in mind that `spring-boot-devtools` is only advised for development and should not be used in production. Also, keep in mind that LiveReload may not operate completely in all cases, particularly if you're utilizing sophisticated frameworks or setups.
