## @brixtol/eslint-config

This package includes the shareable ESLint configuration consumed by various projects I maintain.

### Install

[pnpm](https://pnpm.js.org/en/cli/install)

```cli
pnpm i @sissel/eslint-config --save-dev
```

> Requires `typescript` and `eslint` as peers.

### Usage

Extend the configuration within `package.json`

```json
{
  "eslintConfig": {
    "ignorePatterns": "*.html",
    "extends": ["@sissel/eslint-config"]
  }
}
```

### License

[MIT](#LICENSE)
