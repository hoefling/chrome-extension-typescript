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

### Distribution

```sh
yarn bun build
```
