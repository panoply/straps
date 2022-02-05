# @sissel/rollup-config

Shareable rollup configuration. The module acts as an interface, it exports an instance of Rollup and several plugins that are frequently used by me. Plugins are exposed using getters to better help negate the referencing factor involved in cases where certain projects only require certain plugins.

# Install

```cli
pnpm add @sissel/rollup-config -D
```

# Usage

This is an ESM module, so rollup config files must use a `.mjs` extension (eg: `rollup.config.mjs`) or else Node will complain. The `rollup()` export is totally optional, its a re-export of `defineConfig` and used to provide type completions.

<!-- prettier-ignore -->
```ts
import { rollup, env, plugin } from "@sissel/rollup-config";

export default rollup(
  {
    input: "src/file.ts",
    output:   {
      format: 'cjs',
      dir: 'package',
      sourcemap: env.is('dev', 'inline'), // Inline sourcemap in development else false
      interop: 'default'
    },
    plugins: env.if('div')(
      [
        plugin.commonjs(options: {}),
        plugin.esbuild(options: {}),
        // etc etc
      ]
    )(
      [
        plugin.terser()
      ]
    )
  }
);
```

### Rollup + ESBuild

This package is using ESBuild together will Rollup. TypeScript and JavaScript modules are processed with [esbuild](https://esbuild.github.io/) using [rollup-plugin-esbuild](https://github.com/egoist/rollup-plugin-esbuild).

### Utilities Helper

The configuration is using [@brixtol/rollup-utils](https://github.com/BRIXTOL/rollup-utils) as a helper module. I maintain this in my work organization.

### License

[MIT](#LICENSE)
