---
title: Yarn NPM Registry Configuration
description: Example configuration for setting up Yarn to use a custom NPM registry and authentication.
date: 2025-07-19T16:40:01+07:00
tags:
  - yarn
---


To configure Yarn to use a custom NPM registry and enable authentication for the `npm` scope, use the following commands:

1. **Set the NPM registry server for the `npm` scope:**
   ```bash
   yarn config set npmScopes.npm.npmRegistryServer "https://registry.npmjs.org"
   ```

2. **Always authenticate for the `npm` scope:**
   ```bash
   yarn config set npmScopes.npm.npmAlwaysAuth true
   ```

3. **Set the authentication token for the `npm` scope:**
   ```bash
   yarn config set npmScopes.npm.npmAuthToken "YOUR_NPM_TOKEN"
   ```
