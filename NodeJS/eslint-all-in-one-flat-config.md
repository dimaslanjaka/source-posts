---
title: ESLint Flat Config for JS, TS, React, and Prettier
date: 2025-08-20T22:54:10Z
updated: 2025-08-21T04:00:14Z
description: ESLint Flat Config for JS, TS, React, and Prettier with Babel, Hooks, and JSONC support.
categories:
  - Programming
  - ESLint
  - JavaScript
  - TypeScript
  - React
tags:
  - eslint
  - javascript
  - typescript
  - react
  - prettier
keywords:
  - linting
  - configuration
  - flat config
  - babel
  - hooks
  - jsonc
  - web development
  - setup
  - guide
  - tutorial
  - best practices
---

## Why Use ESLint Flat Config?

The new ESLint Flat Config format (`eslint.config.js`) offers a more flexible, modern, and JavaScript-native way to configure your linter. It allows you to:

- Use full JavaScript for dynamic configuration.
- Share and compose configs easily.
- Integrate with modern tools like Babel, TypeScript, and Prettier.
- Avoid legacy config pitfalls and limitations.

This article provides a complete, production-ready Flat Config setup for projects using JavaScript, TypeScript, React, and Prettier, with support for Babel and JSONC (JSON with comments) for Prettier configuration.

---

## Requirements

```bash
yarn add -D eslint @eslint/js eslint-config-prettier eslint-plugin-prettier @babel/core @babel/eslint-parser @babel/preset-react @babel/plugin-syntax-import-assertions typescript typescript-eslint eslint-plugin-react eslint-plugin-react-hooks globals jsonc-parser
```

## Write `.prettierrc.json`

```jsonc
{
  // Prettier config
  "semi": true,
  "singleQuote": true,
  "printWidth": 100,
  "tabWidth": 2,
  "trailingComma": "es5"
}
```

---

```javascript
// ESLint Flat Config for JS, TS, React, and Prettier
// ---------------------------------------------------
// This configuration uses Flat Config (`eslint.config.js`)
// and integrates:
//   - Base JS rules (@eslint/js)
//   - Babel parser for modern JS & JSX
//   - TypeScript parser for TS/TSX
//   - React + React Hooks plugins
//   - Prettier as an ESLint plugin
//   - jsonc-parser for Prettier config (supports comments)
// Requirements:
//   yarn add -D \
// eslint @eslint/js eslint-config-prettier eslint-plugin-prettier \
// @babel/core @babel/eslint-parser @babel/preset-react @babel/plugin-syntax-import-assertions \
// typescript typescript-eslint \
// eslint-plugin-react eslint-plugin-react-hooks \
// globals jsonc-parser
// ---------------------------------------------------

import babelParser from '@babel/eslint-parser';
import eslint from '@eslint/js';
import prettierConfig from 'eslint-config-prettier';
import prettier from 'eslint-plugin-prettier';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';
import { parse as parseJSONC } from 'jsonc-parser';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import tseslint from 'typescript-eslint';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const prettierrc = parseJSONC(fs.readFileSync(path.resolve(__dirname, '.prettierrc.json'), 'utf-8'));

export default tseslint.config(
  // ---------------------------------------------------
  // 🌍 Global config (applies to all files)
  // ---------------------------------------------------
  eslint.configs.recommended,
  tseslint.configs.recommended,
  {
    ignores: [
      '**/*.md', // Ignore Markdown files
      '**/*.html', // Ignore raw HTML files
      '**/*.py', // Ignore Python scripts
      '**/*.txt', // Ignore plain text
      '**/tmp/**', // Ignore temp files
      '**/app/**', // Ignore custom app output
      '**/dist/**', // Ignore build output
      '**/node_modules/**', // Ignore dependencies
      '**/coverage/**', // Ignore test coverage
      '**/logs/**', // Ignore logs
      '**/vendor/**', // Ignore vendor code
      '**/min.*', // Ignore minified assets
      '**/*.lock', // Ignore lockfiles
      '**/public/**', // Ignore public assets
      '**/.yarn/**' // Ignore Yarn cache
    ],

    // Global language options
    languageOptions: {
      globals: {
        // Browser globals (window, document, etc.)
        ...globals.browser,
        // Node.js globals (process, __dirname, etc.)
        ...globals.node,
        // Jest testing globals
        ...globals.jest,
        // Google reCAPTCHA
        grecaptcha: 'readonly',
        // jQuery $
        $: 'readonly',
        // jQuery object
        jQuery: 'readonly',
        // Google Ads
        adsbygoogle: 'writable',
        // Hexo static site generator
        hexo: 'readonly'
      },
      // Support latest ECMAScript syntax
      ecmaVersion: 'latest',
      // Enable ES modules
      sourceType: 'module'
    },

    plugins: { prettier },

    rules: {
      // ✅ Run Prettier as an ESLint rule (using config with comments)
      'prettier/prettier': ['error', prettierrc],

      // ✅ Disable stylistic rules that conflict with Prettier
      ...prettierConfig.rules,

      // Example JS style relaxations
      'arrow-body-style': 'off', // Allow any arrow fn body style
      'prefer-arrow-callback': 'off', // Allow normal function callbacks
      // ⚙️ Allow unused variables starting with "_"
      'no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_'
        }
      ]
    }
  },

  // ---------------------------------------------------
  // 📜 JavaScript (JS, MJS, CJS, JSX)
  // ---------------------------------------------------
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    languageOptions: {
      // Use Babel parser for modern JS/JSX
      parser: babelParser,
      parserOptions: {
        // Allow parsing without .babelrc
        requireConfigFile: false,
        babelOptions: {
          // Handle JSX in JS files
          presets: ['@babel/preset-react'],
          // Support `import ... with { type: "json" }`
          plugins: ['@babel/plugin-syntax-import-assertions']
        },
        ecmaFeatures: {
          // Enable JSX parsing
          jsx: true
        }
      },
      globals: {
        ...globals.browser,
        ...globals.node
      }
    },
    rules: {
      // Only use base no-unused-vars for JS, allow unused vars starting with _
      '@typescript-eslint/no-unused-vars': 'off',
      // Place custom no-unused-vars last to ensure it takes precedence
      'no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_'
        }
      ]
    }
  },

  // ---------------------------------------------------
  // 🟦 TypeScript (TS, TSX, MTS, CTS)
  // ---------------------------------------------------
  {
    files: ['**/*.{ts,tsx,mts,cts}'],
    languageOptions: {
      // TypeScript-aware parser
      parser: tseslint.parser,
      parserOptions: {
        // Point to project tsconfig
        project: './tsconfig.json'
      },
      globals: {
        ...globals.browser,
        ...globals.node
      }
    },
    rules: {
      // Replace base "no-unused-vars" with TS version
      'no-unused-vars': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off', // No need to force return types
      '@typescript-eslint/no-explicit-any': 'off', // Allow `any`
      '@typescript-eslint/no-this-alias': [
        'error',
        {
          allowDestructuring: false,
          allowedNames: ['self', 'hexo'] // Allow aliasing `this` to self/hexo
        }
      ],
      // Place custom TS unused-vars rule last to ensure it takes precedence
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_', // Allow ignored args starting with "_"
          varsIgnorePattern: '^_', // Allow ignored vars starting with "_"
          caughtErrorsIgnorePattern: '^_' // Allow ignored caught errors
        }
      ]
    }
  },

  // ---------------------------------------------------
  // ⚛️ React (JSX + TSX)
  // ---------------------------------------------------
  {
    files: ['**/*.{jsx,tsx}'],
    plugins: {
      react, // React linting rules
      'react-hooks': reactHooks, // Enforce hooks rules
      prettier
    },
    rules: {
      // ✅ React recommended rules
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,

      // ✅ React Hooks best practices
      ...reactHooks.configs.recommended.rules,

      // ✅ Prettier formatting
      'prettier/prettier': 'error',

      // ⚙️ Adjustments for modern React
      'react/react-in-jsx-scope': 'off', // Not needed in React 17+
      'react/prop-types': 'off' // Disable PropTypes if using TS
    },
    settings: {
      react: {
        version: 'detect' // Auto-detect installed React version
      }
    }
  }
);
```

> **Note:**
> - For ESM projects (`"type": "module"` in `package.json`), use `eslint.config.js` or `eslint.config.mjs`.
> - For CommonJS projects (no `"type": "module"`), use `eslint.config.cjs` or `eslint.config.js`.
> - Choose the config file extension that matches your project's module system for best compatibility.

---

## Key Features of This Config

- **Unified Linting**: One config for JS, TS, React, and Prettier.
- **Modern Syntax Support**: Babel parser for latest JS/JSX, TypeScript parser for TS/TSX.
- **React & Hooks**: Best practices and rules for React and React Hooks.
- **Prettier Integration**: Prettier runs as an ESLint rule, using config with comments.
- **Flexible Ignoring**: Ignores common output, lock, and asset files.
- **Globals**: Pre-configured for browser, Node.js, Jest, and common web globals.
- **Customizable**: Easily extend or override for your project needs.
- **ESM & CJS Project Support**: This ESLint config works for both ECMAScript Module (ESM) and CommonJS (CJS) projects—just use the appropriate file extension (`.mjs`, `.js`, or `.cjs`) for your `eslint.config` file to match your project's module system.

---

## How to Use

1. **Install dependencies** (see Requirements above).
2. **Copy the config** into your project as `eslint.config.js`.
3. **Add a `.prettierrc.json`** file (optionally with comments, thanks to JSONC support).
4. **Run ESLint** on your codebase:

   ```bash
   npx eslint . --ext js,jsx,ts,tsx
   ```

5. **Integrate with your editor** (e.g., VS Code) for real-time linting and formatting.

---

## Troubleshooting & Tips

- If you see parser errors, ensure all dependencies are installed and up to date.
- For TypeScript, make sure your `tsconfig.json` is present and correct.
- You can further customize rules for your team or project style.
- For monorepos, you can share this config across packages.

---

## References & Further Reading

- [ESLint Flat Config Guide](https://eslint.org/docs/latest/use/configure/configuration-files-new)
- [Prettier Documentation](https://prettier.io/docs/en/options.html)
- [TypeScript ESLint](https://typescript-eslint.io/)
- [Babel ESLint Parser](https://github.com/babel/babel/tree/main/eslint/babel-eslint-parser)
- [React ESLint Plugin](https://github.com/jsx-eslint/eslint-plugin-react)

---