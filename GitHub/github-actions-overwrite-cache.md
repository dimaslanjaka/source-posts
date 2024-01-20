---
title: How to overwrite cache in github actions workflow
description: Overwriting github action cache strategy with code example
keywords:
  - github actions cache
  - cache
date: 2024-01-20T11:57:08.407Z
thumbnail: https://opengraph.githubassets.com/e541d4950690819c66a1af94d1cda39585573064b7dfed13dc25f545db4f628c/actions/toolkit/issues/505
updated: 2024-01-20T13:54:43.398Z
tags:
  - github
  - github-actions-workflow
categories:
  - programming
---

<details>
  <summary>Introduction</summary>

  Introduction
  ------------

  In software development, caching is a commonly used technique to store frequently accessed data in a temporary storage location. This helps to improve performance and reduce the load on the server. Github Actions allows developers to incorporate caching in their workflows to speed up the build process. However, there may be situations where the cached data needs to be refreshed or overwritten. In this article, we will discuss how to overwrite cache in Github Actions workflow.

  Prerequisites
  -------------

  Before we begin, make sure you have the following set up:

  -   A Github account
  -   A repository with a Github Actions workflow file
  -   Basic knowledge of YAML and Github Actions

  Step 1: Identify the Cache Key
  ------------------------------

  In your Github Actions workflow file, you would have defined a cache key for the specific action that requires caching. This key is used to store and retrieve the cached data. To overwrite the cache, we first need to identify the cache key.

  ```yaml
  runs-on: ubuntu-latest
  env:
    # your cache key
    cache-key: your-cache-key
  ```

  Step 2: Use "cache-hit" and "cache-save" actions
  ------------------------------------------------

  Github Actions provides two actions, "cache-hit" and "cache-save", to handle caching. The "cache-hit" action retrieves the cached data based on the cache key, while the "cache-save" action stores the data with a new cache key. We will be using these actions to overwrite the cache.

  ```yaml
  if: ${{ steps.cache-restore.outputs.cache-hit }}
  ```

  Step 3: Create a New Workflow Job
  ---------------------------------

  To overwrite the cache, we will create a new job in our workflow file. This job will run before the actual job that requires caching and will be responsible for overwriting the cache data. It will use the "cache-hit" action to retrieve the existing cached data and the "cache-save" action to store the updated data with a new cache key.

  ```yaml
  jobs:
    update:
      runs-on: ubuntu-latest
      env:
        # your cache key
        cache-key: your-cache-key
    - name: Restore Cache
      id: cache-restore
      uses: actions/cache/restore@v3
      with:
        path: ./cache
        key: ${{ env.cache-key }}
  ```

  Step 4: Use "if" Condition for the New Job
  ------------------------------------------

  To ensure that the new job only runs when we want to overwrite the cache, we can use the "if" condition in the job. This condition can be set to run only when a specific event occurs, or a certain condition is met. In this case, we can use the "if" condition to check for a specific flag or variable that indicates the need to overwrite the cache.

  ```yaml
  if: ${{ steps.cache-restore.outputs.cache-hit }}
  ```

  Step 5: Test and Verify
  -----------------------

  Once you have made the necessary changes, commit and push them to your repository. Your new job for overwriting the cache will run before the actual job that requires caching. You can monitor the workflow runs on Github and verify if the cache has been overwritten successfully.

  Conclusion
  ----------

  Caching is a useful feature in Github Actions that helps to improve the performance of your workflow. However, there may be instances where you need to refresh or update the cached data. By following these steps, you can easily overwrite the cache in your Github Actions workflow. This ensures that your workflow runs with the most up-to-date data and avoids any potential issues due to outdated cache.
</details>

# GitHub Actions overwrite cache example repo

GitHub Actions does not support overwrite cache with same key, so we have to delete the old cache key before rewrite the cache.

<!-- - [Feature request: option to update cache · Issue #342 · actions/cache](https://github.com/actions/cache/issues/342) -->

As workaround, you can use `actions/cache/restore` and [gh-actions-cache](https://github.com/actions/gh-actions-cache), and `actions/cache/save`.

This workflow implements overwrite cache using **restore** `->` **delete** `->` **save**.

```yaml
name: Update Cache
on:
  workflow_dispatch:
permissions:
  contents: read
  actions: write # require to delete cache
jobs:
  update:
    runs-on: ubuntu-latest
    env:
      # overwrite cache key
      cache-key: your-cache-key
    steps:
      # This job implements overwrite cache using restore + delete + save
      - name: Checkout
        uses: actions/checkout@v3 # gh command require repository
      - name: Restore Cache
        id: cache-restore
        uses: actions/cache/restore@v3
        with:
          path: ./cache
          key: ${{ env.cache-key }}
      # Main Task
      - name: Main Task
        run: |
          # generate current time to ./cache/time
          mkdir -p ./cache
          previous_date=$(cat ./cache/time || echo "No previous date")
          current_date=$(date "+%Y-%m-%d %H:%M:%S")
          echo "Previous: $previous_date"
          echo "Current: $current_date"
          # Save current time to ./cache/time
          echo "$current_date" > ./cache/time
      # overwrite cache key: delete previous and save current
      - name: Delete Previous Cache
        if: ${{ steps.cache-restore.outputs.cache-hit }}
        continue-on-error: true
        run: |
          gh extension install actions/gh-actions-cache
          gh actions-cache delete "${{ env.cache-key }}" --confirm
        env:
          GH_TOKEN: ${{ secrets.GITHUB_TOKEN }}
      - name: Save Cache
        uses: actions/cache/save@v3
        with:
          path: ./cache
          key: ${{ env.cache-key }}
```