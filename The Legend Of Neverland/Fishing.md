---
author:
  nick: Dimas Lanjaka
  link: https://github.com/dimaslanjaka
categories:
  - games
  - the legend of neverland
comments: true
date: 2021-09-18T17:00:00.000Z
description: Macros Auto Fishing Bluestacks for the legend of neverland download
lang: en
location: Indonesia
tags:
  - macros
  - bluestacks
  - life skill
thumbnail: /The Legend Of Neverland/Fishing/Studio_Project.jpeg
title: Auto Fishing
type: post
updated: 2023-10-20T15:32:08+07:00
---

Fishing in the legend of neverland is an important activity to collect fish and then sell them and get 'water essences'. Water Essences are used to buy ingredients in the `cooking shop`. You can see the recipe at [Cooking Recipes](/The%20Legend%20Of%20Neverland/Recipes.html).
You can cook buffs for your character or make dishes to increase the level of `Fairies` you have.
This time you can auto-fish using `bluestacks` and `macros`.

![Fishing the legend of neverland](https://user-images.githubusercontent.com/12471057/133905459-d00d586f-0b2e-4a43-abb9-cb726940bf3d.png)

## Calculating the fishing actions

<ul>
  <li><span>1 bottle = 300 staminas</span> &divide; 5/action &rarr; <span>
      <span id="step-1"></span> actions
    </span>.</li>
  <li><span>1 fishing = &plusmn;7-8 secs (we take 7 secs)</span></li>
  <li><span>7 x 60 actions &erarr; <span id="step-2"></span> seconds &divide; 60 secs (1 min)</span> = <span>
      <span id="step-3"></span> minutes
    </span> <span>to finish 1 stamina bottle</span></li>
</ul>

<script>
  document.querySelector('#step-1').innerHTML = 300 / 5;
  document.querySelector('#step-2').innerHTML = 7 * 60;
  document.querySelector('#step-3').innerHTML = 420 / 60;
</script>

## Configuration

- First of all, make sure the position of the stamina bottle in your inventory/bag is in the second slot
  ![image](https://user-images.githubusercontent.com/12471057/133907462-bf07b4c7-10f2-46ce-ba61-076af0357232.png)
- set `repeat actions` with the total stamina bottle you have, or my recommendation is to subtract a little from the total stamina bottle you have. for example you have 55 bottles, set just 50 repeat actions, this to prevent other items to be used unexpectedly/unintentionally.
  ![Setup total stamina bottles as repeat action](https://user-images.githubusercontent.com/12471057/133907408-c3505025-1e78-4353-bdc0-1c6e7672d742.png)

## How to download script
[Read Here](/The%20Legend%20Of%20Neverland/Macros.html)

## Auto fishing script
[Download Macros Auto Fishing](/The%20Legend%20Of%20Neverland/Macros/Auto%20Fishing%20%26%20Stamina.json)

## How to import script ?
[Read Here](/The%20Legend%20Of%20Neverland/Macros.html)