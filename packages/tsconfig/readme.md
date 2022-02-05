# @sissel/tsconfig

This package includes a shareable TypeScript configuration which I use and referenced within various TypeScript packages via the `extends` option of a `tsconfig.json` file.

# Install

```cli
pnpm add @sissel/tsconfig typescript -D
```

> Include `typescript` as we need to reference it directly in most packages.

# Usage

Provide to the `extends` option within a `tsconfig.json`

```json
{
  "extends": "@sissel/tsconfig"
}
```

### License

[MIT](#LICENSE)
