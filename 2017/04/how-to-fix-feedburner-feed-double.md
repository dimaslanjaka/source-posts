---
author:
  nick: Unknown
  link: ""
  email: noreply@blogger.com
category: []
comments: true
cover: https://lh4.googleusercontent.com/proxy/OpPDt025N-7dF5nwAf8tkrBp0OX9NtsuZ7n-yatXnVPGYd4zDaTeUaUFavXyJVHQ7SbiPaDDZjg0ofk6nIcZZluTC6pVI3VDJgB6oW7oiu7OqdvER9xoLOfs57kodu4115sRRnrJGnOia-e_ugI_aUU
date: 2017-04-22T23:30:00.000+07:00
lang: en
location: ""
modified: 2017-04-22T23:30:11.499+07:00
subtitle: How to fix Feedburner feed double titles issue  Quick tip Most of the
  wordpress users syndicate their RSS feeds victimisation
tags:
  - Wordpress
  - HTML
  - PHP
title: How to fix Feedburner feed double titles issue
type: post
uuid: 1a0abc3e-65d6-4888-8542-07d2cbc02188
updated: 2017-04-22T23:30:11+07:00
thumbnail: https://lh4.googleusercontent.com/proxy/OpPDt025N-7dF5nwAf8tkrBp0OX9NtsuZ7n-yatXnVPGYd4zDaTeUaUFavXyJVHQ7SbiPaDDZjg0ofk6nIcZZluTC6pVI3VDJgB6oW7oiu7OqdvER9xoLOfs57kodu4115sRRnrJGnOia-e_ugI_aUU
photos:
  - https://lh4.googleusercontent.com/proxy/OpPDt025N-7dF5nwAf8tkrBp0OX9NtsuZ7n-yatXnVPGYd4zDaTeUaUFavXyJVHQ7SbiPaDDZjg0ofk6nIcZZluTC6pVI3VDJgB6oW7oiu7OqdvER9xoLOfs57kodu4115sRRnrJGnOia-e_ugI_aUU
description: How to fix Feedburner feed double titles issue  Quick tip Most of
  the wordpress users syndicate their RSS feeds victimisation
---

<div dir="ltr" style="text-align: left;" trbidi="on"><h2 style="background-color: white; border: 0px; clear: both; color: #444444; font-family: Monda, sans-serif; font-size: 35px; font-stretch: inherit; letter-spacing: -1px; line-height: 1.4; margin: 15px 0px 5px; padding: 0px; text-align: center; vertical-align: baseline;">How to fix Feedburner feed double titles issue – Quick tip</h2><a href="https://res.cloudinary.com/practicaldev/image/fetch/blogtimenow.com/wp-content/uploads/2014/08/feedburner-double-title.jpg?w=200" rel="noopener noreferer nofollow">        <img border="0" height="320" src="https://lh4.googleusercontent.com/proxy/OpPDt025N-7dF5nwAf8tkrBp0OX9NtsuZ7n-yatXnVPGYd4zDaTeUaUFavXyJVHQ7SbiPaDDZjg0ofk6nIcZZluTC6pVI3VDJgB6oW7oiu7OqdvER9xoLOfs57kodu4115sRRnrJGnOia-e_ugI_aUU" width="320">    </a><br><div></div><div>Most of the wordpress users syndicate their RSS feeds victimisation         Feedburner. For people who don't understand, Feedburner may be a         service that delivers your recent web log posts via email to your         subscribers. have you ever ever seen your Feedburner subscriber stats         count jumping up and down, it goes crazy occasionally and it's a         glitch! Recently we have a tendency to found some totally different         issue with our Feedburner feed that it's showing 2 feed titles like         this (blog title web log title), examine the image below. we have a         tendency to couldn't determine the matter that's inflicting this issue         till we have a tendency to found the answer on-line. thus is your         Feedburner feed showing double titles? If thus then it's easy to mend.         Here we'll show you ways to mend Feedburner feed double titles issue.     </div><div><img alt="Remove Feed double titles in feedburner" height="208" src="https://lh5.googleusercontent.com/proxy/ja-0lens_VeIFGqpWjQgZxfiyGuHhJftP7MxkGc02AvHTHfmUcmKZPCklIYVYRiw-EiASzsaAGWXjwdpRX7fMTWYriiynnBTtZpcDqISZjX3bAe6MHSm94deWunI0yNMx70" width="470">    </div><div>We still bear in mind that once we organized Feedburner with our         wordpress website the title good|is ideal} and also the email title and         subject that Feedburner delivers is additionally perfect. however         recently when dynamical to custom theme we tend to found some abnormal         behavior of Feedburner delivering the e-mail that's it shows 2 titles         in email and in feed. thus we tend to distinguished that the matter         isn't with Feedburner, it's with wordpress that's showing double titles         in RSS feed. Here is however you fix that.     <br><h3>        Fixing Feedburner feed double titles issue     </h3><br>To solve this double title downside you wish access to your wordpress         files that's via cpanel or ftp. Login to your site's electrical device         and head to the file manager wherever you may see all of your wordpress         files. currently open wp-includes folder and in this folder you may see         2 files named feed-rss.php and feed-rss2.php. good click on those         files, click on edit and so press CTRL + F to go looking for this line.     <br><br></div><div id="highlighter_410852"><div><div><table>                <tbody><tr>                        <td>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</td>                        <td><code>                                    &lt;title&gt;&lt;?php bloginfo_rss('name');                                     wp_title_rss(); ?&gt;&lt;/title&gt;                                 </code>                            <br><code><br></code></td>                    </tr></tbody>            </table></div></div></div><div>After finding it replace that line with the below code and after you         done modifying those 2 files click on save. currently clear your         browser cache and check whether or not the double titles issue is gone,         if not then strive the Feedburner technique below.     <br><br></div><div id="highlighter_708924"><div><div><table>                <tbody><tr>                        <td>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</td>                        <td><code>                                    &lt;title&gt;&lt;?php wp_title_rss();                                     ?&gt;&lt;/title&gt;                                 </code>                            </td>                    </tr></tbody>            </table></div></div></div><h3>    <strong>How to remove double title in Feedburner</strong></h3><div><img alt="feed title burner to fix double title" height="367" src="https://lh3.googleusercontent.com/proxy/ZU1L1R14r7dor-1it-3g4XeQNQLcLxdDCAS1h237oiu1VPvVhyYCeE_W0BJfLrRC6PMjOJxtjrnnASjOS5Q0NsQ6czVCG_wBkjhtskn4eRQadIfEnoohMlswKiHEB8pLwwo" width="501">    </div><div>Login to your Feedburner account then opt for your journal feed. Next         click on optimize tab and in optimize tab you'll seeTitle/Description         burner. Open that one, enter your new feed title and once done save         changes and activate the service. That's it, to create positive the         title is mounted go visit your Feedburner feed.     <br>Hope this helped you to mend Feedburner double titles issue, if you         prefer this text then please take our RSS feeds (you will realize the         subscribe box above) to induce a lot of updates.     </div></div><!-- Blogger automated replacement: "https://images-blogger-opensocial.googleusercontent.com/gadgets/proxy?url=http%3A%2F%2Fi1.wp.com%2Fblogtimenow.com%2Fwp-content%2Fuploads%2F2014%2F08%2Ffeedburner-double-title.jpg%3Fw%3D200&amp;container=blogger&amp;gadget=a&amp;rewriteMime=image%2F*" with "https://lh4.googleusercontent.com/proxy/OpPDt025N-7dF5nwAf8tkrBp0OX9NtsuZ7n-yatXnVPGYd4zDaTeUaUFavXyJVHQ7SbiPaDDZjg0ofk6nIcZZluTC6pVI3VDJgB6oW7oiu7OqdvER9xoLOfs57kodu4115sRRnrJGnOia-e_ugI_aUU" --><!-- Blogger automated replacement: "https://images-blogger-opensocial.googleusercontent.com/gadgets/proxy?url=http%3A%2F%2Fblogtimenow.com%2Fwp-content%2Fuploads%2F2014%2F08%2Ffeedburner-double-title2.jpg&amp;container=blogger&amp;gadget=a&amp;rewriteMime=image%2F*" with "https://lh5.googleusercontent.com/proxy/ja-0lens_VeIFGqpWjQgZxfiyGuHhJftP7MxkGc02AvHTHfmUcmKZPCklIYVYRiw-EiASzsaAGWXjwdpRX7fMTWYriiynnBTtZpcDqISZjX3bAe6MHSm94deWunI0yNMx70" --><!-- Blogger automated replacement: "https://images-blogger-opensocial.googleusercontent.com/gadgets/proxy?url=http%3A%2F%2Fblogtimenow.com%2Fwp-content%2Fuploads%2F2014%2F08%2Ffeedburner-double-title3.jpg&amp;container=blogger&amp;gadget=a&amp;rewriteMime=image%2F*" with "https://lh3.googleusercontent.com/proxy/ZU1L1R14r7dor-1it-3g4XeQNQLcLxdDCAS1h237oiu1VPvVhyYCeE_W0BJfLrRC6PMjOJxtjrnnASjOS5Q0NsQ6czVCG_wBkjhtskn4eRQadIfEnoohMlswKiHEB8pLwwo" -->