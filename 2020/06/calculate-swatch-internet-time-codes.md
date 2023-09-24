---
author:
  nick: Kuswati
  link: https://www.blogger.com/profile/09256263851708439294
  email: noreply@blogger.com
categories:
  - programming
comments: true
cover: https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png
date: 2020-06-06T01:11:00.002+07:00
description: "Calculate Swatch Internet Time Codes PHP 12 bytes: <?php echo
  dateB; ?> 48 bytes: <?php echosprintf03d,time360086400/86.40; ?> C,56 bytes
  C,56 bytes 56 bytes ma"
lang: en
photos:
  - https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png
tags:
  - script
  - php
thumbnail: https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png
title: Calculate Swatch Internet Time Codes
type: post
updated: 2023-09-03T06:29:49+07:00
wordcount: 499
---

<h3 style="text-align: left;">PHP</h3><pre style="text-align: left;">12 bytes:</pre><pre style="text-align: left;">&lt;?php echo date('B'); ?&gt;</pre><pre style="text-align: left;">48 bytes:</pre><pre style="text-align: left;">&lt;?php echo&nbsp;sprintf("%03d",((time()+3600)%86400)/86.4|0); ?&gt;</pre><div><br></div><div>  <h3 style="background-color: white; border: 0px; box-sizing: inherit; color: #242729; font-family: arial, &quot;helvetica neue&quot;, helvetica, sans-serif; font-size: 21px; font-stretch: inherit; font-variant-east-asian: inherit; font-variant-numeric: inherit; line-height: 1.3; margin: 0px 0px 1em; overflow-wrap: break-word; padding: 0px; text-align: left; vertical-align: baseline;"><span style="font-weight: normal;">C,&nbsp;<em style="border: 0px; box-sizing: inherit; font-family: inherit; font-stretch: inherit; font-variant: inherit; line-height: inherit; margin: 0px; padding: 0px; vertical-align: baseline;">56 bytes</em></span></h3></div><div>  <pre style="border-radius: 3px; border: 0px; box-sizing: inherit; color: #242729; font-family: consolas, menlo, monaco, &quot;lucida console&quot;, &quot;liberation mono&quot;, &quot;dejavu sans mono&quot;, &quot;bitstream vera sans mono&quot;, &quot;courier new&quot;, monospace, sans-serif; font-size: 13px; font-stretch: inherit; font-variant-east-asian: inherit; font-variant-numeric: inherit; line-height: inherit; margin-bottom: 1em; margin-top: 0px; max-height: 600px; overflow-wrap: normal; overflow: auto; padding: 12px 8px; text-align: left; vertical-align: baseline; width: auto;"><code style="border: 0px; box-sizing: inherit; font-family: consolas, menlo, monaco, &quot;lucida console&quot;, &quot;liberation mono&quot;, &quot;dejavu sans mono&quot;, &quot;bitstream vera sans mono&quot;, &quot;courier new&quot;, monospace, sans-serif; font-stretch: inherit; font-style: inherit; font-variant: inherit; font-weight: inherit; line-height: inherit; margin: 0px; padding: 0px; vertical-align: baseline; white-space: inherit;">main(){printf("%03d",(int)((time(0)+3600)%86400/86.4));}</code></pre>  <pre style="border-radius: 3px; border: 0px; box-sizing: inherit; color: #242729; font-family: consolas, menlo, monaco, &quot;lucida console&quot;, &quot;liberation mono&quot;, &quot;dejavu sans mono&quot;, &quot;bitstream vera sans mono&quot;, &quot;courier new&quot;, monospace, sans-serif; font-size: 13px; font-stretch: inherit; font-variant-east-asian: inherit; font-variant-numeric: inherit; line-height: inherit; margin-bottom: 1em; margin-top: 0px; max-height: 600px; overflow-wrap: normal; overflow: auto; padding: 12px 8px; text-align: left; vertical-align: baseline; width: auto;"><code style="border: 0px; box-sizing: inherit; font-family: consolas, menlo, monaco, &quot;lucida console&quot;, &quot;liberation mono&quot;, &quot;dejavu sans mono&quot;, &quot;bitstream vera sans mono&quot;, &quot;courier new&quot;, monospace, sans-serif; font-stretch: inherit; font-style: inherit; font-variant: inherit; line-height: inherit; margin: 0px; padding: 0px; vertical-align: baseline; white-space: inherit;"><span style="font-weight: inherit;">Explanation:</span><ul style="background-color: white; border: 0px; box-sizing: inherit; font-family: arial, &quot;helvetica neue&quot;, helvetica, sans-serif; font-size: 15px; font-stretch: inherit; font-variant-east-asian: inherit; font-variant-numeric: inherit; font-weight: inherit; line-height: inherit; list-style-image: initial; list-style-position: initial; margin: 0px 0px 1em 30px; padding: 0px; vertical-align: baseline; white-space: normal;"><li style="border: 0px; box-sizing: inherit; font-family: inherit; font-stretch: inherit; font-style: inherit; font-variant: inherit; font-weight: inherit; line-height: inherit; margin: 0px 0px 0.5em; overflow-wrap: break-word; padding: 0px; vertical-align: baseline;"><strong style="border: 0px; box-sizing: inherit; font-family: inherit; font-stretch: inherit; font-style: inherit; font-variant: inherit; line-height: inherit; margin: 0px; padding: 0px; vertical-align: baseline;">%03d</strong>&nbsp;- tells printf to zero-pad up to 3 digits.</li><li style="border: 0px; box-sizing: inherit; font-family: inherit; font-stretch: inherit; font-style: inherit; font-variant: inherit; font-weight: inherit; line-height: inherit; margin: 0px 0px 0.5em; overflow-wrap: break-word; padding: 0px; vertical-align: baseline;"><strong style="border: 0px; box-sizing: inherit; font-family: inherit; font-stretch: inherit; font-style: inherit; font-variant: inherit; line-height: inherit; margin: 0px; padding: 0px; vertical-align: baseline;">time(NULL)+3600</strong>&nbsp;- gets amount of seconds (UTC) elapsed since epoch and adds an hour to it (UTC+1).</li><li style="border: 0px; box-sizing: inherit; font-family: inherit; font-stretch: inherit; font-style: inherit; font-variant: inherit; font-weight: inherit; line-height: inherit; margin: 0px 0px 0.5em; overflow-wrap: break-word; padding: 0px; vertical-align: baseline;"><strong style="border: 0px; box-sizing: inherit; font-family: inherit; font-stretch: inherit; font-style: inherit; font-variant: inherit; line-height: inherit; margin: 0px; padding: 0px; vertical-align: baseline;">%86400</strong>&nbsp;- divides epoch by the amount of seconds in a 24hr day and gets the remainder (representing seconds elapsed, so far, "today").</li><li style="border: 0px; box-sizing: inherit; font-family: inherit; font-stretch: inherit; font-style: inherit; font-variant: inherit; font-weight: inherit; line-height: inherit; margin: 0px; overflow-wrap: break-word; padding: 0px; vertical-align: baseline;"><strong style="border: 0px; box-sizing: inherit; font-family: inherit; font-stretch: inherit; font-style: inherit; font-variant: inherit; line-height: inherit; margin: 0px; padding: 0px; vertical-align: baseline;">/86.4</strong>&nbsp;- divide remaining seconds by 86.4 to get the ".beat" count since midnight (UTC+1).</li></ul><h4 style="background-color: white; border: 0px; box-sizing: inherit; font-family: arial, &quot;helvetica neue&quot;, helvetica, sans-serif; font-size: 17px; font-stretch: inherit; font-variant-east-asian: inherit; font-variant-numeric: inherit; font-weight: 400; line-height: 1.3; margin: 0px 0px 1em; overflow-wrap: break-word; padding: 0px; text-align: left; vertical-align: baseline; white-space: normal;">Compile (MSVC):</h4><h3 style="background-color: white; border: 0px; box-sizing: inherit; font-family: arial, &quot;helvetica neue&quot;, helvetica, sans-serif; font-size: 17px; font-stretch: inherit; font-variant-east-asian: inherit; font-variant-numeric: inherit; font-weight: 400; line-height: 1.3; margin: 0px 0px 1em; overflow-wrap: break-word; padding: 0px; vertical-align: baseline; white-space: normal;">C:&gt; cl swatch.c</h3><h4 style="background-color: white; border: 0px; box-sizing: inherit; font-family: arial, &quot;helvetica neue&quot;, helvetica, sans-serif; font-size: 17px; font-stretch: inherit; font-variant-east-asian: inherit; font-variant-numeric: inherit; font-weight: 400; line-height: 1.3; margin: 0px 0px 1em; overflow-wrap: break-word; padding: 0px; text-align: left; vertical-align: baseline; white-space: normal;">Compile (GCC):</h4><p style="background-color: white; border: 0px; box-sizing: inherit; clear: both; font-family: arial, &quot;helvetica neue&quot;, helvetica, sans-serif; font-size: 15px; font-stretch: inherit; font-variant-east-asian: inherit; font-variant-numeric: inherit; font-weight: inherit; line-height: inherit; margin: 0px 0px 1em; padding: 0px; vertical-align: baseline; white-space: normal;">$ gcc swatch.c</p><h3 style="background-color: white; border: 0px; box-sizing: inherit; clear: both; font-family: arial, &quot;helvetica neue&quot;, helvetica, sans-serif; font-size: 15px; font-stretch: inherit; font-variant-east-asian: inherit; font-variant-numeric: inherit; line-height: inherit; margin: 0px 0px 1em; padding: 0px; text-align: left; vertical-align: baseline; white-space: normal;"><span style="font-weight: normal;">Java 143 bytes</span></h3><div><div style="background-color: #263238; color: #eeffff; font-family: consolas, consolas, &quot;courier new&quot;, monospace; font-size: 14px; line-height: 19px;"><div><span style="color: #89ddff; font-style: italic;">import</span>&nbsp;java.time.<span style="color: #f78c6c;">*</span>;</div><div>interface&nbsp;A&nbsp;<span style="color: #89ddff;">{</span></div><div>&nbsp;&nbsp;static&nbsp;void&nbsp;main(String[]&nbsp;a)&nbsp;{</div><div>&nbsp;&nbsp;&nbsp;&nbsp;System.out.format("%03.0f"<span style="color: #89ddff;">,</span>&nbsp;LocalTime.now(ZoneId.of("UT+1")).toSecondOfDay()&nbsp;/&nbsp;86.4);</div><div>&nbsp;&nbsp;<span style="color: #89ddff;">}</span></div><div>}</div></div></div></code></pre></div><div>  <h5>Javascript</h5>  <pre><br>    d=new Date();t=;console.log(Math.floor((360*d.getHours()+60*d.getMinutes()+d.getSeconds())/86.4));<br>  </pre></div>