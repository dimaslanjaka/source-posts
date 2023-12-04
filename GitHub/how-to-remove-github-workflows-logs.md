---
author: Dimas Lanjaka
categories:
  - programming
comments: true
date: 2023-08-27T19:50:11+07:00
description: How to remove github workflows logs each workflow runs creating
  huge logs in github actions. sometimes you need to clean them to prune
  repository sizes. below i
lang: en
tags:
  - github
  - workflows
  - tips & tricks
title: How to remove github workflows logs
type: post
updated: 2023-08-27T19:58:26+07:00
wordcount: 883
---

each workflow runs creating huge logs in github actions. sometimes you need to clean them to prune repository sizes. below is tips & tricks to delete github workflows logs.

## open repository
open your repository folder or edit on github directly
## create new workflow
create new workflow `.github/workflows/clean-logs.yml` and write below scripts

```yaml
name: Delete old workflow runs
on:
  workflow_dispatch:
    inputs:
      days:
        description: 'Number of days.'
        required: true
        default: 30
      minimum_runs:
        description: 'The minimum runs to keep for each workflow.'
        required: true
        default: 6
      delete_workflow_pattern:
        description: 'The name or filename of the workflow. if not set then it will target all workflows.'
        required: false
      delete_workflow_by_state_pattern:
        description: 'Remove workflow by state: active, deleted, disabled_fork, disabled_inactivity, disabled_manually'
        required: true
        default: "All"
        type: choice
        options:
          - "All"
          - active
          - deleted
          - disabled_inactivity
          - disabled_manually
      delete_run_by_conclusion_pattern:
        description: 'Remove workflow by conclusion: action_required, cancelled, failure, skipped, success'
        required: true
        default: "All"
        type: choice
        options:
          - "All"
          - action_required
          - cancelled
          - failure
          - skipped
          - success
      dry_run:
        description: 'Only log actions, do not perform any delete operations.'
        required: false

jobs:
  del_runs:
    runs-on: ubuntu-latest
    steps:
      - name: Delete workflow runs
        uses: Mattraks/delete-workflow-runs@v2
        with:
          token: ${{ secrets.ACCESS_TOKEN }}
          repository: ${{ github.repository }}
          retain_days: ${{ github.event.inputs.days }}
          keep_minimum_runs: ${{ github.event.inputs.minimum_runs }}
          delete_workflow_pattern: ${{ github.event.inputs.delete_workflow_pattern }}
          delete_workflow_by_state_pattern: ${{ github.event.inputs.delete_workflow_by_state_pattern }}
          delete_run_by_conclusion_pattern: ${{ github.event.inputs.delete_run_by_conclusion_pattern }}
          dry_run: ${{ github.event.inputs.dry_run }}
```

## open repository actions

https://github.com/USERNAME/REPOSITORY/actions

![click the actions tab](https://github.com/dimaslanjaka/source-posts/assets/12471057/58b318de-210b-41fa-8ffc-3f21896b1982)

## select delete old workflows run logs
![click spesific workflow](https://github.com/dimaslanjaka/source-posts/assets/12471057/7ecef604-2a0c-4032-96bc-3f1aed734248)

## click run workflow
![trigger the selected workflow](https://github.com/dimaslanjaka/source-posts/assets/12471057/13815193-c6db-4538-b6da-31a2b2022316)
![start trigger the selected workflow](https://github.com/dimaslanjaka/source-posts/assets/12471057/0728f88f-6ae5-4174-9bc9-ae6022ddaff8)

## wait until finish
after finished your workflows logs should be emptied/cleaned

## conclusion
below is the result logs of workflows cleaned
![image](https://github.com/dimaslanjaka/source-posts/assets/12471057/c5362839-c4fd-49e4-9908-71eaa1d5b90d)
