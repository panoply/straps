## @sissel/stylelint-config

This package includes the shareable Stylelint configuration.

### Install

[pnpm](https://pnpm.js.org/en/cli/install)

```cli
pnpm add stylelint @sissel/stylelint-config --save-dev
```

> [Stylelint](https://stylelint.io/) is an `peerDependency` so you will need to install it within your project.

### Usage

We extend configuration from within `package.json` files.

```json
{
  "stylelint": {
    "extends": "@sissel/stylelint-config",
    "ignoreFiles": ["**/node_modules"]
  }
}
```

### Text Editor (VSCode)

Install the [stylelint.vscode-stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint) extension from the marketplace. Depending on how your editor is configured, one may require setting global configuration in a user `settings.json` file:

```jsonc
{
  "stylelint.validate": ["scss", "sass", "less", "postcss"],
  "stylelint.packageManager": "pnpm",
  "stylelint.enable": true,
  "scss.validate": false, // important to disable vscode validation
  "scss.scannerExclude": ["**/.git", "**/node_modules"],
  "editor.codeActionsOnSave": {
    "source.fixAll.stylelint": true
  }
}
```

### License

[MIT](#LICENSE)
