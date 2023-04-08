[![Build Status](https://travis-ci.org/en-japan-air/prerender-chrome-headless.svg?branch=master)](https://travis-ci.org/en-japan-air/prerender-chrome-headless)

# Generate static pages from single page applications

Few tool out there allow you to pre-render web applications to static pages either using webpack or fake browser.

This package uses [headless chrome](https://developers.google.com/web/updates/2017/04/headless-chrome) for a more accurate pre-rendering in an actual browser.

As of version `2.0.0` this package internally uses [puppeteer](https://github.com/GoogleChrome/puppeteer).

## Usage

```js
const render = require('prerender-chrome-headless');
const fs = require('fs');

render('https://google.com').then((html) => {
  fs.writeFileSync('/tmp/rendered-page.html', html);
});
```

### Chrome flags

By default this package runs chrome with `--disable-gpu` and `--headless` you can pass additional [flags](http://peter.sh/experiments/chromium-command-line-switches/) calling

```js
render(url, ['--disable-http2'])
```

### Options

```js
render(url, {
  delayLaunch: 0, // milliseconds
  delayPageLoad: 0, // milliseconds
  chromeFlags: [], // list of flags
  puppeteerOptions: {}, // puppeteer launch options
  onPageError() {} // callback
});
```

The second parameter of `render` function can either be an array of chrome flags or an object with

* `delayLaunch` Wait to launch Chrome browser, in case you need more time to set up the server
* `delayPageLoad` Wait after the page load event for your JS to run
* `chromeFlags` List of chrome flags
* `puppeteerOptions` Options for puppeteer launch as [documented at puppeteer](https://github.com/GoogleChrome/puppeteer/blob/v1.13.0/docs/api.md#puppeteerlaunchoptions). 
Note, you can specify chromeFlags here as well but if you specified chromeFlags then that takes precedence over `args` defined in `puppeteerOptions`.
* `onPageError` Function called when an uncaught exception happens within the page. You can use this function for 
instance to fail your build if error happens during the generation of the page


## Continuous integration

The package works on any machine with Chrome installed. Most CI environments allows you to install external packages.

### Travis

Here is what you have to do to get Chrome headless working on Travis

```yml
# The default at the time of writing this blog post is Ubuntu `precise`
# Chrome addon is only available on trusty+ or OSX
dist: trusty

# This will install Chrome stable (which already supports headless)
addons:
  chrome: stable

before_install:
  # Needed by `chrome-launcher`
  - export LIGHTHOUSE_CHROMIUM_PATH=google-chrome-stable

script:
  # Run your build script that fetches a page and writes the output
  - node generate_static_page.js
```


# Related links

* [static-site-generator-webpack-plugin](https://github.com/markdalgleish/static-site-generator-webpack-plugin) webpack plugin that generates static pages from your universal application.
* [react-snapshot](https://github.com/geelen/react-snapshot) runs your React application inside a fake browser, [jsdom](https://github.com/tmpvar/jsdom)
* [prerender-spa-plugin](https://github.com/chrisvfritz/prerender-spa-plugin) webpack plugin that uses Phantom.JS.
* [chrome-render](https://github.com/gwuhaolin/chrome-render) render any web page inside chrome headless browser, only works in node 7+.
