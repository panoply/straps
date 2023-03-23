# @sissel/11ty

Shareable [Eleventy](https://www.11ty.dev/) configuration strap. The module acts as an interface, it exports an instance of 11ty and several plugins that are frequently used. It also provide Type support because we are not animals and we live in a society. It's just a simply wrapper around Eleventy.

# Install

```cli
pnpm add @sissel/rollup-config -D
```

# Usage

This is CJS module because 11ty is not ESM. Use it within a `.eleventy.js` or `.eleventy.cjs` configuration file and pass it to `module.exports`. The package comes with some essential plugins included.

<!-- prettier-ignore -->
```ts
const { eleventy, plugin } = require("@sissel/11ty");

module.exports = eleventy(function(config) {


  return {
    htmlTemplateEngine: 'liquid',
    passthroughFileCopy: false,
    pathPrefix: '',
    templateFormats: [
      'liquid',
      'json',
      'md',
      'css',
      'html',
      'yaml'
    ],
    dir: {
      input: 'site',
      output: 'public',
      includes: 'views/include',
      layouts: 'views/layouts',
      data: 'data'
    }
  }
});
```

### Rollup + ESBuild

This package is using ESBuild together will Rollup. TypeScript and JavaScript modules are processed with [esbuild](https://esbuild.github.io/) using [rollup-plugin-esbuild](https://github.com/egoist/rollup-plugin-esbuild).

> **Note** Rollup will inevitably die out as ESBuild starts to become the standard.

### Utilities Helper

The configuration is using [@brixtol/rollup-utils](https://github.com/BRIXTOL/rollup-utils) as a helper module. I maintain this in my work organization.

### License

[MIT](#LICENSE)
