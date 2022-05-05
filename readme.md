# @sissel/straps

Build strap configuration presets I used for various projects. This monorepo exports several development configs which allow drop-in (batteries included) functionality for various TS packages, modules and projects I work on or maintain. It is merely for convenience and if you stumble across, feel free to use it as a boilerplate to your next project with [pnpm](https://pnpm.js.org/en/cli/install).

#### @sissel/rollup-config

This is a shareable [Rollup](https://rollupjs.org/guide/en/) configuration, within your `rollup.config.mjs` file:

```js
import { plugin, rollup, env, config } from "@sissel/rollup-config";

export default rollup({});
```

> See the [@sissel/rollup-config](https://github.com/panoply/straps/tree/master/packages/rollup-config) readme.

#### @sissel/tsconfig

This is a shareable [TypeScript](https://www.typescriptlang.org/) `tsconfig.json` configuration file.

```jsonc
{
  "extends": "@sissel/tsconfig"
}
```

> See the [@sissel/tsconfig](https://github.com/panoply/straps/tree/master/packages/tsconfig) readme.

#### @sissel/stylelint-config

This is a shareable [Stylelint](https://stylelint.io/) configuration.

```jsonc
{
  "stylelint": {
    "extends": ["@sissel/stylelint-config"],
    "ignoreFiles": ["**/*.js"]
  }
}
```

> See the [@sissel/stylelint-config](https://github.com/panoply/straps/tree/master/packages/stylelint-config) readme.

#### @sissel/prettier-config

This is a shareable [Prettier](https://prettier.io/) config. Extend configuration from within `package.json` files.

> Please note that prettier does not yet support ignored files via `package.json` so you need to add a `.prettierignore` file in your workspace. The feature is coming in https://github.com/prettier/prettier/pull/12672.

```json
{
  "prettier": "@sissel/prettier-config"
}
```

> See the [@sissel/prettier-config](https://github.com/panoply/straps/tree/master/packages/prettier-config) readme.

#### @sissel/eslint-config

This is a shareable ESLint config. Extend configuration from within `package.json` files, eg:

```jsonc
{
  "eslintConfig": {
    "ignorePatterns": ["*.html"],
    "extends": ["@sissel/eslint-config"],
    "rules": {}
  }
}
```

> See the [@sissel/eslint-config](https://github.com/panoply/straps/tree/master/packages/eslint-config) readme.

### License

[MIT](#LICENSE)
