---
title: Include livereload in spring boot web
date: 2024-02-09T09:32:14+07:00
---

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
