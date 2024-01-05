---
title: how to setup local site domain vhost xampp windows 2024
description: how to setup local site domain vhost xampp windows 2024
date: 2024-01-06T00:20:40+07:00
updated: 2024-01-06T00:20:40+07:00
categories: ["programming"]
tags: ["php","xampp","apache"]
---

How to setup vhost config on xampp for local site domain, support for multiple local site.

## Setup hosts

```php
127.0.0.1    localhost
127.0.0.1    mysite-dev.com
127.0.0.1    anothersite-dev.com
```

## Setup httpd-vhost.conf

```conf
<VirtualHost *:80>
  DocumentRoot C:/xampp/htdocs/
  ServerName localhost
</VirtualHost>

<VirtualHost *:80>
    ServerName mysite-dev.com # domain name
    DocumentRoot "D:/Workspaces/PHP/ISP"
    <Directory "D:/Workspaces/PHP/ISP">
        Options Indexes FollowSymLinks
        # AllowOverride All      # Deprecated
        # Order Allow,Deny       # Deprecated
        # Allow from all         # Deprecated

        # --New way of doing it
        Require all granted
    </Directory>
</VirtualHost>
```

you can add more virtual host, like:

> using forward slash `/` instead of back slash `\`

```conf
<VirtualHost *:80>
    ServerName yourdomain.tld
    DocumentRoot "your/directory"
    <Directory "your/directory">
        Options Indexes FollowSymLinks
        Require all granted
    </Directory>
</VirtualHost>
```

## Setup httpd-xampp.conf

this required for `mod_rewrite` module works. add new line:

```conf
<Directory "D:/Workspaces/PHP/ISP">
    AllowOverride All
    Require all granted
</Directory>
```

> change **D:/Workspaces/PHP/ISP** to your directory

All sets, try start xampp.