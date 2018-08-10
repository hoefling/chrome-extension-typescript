This fork uses `webpack` for bundling the extension.

## Usage

### Development

```sh
$ git clone https://github.com/hoefling/chrome-extension-typescript.git
$ cd chrome-extension-typescript
$ yarn install
$ yarn run watch
```

Now load the `dist/` directory in Chrome:
 * open `chrome://extensions/`
 * select `Developer mode` checkbox
 * click on `Load unpacked extension`
 * navigate to `dist/` dir

`webpack` will watch for file changes and update the dist files automatically.

### Tests

Tests are run with Karma + Mocha + Chai. Coverage + JUnit reporters will store reports in the `reports/` dir.

```sh
$ yarn run test
```

### Distribution

```sh
yarn bun build
```

### Stats

[![Build Status](https://travis-ci.org/hoefling/chrome-extension-typescript.svg?branch=master)](https://travis-ci.org/hoefling/chrome-extension-typescript)
[![Coverage Status](https://coveralls.io/repos/github/hoefling/chrome-extension-typescript/badge.svg?branch=master)](https://coveralls.io/github/hoefling/chrome-extension-typescript?branch=master)
