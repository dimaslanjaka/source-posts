---
title: "Yarn Guides"
description: "A quick guide on how to update specific packages like husky and lint-staged across all workspaces in a Yarn monorepo."
tags: ["yarn", "monorepo", "workspaces", "package management"]
categories: ["programming"]
author: "L3n4r0x"
date: 2025-05-29T00:00:00+07:00
---

### Update Specific Packages for All Workspaces

The following command updates the specified packages (`husky` and `lint-staged`) across all workspaces in a Yarn monorepo setup.

```bash
yarn workspaces foreach --all exec yarn up husky lint-staged
```
