## @sissel/prettier-config

This package includes the shareable Prettier configuration.

### Install

[pnpm](https://pnpm.js.org/en/cli/install)

```cli
pnpm add prettier @sissel/prettier-config --save-dev
```

> Prettier is an `optionalDependency` so you will need to install it within your project.

### Usage

We extend configuration from within `package.json` files.

```json
{
  "prettier": "@sissel/prettier-config"
}
```

### Text Editor (VSCode)

Install the [esbenp.prettier-vscode](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) extension from the marketplace. Depending on how your editor is configured, one may require setting global configuration in a user `settings.json` file:

```jsonc
{
  "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[markdown]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```

### Ignored Files

I do not leverage prettier for various file types because it is extremely opinionated and conflicts with my code style, especially that found in JavaScript and TypeScript based projects. In almost all projects a `.prettierignore` file is included to prevent prettier from wreaking utter havoc in my development workspaces. Below is standard ignores asserted:

```
*.toml
*.mjs
*.js
*.ts
*.css
*.scss
*.liquid
*.html
```

### License

[MIT](#LICENSE)
