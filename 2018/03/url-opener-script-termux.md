---
author:
  nick: Dimas Lanjaka 2
  link: https://www.blogger.com/profile/08197822797622284515
  email: noreply@blogger.com
categories:
  - uncategorized
comments: true
cover: https://4.bp.blogspot.com/-VzY5zqLgJmw/Wfhs0xihnNI/AAAAAAAAAJo/TguGeZ4QyGMbG2U0bUgZ79MnJxSLGM9QACEwYBhgL/s1600/images%25285%2529%255B1%255D.jpg
date: 2018-03-26T00:48:00.000+07:00
description: img
excerpt: img
lang: en
photos:
  - https://4.bp.blogspot.com/-VzY5zqLgJmw/Wfhs0xihnNI/AAAAAAAAAJo/TguGeZ4QyGMbG2U0bUgZ79MnJxSLGM9QACEwYBhgL/s1600/images%25285%2529%255B1%255D.jpg
subtitle: img
tags:
  - tools
  - script
thumbnail: https://4.bp.blogspot.com/-VzY5zqLgJmw/Wfhs0xihnNI/AAAAAAAAAJo/TguGeZ4QyGMbG2U0bUgZ79MnJxSLGM9QACEwYBhgL/s1600/images%25285%2529%255B1%255D.jpg
title: Url Opener Script Termux
type: post
updated: 2023-08-08T14:45:41+07:00
wordcount: 413
---

<img src="https://4.bp.blogspot.com/-VzY5zqLgJmw/Wfhs0xihnNI/AAAAAAAAAJo/TguGeZ4QyGMbG2U0bUgZ79MnJxSLGM9QACEwYBhgL/s1600/images%25285%2529%255B1%255D.jpg" title="Termux Url opener"><center><h2>URL Opener Script Termux</h2></center><pre class="linenumber language-bash"><code class="language-bash"><br>#!/data/data/com.termux/files/usr/bin/zsh<br>#<br># This is a termux-url-opener script to do diffrent tasks on my Android phone <br>#<br><br>url=$1<br>echo "What should I do with $url ?"<br>echo "y) download youtube video to movies-folder"<br>echo "u) download youtube video and convert it to mp3 (music-folder)"<br>echo "s) download with scdl (soundcloud)"<br>echo "w) wget file to download-folder" <br>echo "x) nothing"<br><br>read CHOICE<br>case $CHOICE in<br>    y)<br>        youtube-dl -o /data/data/com.termux/files/home/storage/shared/Movies/%(title)s.%(ext)s $url<br>	;;<br>    u)<br>	echo "Artist"<br>	read artist<br>	echo "Title"<br>	read title<br>	echo "Album"<br>	read album<br>        youtube-dl -o ~/storage/music/music.flv $url <br>	ffmpeg -i ~/storage/music/music.flv ~/storage/music/$artist-$title.mp3 <br>        mid3v2 -a $artist -t $title -A $album ~/storage/music/$artist-$title.mp3<br>	rm ~/storage/music/music.flv<br>	;;<br>    s)<br>	scdl -l $url --path ~/storage/music<br>        echo "s need some work"<br>	;;<br>    w)<br>        cd ~/storage/downloads<br>	wget $url<br>	;;<br>    x)<br>        echo "bye"<br>	;; <br>esac<br></code><br></pre>