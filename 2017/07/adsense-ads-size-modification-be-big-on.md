---
author:
  nick: Unknown
  link: https://www.blogger.com/profile/18262459107951035499
  email: noreply@blogger.com
categories:
  - programming
comments: true
date: 2017-07-18T05:23:00.001Z
description: The ads appear in full on the screen
lang: en
tags:
  - adsense
  - html
thumbnail: https://cdnpower.klikmania.net/wp-content/uploads/2015/12/1-min-3-1024x499.png
title: Adsense Ads Size Modification Be Big On The Screen And Responsive
type: post
updated: 2023-10-19T03:37:22.000Z

---

Before continuing, whether we can modify ads from google adsense? We see briefly the description below, in order to avoid mistakes in resizing adsense ads.
Particularly in accordance with [the AdSense Ads code modification](https://translate.googleusercontent.com/translate_c?depth=1&nv=1&rurl=translate.google.com&sl=id&sp=nmt4&tl=en&u=https://support.google.com/adsense/answer/1354736%3Fhl%3Did&usg=ALkJrhg7W6HYwc4YikKo-r1JeOBv1G676A) guidelines [.](https://translate.googleusercontent.com/translate_c?depth=1&nv=1&rurl=translate.google.com&sl=id&sp=nmt4&tl=en&u=https://support.google.com/adsense/answer/1354736%3Fhl%3Did&usg=ALkJrhg7W6HYwc4YikKo-r1JeOBv1G676A)
These are some Adsense ad code modifications that can be accepted or allowed by the Google Adsense:

*   Responsive Design
*   A / B Testing
*   Setting Custom Channels Dynamically
*   Ads Tag Minimization

And it's about responsive ad units and minimizing ad tags with modifications to CSS media.

**Addition of CSS Media for the size of adsense ads to fit the screen**
Although Google Adsense has provided CSS media for responsive ad units, but only for ad sizes with dimensions of **728px X 90px** only. And when displaying the **620 X 90px** size on the desktop screen, it will appear truncated on mobile or mobile devices.
In essence, adsense ad size ads will be made responsive according to the user's screen. And will appear on screen with certain conditions as below.

*   If the screen is at most **450px** , then the ad size will be **300 x 250px.**
*   If the screen is at least **500px** , then the ad size will be **336 x 280px.**
*   If the screen is at least **800px** , then the ad size will be **620 x 90px**
*   And other ad sizes will be **336 x 280px.**

And most of all, if you put a responsive adsense ad size, then the result will seem to fill the posting space (bigger). This means that ads will follow the screen according to the posting area. As an example below.

[![Adsense ad size](https://cdnpower.klikmania.net/wp-content/uploads/2015/12/1-min-3-1024x499.png)](http://www.klikmania.net/wp-content/uploads/2015/12/1-min-3.png)
The ads appear in full on the screen

**Below is a standard script of responsive ad units from google adsense.**

```html
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!– klik mania – responsive artikel –>
<ins class="adsbygoogle"
style="display:block"
data-ad-client="ca-pub-XXXX"
data-ad-slot="XXXX"
data-ad-format="auto"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>
```

What we need is the **ca-pub** and **ad-slot** XXXX code on the sript above.
**And below is CSS Media that we will apply**

```html
<style scoped="scoped" type="text/css">
  .iklan_responsive {
    width: 336px;
    height: 280px;
  }
  @media (max-width: 450px) {
    .iklan_responsive {
      width: 300px;
      height: 250px;
    }
  }
  @media (min-width: 500px) {
    .iklan_responsive {
      width: 336px;
      height: 280px;
    }
  }
  @media (min-width: 800px) {
    .iklan_responsive {
      width: 600px;
      height: 280px;
    }
  }
</style>
<ins
  class="adsbygoogle iklan_responsive"
  style="display: inline-block"
  data-ad-client="ca-pub-XXXX"
  data-ad-slot="XXXX"
></ins>
<script>
  (adsbygoogle = window.adsbygoogle || []).push({});
</script>
```

**Information :**

*   For the **height** and **width** in css, can be adjusted to the width of the post area on your blog. But for the standard size, can use that size.
*   Replace **XXXX** code with your **ca-pub** and **ad-slot** code **.**

Once done, copy all the CSS code into the widget or can place adsense ads in the post with **quick adsense plugin.**
**Addendum:** This also applies to adsense ads with **custom size sizes** and makes **custom size** responsive **sizes** appear on desktop or mobile.

**If using blogger / blogspot**
Parse first the script code above **[Here](https://translate.googleusercontent.com/translate_c?depth=1&nv=1&rurl=translate.google.com&sl=id&sp=nmt4&tl=en&u=http://www.blogcrowds.com/resources/parse_html.php&usg=ALkJrhip4-SemctqX18gHHvZTLzTdOY5Gg)**
Especially for ads that are stored in the post, so as not to error on HTML5validation please save the code CSS media ad unit above the code `]]> </ b: skin>` or `</style>`
Eliminate the code `<style scoped='scoped' type='text/css'>`
And without using cover `</style>` (not in use)

**Check the display ads on mobile**
After that we can see the results directly for mobile display, it's good test directly using your own mobile device. Whether the ad view has adjusted.
If successfully implemented in your blog, the adsense ad size will adjust to the height and width of the post area screen.So as if the ad fills the post area and turns into a big one.
And if the visitor refreshes on the page or moves to another posting page, then the adsense ads as if changing sizes, but actually only adjust the availability of ads at the time.
Good luck, if there is a problem can urun rembuk in the comment box.