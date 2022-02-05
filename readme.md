# @sissel/straps

Build strap configuration presets I used for various projects. This monorepo exports several preset configs which allow drop-in (batteries included) functionality for various TS packages I work on. It is merely for convenience and if you stumble across this repo unless you want to use this it holds little beyond my personal requirements.

#### @sissel/tsconfig

This is a shareable `tsconfig.json` file.

#### @sissel/rollup-config

This is a shareable Rollup configuration.

#### @sissel/prettier-config

This is a shareable Prettier config. Extend configuration from within `package.json` files, eg:

```json
{
  "prettier": "@sissel/prettier-config"
}
```

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

### License

[MIT](#LICENSE)
