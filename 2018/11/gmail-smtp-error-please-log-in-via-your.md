---
author:
  nick: Dimas Lanjaka Kumala Indra
  link: https://www.blogger.com/profile/17555754514989936273
  email: noreply@blogger.com
categories:
  - programming
comments: true
date: 2018-11-09T22:21:00.000Z
description: You having problems with gmail smtp server. Like this Gmail SMTP
  error please log in via your web browser , Then Goggle says Please log
lang: en
tags:
  - hosting
  - php
  - tips & tricks
  - linux/unix
thumbnail: https://2.bp.blogspot.com/-axfbmdLI3Pc/XoIVHlkeicI/AAAAAAAAAA0/N9WMnayMq20kxlOxwl3vZgydjoGi9AcxQCLcBGAsYHQ/s1600/imgingest-2117968900021071073.png
title: Gmail SMTP error please log in via your web browser
type: post
updated: 2023-09-02T23:30:12.000Z
wordcount: 1453

---

You having problems with gmail smtp server. Like this Gmail SMTP error please log in via your web browser , Then Goggle says: Please log in via your web browser and then try again. 534-5.7.14 Learn more at https://support.google.com/mail/bin/answer.py?answer=787 ?.  
I know this is an older issue, but I recently had the same problem and was having issues resolving it, despite attempting the DisplayUnlockCaptcha fix. This is how I got it alive.  
Firstly you must activate less secure apps at [https://myaccount.google.com/security?hl=en](https://myaccount.google.com/security?hl=en)

![enable less secure apps](https://2.bp.blogspot.com/-axfbmdLI3Pc/XoIVHlkeicI/AAAAAAAAAA0/N9WMnayMq20kxlOxwl3vZgydjoGi9AcxQCLcBGAsYHQ/s1600/imgingest-2117968900021071073.png)

Enable less secure apps

  
Head over to Account Security Settings ( [https://www.google.com/settings/security/lesssecureapps](https://www.google.com/settings/security/lesssecureapps) ) and enable "Access for less secure apps", this allows you to use the google smtp for clients other than the official ones.  

![enable less secure apps](https://1.bp.blogspot.com/-atdwl-jQEh0/XoIWlT0DoaI/AAAAAAAAABA/cWA2QM8H9Ds6BQ6tQyvpFxlnXJef4DiegCLcBGAsYHQ/s1600/imgingest-2117968900021071073.png)

Enable less secure apps

  
**Update**  
Google has been so kind as to [list](https://support.google.com/mail/answer/14257) all the potential problems and fixes for us. Although I recommend trying the [less secure apps setting](https://www.google.com/settings/security/lesssecureapps) . Be sure you are applying these to the correct account.  

> *   If you've turned on 2-Step Verification for your account, you might need to enter an [App password](https://support.google.com/accounts/answer/185834?hl=en#ASPs) instead of your regular password.
> *   Sign in to your account from the web version of Gmail at [https://mail.google.com](https://mail.google.com/) . Once you’re signed in, try signing in  
>     to the mail app again.
> *   Visit [http://www.google.com/accounts/DisplayUnlockCaptcha](http://www.google.com/accounts/DisplayUnlockCaptcha) and sign in with your Gmail username and password. If asked, enter the  
>     letters in the distorted picture.
> 
> ![enable less secure apps](https://1.bp.blogspot.com/-1u9KfUFTz54/XoITM22-RQI/AAAAAAAAAAc/PbH8qXLj9OwKKt6WJL-FMwWOziMj99dFgCLcBGAsYHQ/s1600/Screenshot_4.png)
> 
> Continue
> 
> ![enable less secure apps](https://1.bp.blogspot.com/-O_sDQWQHPBM/XoITc7xrDoI/AAAAAAAAAAo/Dp-l6clwgVEiJMSgudXvtv2lJiKSQ1gHQCLcBGAsYHQ/s1600/imgingest-2117968900021071073.png)
> 
> Success, now run your smtp again
> 
> *   Your app might not support the latest security standards. Try changing a few settings to [allow less secure apps](https://support.google.com/accounts/answer/6010255) access to your account.
> *   Make sure your mail app isn't set to check for new email too often. If your mail app checks for new messages more than once every 10  
>     minutes, the app’s access to your account could be blocked.

Did you success with it ?.  
let's put your comments below. Hopefully, my article can be help you now.

![GMAIL SMTP](https://res.cloudinary.com/dimaslanjaka/image/fetch/https://www.betterhostreview.com/wp-content/uploads/gmail-icon.jpg "GMAIL SMTP")