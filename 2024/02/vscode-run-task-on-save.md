---
title: Visual Studio Code Run task on save
description: How to run task on save using VSCode
date: 2024-02-10T06:46:28+07:00
categories: [programming]
tags: []
thumbnail: https://opengraph.githubassets.com/dca9194e2a425bcfcfc564d0be67ec03130bba7ea0565d6cde92054ca26827fe/microsoft/vscode/issues/2159
updated: 2024-02-10T07:06:06+07:00
---

In Visual Studio Code, you can configure tasks to run automatically when you save a file using the tasks.json file.
 Here is a step-by-step guide for configuring tasks to run on save: 

## Method 1: Using plugin Trigger Task on Save

You can use the [Trigger Task on Save](https://marketplace.visualstudio.com/items?itemName=Gruntfuggly.triggertaskonsave) extension.

### Configure plugin settings

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

### Configure tasks.json

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

## Method 2: Using default tasks.json

1.  Open your project in Visual Studio Code.

2.  Press `Ctrl + Shift + B` (Windows/Linux) or `Cmd + Shift + B` (Mac) to open the **"Run Build Task"** menu.

3.  Select **"Configure Build Task"** and then choose the type of task you want to create (e.g., "Create tasks.json file from template").

4.  Choose the appropriate template based on your project (e.g., "Others").

5.  Modify the generated "tasks.json" file to include a task that runs on save. For example:

```jsonc
{
  "version": "2.0.0",
  "tasks": [
    {
      "label": "Run On Save",
      "type": "shell",
      "command": "your_command_here",
      "group": {
        "kind": "build",
        "isDefault": true
      },
      "presentation": {
        "reveal": "always",
        "panel": "new"
      },
      "runOptions": {
        "runOn": "save"
      }
    }
  ]
}
```

Replace **"your_command_here"** with the actual command you want to run. Make sure the command is something that can be executed from the command line.

> Note: option **"runOn": "save"** triggers the execution of the task when the file is saved.
 Make sure the task is properly configured  for your project and that the necessary tools are installed.

```jsonc
"runOptions": {
  "runOn": "save"
}
```

6.  Save the "tasks.json" file.

## Conclusion

Now, when you save a file in your project, the specified task will be executed automatically. 

The two tricks above worked when I tested previously. That's the article about **Run task on save using VSCode (Visual Studio Code)**


