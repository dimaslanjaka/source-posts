---
author:
  nick: Dimas Lanjaka Kumala Indra
  link: https://www.blogger.com/profile/17555754514989936273
  email: noreply@blogger.com
categories:
  - programming
comments: true
cover: https://raw.githubusercontent.com/dimaslanjaka/dimaslanjaka.github.io/master/assets/img/phpjs.png
date: 2019-07-22T00:16:00.001+07:00
description: CryptoJS encrypt decrypt support PHP , PHP 7.x. See the Pen PHP
  CryptoJS Encrypt Decrypt by dimas
lang: en
photos:
  - https://raw.githubusercontent.com/dimaslanjaka/dimaslanjaka.github.io/master/assets/img/phpjs.png
tags:
  - js
  - php
thumbnail: https://raw.githubusercontent.com/dimaslanjaka/dimaslanjaka.github.io/master/assets/img/phpjs.png
title: "[PHP][JS] CryptoJS encrypt decrypt"
type: post
updated: 2023-09-01T06:09:30+07:00
webtitle: PHP JS
wordcount: 1176
---

![](https://raw.githubusercontent.com/dimaslanjaka/dimaslanjaka.github.io/master/assets/img/phpjs.png)  CryptoJS encrypt decrypt support PHP 5, PHP 7.x.

<div class="m-3">
  <p
    class="codepen"
    data-height="265"
    data-theme-id="0"
    data-default-tab="result"
    data-user="dimaslanjaka"
    data-slug-hash="oKXmGr"
    style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em"
    data-pen-title="PHP CryptoJS Encrypt Decrypt">
    <span
      >See the Pen <a href="https://codepen.io/dimaslanjaka/pen/oKXmGr/" rel="noopener noreferer nofollow"> PHP CryptoJS Encrypt Decrypt</a> by dimas lanjaka (<a
        href="https://codepen.io/dimaslanjaka"
        rel="noopener noreferer nofollow"
        >@dimaslanjaka</a
      >) on <a href="https://codepen.io" rel="noopener noreferer nofollow">CodePen</a>.</span
    >
  </p>
  <script async="" src="https://static.codepen.io/assets/embed/ei.js"></script>
</div>

  

#### Code PHP and details variable

##### \[JS\]

```php
<?php
/**
  * @package https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.9-1/crypto-js.js
  */
 var salt = 'salt'; //salt
 var iv = '1111111111111111'; //pass salt minimum length 12 chars
 var iterations = '999'; //iterations

 /**
  * Get key
  * @param string passphrase
  * @param string salt
  */
 function getKey(passphrase, salt) {
   var key = CryptoJS.PBKDF2(passphrase, salt, {
     hasher: CryptoJS.algo.SHA256,
     keySize: 64 / 8,
     iterations: iterations
   });
   return key;
 }
 /**
  * Encrypt function
  * @param string passphrase
  * @param string plainText
  */
 function userJSEncrypt(passphrase, plainText) {
   var key = getKey(passphrase, salt);
   var encrypted = CryptoJS.AES.encrypt(plainText, key, {
     iv: CryptoJS.enc.Utf8.parse(iv)
   });
   return encrypted.ciphertext.toString(CryptoJS.enc.Base64);
 }
 /**
  * Decrypt function
  * @param string passphrase
  * @param string encryptedText
  */
 function userJSDecrypt(passphrase, encryptedText) {
   var key = getKey(passphrase, salt);
   var decrypted = CryptoJS.AES.decrypt(encryptedText, key, {
     iv: CryptoJS.enc.Utf8.parse(iv)
   });
   return decrypted.toString(CryptoJS.enc.Utf8);
 }
```

##### \[PHP 5.6++\]

```php
<?php
const SALT = "salt"; //salt
const IV = "1111111111111111"; //pass salt minimum length 12 chars or it'll be show warning messages
const ITERATIONS = 999; //iterations
function userPHPEncrypt($passphrase, $plainText)
{
    $key = \hash_pbkdf2("sha256", $passphrase, SALT, ITERATIONS, 64);
    $encryptedData = \openssl_encrypt(
        $plainText,
        "AES-256-CBC",
        \hex2bin($key),
        OPENSSL_RAW_DATA,
        IV
    );
    return \base64_encode($encryptedData);
}
function userPHPDecrypt($passphrase, $encryptedTextBase64)
{
    $encryptedText = \base64_decode($encryptedTextBase64);
    $key = \hash_pbkdf2("sha256", $passphrase, SALT, ITERATIONS, 64);
    $decryptedText = \openssl_decrypt(
        $encryptedText,
        "AES-256-CBC",
        \hex2bin($key),
        OPENSSL_RAW_DATA,
        IV
    );
    return $decryptedText;
}
```

> ##### Fix Problems
> 
> [How to fix openssl\_encrypt() and openssl\_decrypt() errors](/2019/07/fix-openssl-encrypt-decrypt-php.html)

Reference: [Fix openssl encrypt decrypt \[PHP\]](/2019/07/fix-openssl-encrypt-decrypt-php.html)
