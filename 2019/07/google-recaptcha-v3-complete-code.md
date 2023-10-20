---
author:
  nick: Dimas Lanjaka Kumala Indra
  link: https://www.blogger.com/profile/17555754514989936273
  email: noreply@blogger.com
categories:
  - programming
comments: true
date: 2019-07-12T12:36:00.001Z
description: "Google Recaptcha V3 Complete Code Requirements jQuery if not it
  will automated added into pages if typeof jQuery == undefined window.jQuery "
lang: en
tags:
  - javascript
  - html
  - php
thumbnail: https://res.cloudinary.com/dimaslanjaka/image/fetch/https://i.ytimg.com/vi/tbvxFW4UJdU/maxresdefault.jpg
title: "[JS] Google Recaptcha V3 Complete Code"
type: post
updated: 2023-09-02T23:34:53.000Z
wordcount: 1605

---

![grecaptcha](https://res.cloudinary.com/dimaslanjaka/image/fetch/https://i.ytimg.com/vi/tbvxFW4UJdU/maxresdefault.jpg)

**Requirements:**

1.  jQuery (if not it will automated added into pages)

```js
if (typeof jQuery == 'undefined' || !window.jQuery) {
  var hs = document.createElement('script');
  hs.type = 'text/javascript';
  hs.async = true;
  hs.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js';
  document.getElementsByTagName('head')[0].appendChild(hs);
  document.getElementsByTagName('body')[0].appendChild(hs);
  document.head.appendChild(hs);
  document.body.appendChild(hs);
}
```

2.  Recaptcha Site Key And Secret (backend): [Get Here](https://www.google.com/recaptcha/admin/)

```js
//Set site key as global variable
const g_site_key = 'YOUR_SITE_KEY';
```

3.  Main Code

```js
//loader
(function () {
  submitDisable();
  download_script(
    "https://www.google.com/recaptcha/api.js?render=" +
      g_site_key +
      "&render=explicit",
    function () {
      grecaptcha.ready(function () {
        gexec();
      });
    },
  );
})();
//function callback
function gexec() {
  //also refresh function
  grecaptcha.execute(g_site_key, { action: "homepage" }).then(function (token) {
    recaptcha_insert_token(token); //insert element token into form
  });
}
//function add recaptcha elements
function recaptcha_insert_token(token) {
  if (typeof jQuery == "undefined") {
    console.log("JQuery Not Loaded");
  } else {
    var f = $("form"),
      fg = f.find('[name="g-recaptcha-response"]');
    if (fg.length === 0) {
      $(
        '<input type="hidden" readonly value="' +
          token +
          '" name="g-recaptcha-response">',
      ).appendTo(f);
    } else {
      fg.val(token);
    }
  }
}
```

Complete Code
-------------

**HTML**

```html
<!--button refresh token (example)-->
<button class="btn-block btn" onclick="gexec()">Refresh</button>
```

**Javascript**

```js
//load jQuery if not exists (automated)
if (typeof jQuery == "undefined" || !window.jQuery) {
  var hs = document.createElement("script");
  hs.type = "text/javascript";
  hs.async = true;
  hs.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js";
  document.getElementsByTagName("head")[0].appendChild(hs);
  document.getElementsByTagName("body")[0].appendChild(hs);
  document.head.appendChild(hs);
  document.body.appendChild(hs);
}
//set site key
const g_site_key = "YOUR_SITE_KEY";
//loader
(function () {
  submitDisable();
  download_script(
    "https://www.google.com/recaptcha/api.js?render=" +
      g_site_key +
      "&render=explicit",
    function () {
      grecaptcha.ready(function () {
        gexec();
      });
    },
  );
})();
//function callback
function gexec() {
  //also refresh function
  grecaptcha.execute(g_site_key, { action: "homepage" }).then(function (token) {
    recaptcha_insert_token(token); //insert element token into form
  });
}
//function add recaptcha elements
function recaptcha_insert_token(token) {
  if (typeof jQuery == "undefined") {
    console.log("JQuery Not Loaded");
  } else {
    var f = $("form"),
      fg = f.find('[name="g-recaptcha-response"]');
    if (fg.length === 0) {
      $(
        '<input type="hidden" readonly value="' +
          token +
          '" name="g-recaptcha-response">',
      ).appendTo(f);
    } else {
      fg.val(token);
    }
  }
}
```

**PHP (backend)**

```php
<?php
function recaptcha_verify($secret)
{
    if (isset($_POST["g-recaptcha-response"])) {
        $response = $_POST["g-recaptcha-response"];
        $remoteip = $this->getUIP();
        $secret = $this->recaptcha_s;
        $g_response = json_decode(
            file_get_contents(
                "https://www.google.com/recaptcha/api/siteverify?secret=" .
                    $secret .
                    "&response=" .
                    $response .
                    "&remoteip=" .
                    $remoteip
            ),
            true
        );
        if (isset($g_response["success"]) && true === $g_response["success"]) {
            return true;
        } else {
            return false;
        }
    }
}

if (isset($_POST["login"])) {
    //example if you have post named login
    if (recaptcha_verify("YOUR_SECRET_KEY_HERE") !== false) {
        /* Recaptcha Success */
    } else {
        /* Recaptcha Failed */
    }
}
```

Google ReCaptcha V3 Full Example at Codepen
-----------------------

<div class="codepen" data-default-tab="js,result" data-height="265" data-pen-title="Complete Google recaptcha v3" data-slug-hash="qzgYmp" data-theme-id="0" data-user="dimaslanjaka" style="border: 2px solid; box-sizing: border-box; display: flex; height: 265px; margin: 1em 0; padding: 1em;">    See the Pen <a href="https://codepen.io/dimaslanjaka/pen/qzgYmp/" rel="noopener noreferer nofollow">      Complete Google recaptcha v3</a> by dimas lanjaka (<a href="https://codepen.io/dimaslanjaka" rel="noopener noreferer nofollow">@dimaslanjaka</a>)     on <a href="https://codepen.io/" rel="noopener noreferer nofollow">CodePen</a>.   </div>  <script async="" src="https://static.codepen.io/assets/embed/ei.js"></script> </div>