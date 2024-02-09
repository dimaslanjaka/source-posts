---
title: Boostrap 5 Color Theme Switcher
description: Color mode toggler for Bootstrap 5.3.0+
date: 2024-02-09T22:04:25+07:00
tags: [html, css, javascript]
categories: [programming]
---

How to create **Color Mode Switch for Bootstrap 5**

Bootstrap 5 does not come with a built-in theme switcher but you can easily implement one using Use JavaScript and CSS.
Here's a simple example of how you can create a Bootstrap 5 color theme selector:

1. Includes Bootstrap CSS from CDN.
2. Add an empty `<style/>` tag with attribute `data-bs-theme="light|dark"` where you will automatically insert the CSS of the selected theme.
3. Create a toggle switch using the Bootstrap form toggle component.

```html
<button class="btn btn-sm btn-secondary" data-bs-theme-value="dark">Dark</button>
<button class="btn btn-sm btn-primary" data-bs-theme-value="light">Light</button>
```

4. Use JavaScript to track changes on the switch and update the CSS accordingly.

main of this trick is

```
<div data-bs-theme="light|dark"><!-- your html code here --></div>
```

and you should add `bg-[dark|light]` or `text-[light|dark]` on wrapper to get switcher works

### HTML

```html
<div data-bs-theme="light"><!-- here the indicator -->
  <div class="container mt-3">
    <div class="mb-2">
      switcher
      <button class="btn btn-sm btn-secondary" data-bs-theme-value="dark">Dark</button>
      <button class="btn btn-sm btn-primary" data-bs-theme-value="light">Light</button>
      <button class="btn btn-sm btn-danger" type="button" onClick="refreshPage()">Refresh</button>
    </div>

    <div class="text-light bg-dark p-4" id="description">
      <h1 class="text-center">Boostrap 5.3 Color Theme Switcher</h1>
      main of this trick is
      <pre class="m-2"><code>&lt;div data-bs-theme=&quot;light|dark&quot;&gt;&lt;!-- your html code here --&gt;&lt;/div&gt;</code></pre>
      and you should add <kbd>bg-[dark|light]</kbd> or <kbd>text-[light|dark]</kbd> on wrapper to get switcher works
    </div>

    <h2>Override class <kbd>*-light</kbd></h2>
    <table class="table table-light">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td colspan="2">Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </table>

    <div class="card" style="width: 18rem;">
      <img src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-social.png" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
</div>
```

### Javascript

```js
"use strict";

/*!
 * Color mode toggler for Bootstrap's
 * Copyright 2011-2023 The Bootstrap Authors
 * Licensed under the Creative Commons Attribution 3.0 Unported License.
 * Modified by L3n4r0x
 */

(function () {
  const getPreferredTheme = () => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      return storedTheme;
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  };

  function setTheme(theme) {
    let value = "light";
    if (
      theme === "auto" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      value = "dark";
    } else {
      value = theme;
    }

    // hide button switcher
    if (value == "dark") {
      // show light button
      document
        .querySelector("[data-bs-theme-value=dark]")
        .classList.add("d-none");
      document
        .querySelector("[data-bs-theme-value=light]")
        .classList.remove("d-none");
    } else if (value == "light") {
      document
        .querySelector("[data-bs-theme-value=light]")
        .classList.add("d-none");
      document
        .querySelector("[data-bs-theme-value=dark]")
        .classList.remove("d-none");
    }

    const wrapper = document.querySelectorAll("[data-bs-theme]");
    // change value data-bs-theme
    wrapper.forEach((el) => {
      el.setAttribute("data-bs-theme", value);
    });

    const isDark = value === "dark";
    const elements = Array.from(document.querySelectorAll("[class*=-light]"))
      .concat(Array.from(document.querySelectorAll("[class*=-white]")))
      .concat(Array.from(document.querySelectorAll("[class*=-dark]")));
    const regex = /(-(light|white|dark)$)/g;
    elements.forEach((el) => {
      const className = el.className.replace(
        regex,
        isDark ? "-dark" : "-light"
      );
      el.setAttribute("class", className);
    });
  }

  // auto switch theme (uncomment)
  setTheme(getPreferredTheme());

  // listen click
  document.querySelectorAll("[data-bs-theme-value]").forEach(function (toggle) {
    toggle.addEventListener("click", function () {
      const theme = toggle.getAttribute("data-bs-theme-value");
      localStorage.setItem("theme", theme);
      setTheme(theme);
    });
  });
})();

function refreshPage() {
  const a = "reload",
    b = "location";
  window[b][a]();
}
```

## Conclusion

You can customize styles in the JavaScript code to match your desired color theme for light and dark modes.
Adjust background color, text color, and other styles as needed.

### Live result Boostrap 5 Color Theme Switcher

{% codepen https://codepen.io/dimaslanjaka/pen/eYPXvOL %}
