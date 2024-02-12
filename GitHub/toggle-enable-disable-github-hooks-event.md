---
title: Toggle enable/disable github hooks event
description: How to toggle enable/disable github hooks event
date: 2024-02-11T20:31:05+07:00
categories: [programming]
tags: [bash, github]
---

Pre-commit hooks are scripts that run locally before a commit is made. 
They are not specific to GitHub but can be part of your local development environment. 
Tools like `pre-commit` allow you to configure and run hooks before each commit.

## enable git hooks

To toggle enable git hooks you can do following:

```bash
git config core.hooksPath ./git-hooks
```

## disable git hooks

To toggle disable git hooks you can do following:

```bash
git config --unset core.hookspath
```
