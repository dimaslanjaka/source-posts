---
title: Visual Studio Code Run task on save
description: How to run task on save using VSCode
date: 2024-02-10T06:46:28+07:00
categories: [programming]
tags: []
thumbnail: https://opengraph.githubassets.com/dca9194e2a425bcfcfc564d0be67ec03130bba7ea0565d6cde92054ca26827fe/microsoft/vscode/issues/2159
---

## Using plugin Trigger Task on Save

You can use the [Trigger Task on Save](https://marketplace.visualstudio.com/items?itemName=Gruntfuggly.triggertaskonsave) extension.

To set it up, add the following to your `.vscode/settings.json`:

```jsonc
{
  "task.saveBeforeRun":"always",
  // task name to run on save action
  "triggerTaskOnSave.selectedTask":"bootRun",
  // enable plugin
  "triggerTaskOnSave.on":true,
  // restart task when running
  "triggerTaskOnSave.restart":true,
  // run in background
  "triggerTaskOnSave.showNotifications":false,
  // run in background
  "triggerTaskOnSave.showStatusBarToggle":false,
  "triggerTaskOnSave.tasks":{
    "build":[
      // watch file patterns
      "server/**/*.html",
      "jvm/**/*.java",
      "server/**/*.java"
    ]
  }
}
```

## Configure tasks.json

```jsonc
{
  "version": "2.0.0",
  "tasks": [
    {
      // run in background
      "isBackground": true,
      // task name
      "label": "bootRun",
      "type": "shell",
      // command shell to run
      "command": "gradlew bootRun",
      "args": [],
      "group": {
        "kind": "build",
        "isDefault": true
      },
      // task description
      "detail": "run gradle bootRun",
      "presentation": {
        // run in background
        "reveal": "silent",
        "panel": "shared"
      },
      "problemMatcher": [],
      "options": {
        // working directory
        "cwd": "${workspaceFolder}"
      },
      "runOptions": {
        "runOn": "default"
      }
    }
  ]
}
```
