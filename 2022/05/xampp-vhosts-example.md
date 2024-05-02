---
author: Dimas Lanjaka
categories:
  - programming
comments: true
date: 2022-05-15T02:40:27+0000
description: Sample configuration for xampp virtual hosts 100 work tested 2022
lang: en
tags:
  - xampp
  - apache
thumbnail: https://www.automationdojos.com/wp-content/uploads/2021/11/post-xampp-virtualhost-fimg.png
title: XAMPP vhosts config full example and guide
type: post
updated: 2024-05-02T18:36:24+07:00
---

## Sample configuration for xampp virtual hosts 100% work tested 2022
XAMPP vhosts config full example and guide

- important for linux and mac users. Make sure permission of xampp, open `etc/httpd.conf` change **nobody** and **nogroup** with your username and your group
  > `sudo gedit /opt/lampp/etc/httpd.conf`
```apache
<IfModule unixd_module>
#
# If you wish httpd to run as a different user or group, you must run
# httpd as root initially and it will switch.
#
# User/Group: The name (or #number) of the user/group to run httpd as.
# It is usually good practice to create a dedicated user and group for
# running httpd, as with most system services.
#
#User daemon
#Group daemon
#User nobody
#Group nogroup
User dimaslanjaka
Group dimaslanjaka
</IfModule>
```

- script create SSL certificate for XAMPP in windows

```batch
@echo off

@REM save this script into xampp_folder/apache/bin

SETLOCAL EnableDelayedExpansion

@REM Get the directory of the script
set "script_dir=%~dp0"

set "OPENSSL_CONF=%script_dir%\..\conf\openssl.cnf"

set /p domain="Enter Domain: "
@REM set "domain=dev.webmanajemen.com"
set "state=East Java"
set "country=ID"
set "organization=Website Management Indonesia"
set "organizational_unit=Developer"
set "city=Surabaya"

set "cert_output_dir=%script_dir%\..\conf\crt\%domain%"
if not exist "%cert_output_dir%" mkdir "%cert_output_dir%" /p

bin\openssl req -new -out "%cert_output_dir%\server.csr" -subj "/C=%country%/ST=%state%/L=%city%/O=%organization%/OU=%organizational_unit%/CN=%domain%"
bin\openssl rsa -in "%cert_output_dir%\privkey.pem" -out "%cert_output_dir%\server.key" -subj "/C=%country%/ST=%state%/L=%city%/O=%organization%/OU=%organizational_unit%/CN=%domain%"
bin\openssl x509 -in "%cert_output_dir%\server.csr" -out "%cert_output_dir%\server.crt" -req -signkey %cert_output_dir%\server.key -days 365 -subj "/C=%country%/ST=%state%/L=%city%/O=%organization%/OU=%organizational_unit%/CN=%domain%"
bin\openssl req -new -sha256 -nodes -out "%cert_output_dir%\server.csr" -keyout "%cert_output_dir%\server.key" -subj "/C=%country%/ST=%state%/L=%city%/O=%organization%/OU=%organizational_unit%/CN=%domain%"
bin\openssl req -new -sha256 -newkey rsa:2048 -nodes -keyout "%cert_output_dir%\server.key" -x509 -days 365 -out "%cert_output_dir%\server.crt" -subj "/C=%country%/ST=%state%/L=%city%/O=%organization%/OU=%organizational_unit%/CN=%domain%"
```

- enable xampp virtual hosts
  > The virtual hosts conf by defualt is disabled in httpd.conf, in order to allow virtual hosts in XAMPP **under** Ubuntu you have to uncomment line `480` in `httpd.conf`
  uncomment below codes:
```apache
# Virtual hosts
Include etc/extra/httpd-vhosts.conf
```

- open and edit `etc/extra/httpd-vhosts.conf`
> specify your own local domains and paths
```apache
<VirtualHost *:80>
    ServerAdmin dimaslanjaka@gmail.com
    ServerName wp.webmanajemen.com
    ServerAlias wp.webmanajemen.com
    DocumentRoot "/opt/lampp/htdocs"
    ErrorLog "logs/wp.webmanajemen.com-error_log"
    CustomLog "logs/wp.webmanajemen.com-access_log" common
    <IfModule mod_dir.c>
        DirectoryIndex index.php index.pl index.cgi index.html index.xhtml index.htm
    </IfModule>
    <Directory /opt/lampp/htdocs>
        Options Indexes FollowSymLinks
        AllowOverride All
        Require all granted
        Order allow,deny
        Allow from all
    </Directory>
</VirtualHost>

<VirtualHost *:80>
    ServerAdmin dimaslanjaka@gmail.com
    ServerName adsense.webmanajemen.com
    ServerAlias adsense.webmanajemen.com
    DocumentRoot /media/dimaslanjaka/DATA/Repositories/gh-pages
    <Directory /media/dimaslanjaka/DATA/Repositories/gh-pages>
        Options Indexes FollowSymLinks
        AllowOverride All
        Require all granted
        Order allow,deny
        Allow from all
    </Directory>
    ErrorLog logs/adsense-error.log
    CustomLog logs/adsenser-access.log combined
    <IfModule mod_dir.c>
        DirectoryIndex index.php index.pl index.cgi index.html index.xhtml index.htm
    </IfModule>
</VirtualHost>
```

- Edit `hosts` file
> specify your own local domain
> - Windows 10 – `C:\Windows\System32\drivers\etc\hosts`
> - Linux – `/etc/hosts`
> - Mac OS X – `/private/etc/hosts`
```hosts
127.0.0.1 wp.webmanajemen.com
127.0.0.1 adsense.webmanajemen.com
```

- Restart XAMPP
- Access Browser URL http://wp.webmanajemen.com and http://adsense.webmanajemen.com now each domain has their own public directory to serve
