---
title: yaml github actions to clean all caches
date: 2023-01-01T17:12:28+07:00
updated: 2023-01-01T17:12:28+07:00
tags: ['github', 'actions', 'clean', 'caches', 'workflows']
categories: ['programming', 'github']
---

- add `TOKEN` to Github Actions Secrets Environtment
- create `.github/workflows/clean-caches.yml`, put below codes
```yaml
name: Clean Caches

on:
  push:
    branches: [ "master", "main" ]
    paths:
      - '**/package-lock.json'
      - '**/yarn.lock'
  pull_request:
    paths:
      - '**/package-lock.json'
      - '**/yarn.lock'
  workflow_dispatch:

# run single job
concurrency:
  group: clean-actions-${{ github.head_ref }}
  cancel-in-progress: true

jobs:
  build:
    strategy:
      fail-fast: true
    runs-on: ubuntu-latest

    name: Cache Cleaner
    steps:
      - uses: actions/checkout@v3
        with:
          token: ${{ secrets.GITHUB_TOKEN }}
      # https://github.com/actions/cache/blob/main/tips-and-workarounds.md#force-deletion-of-caches-overriding-default-cache-eviction-policy
      - name: Cleanup caches
        shell: bash
        run: |
          gh extension install actions/gh-actions-cache
          REPO=${{ github.repository }}
          BRANCH=${{ github.ref }}
          echo "Fetching list of cache key"
          cacheKeysForPR=$(gh actions-cache list -R $REPO -B $BRANCH | cut -f 1 )
          ## Setting this to not fail the workflow while deleting cache keys.
          set +e
          echo "Deleting caches..."
          for cacheKey in $cacheKeysForPR
          do
              gh actions-cache delete $cacheKey -R $REPO -B $BRANCH --confirm
          done
          echo "Done"
        env:
          GH_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

- save and push `.github/workflows/clean-caches.yml`

## Conclusion
Every `package-lock.json` or `yarn.lock` changed, github actions runner `auto clean all caches` should be run.

