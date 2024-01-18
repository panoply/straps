import { defineConfig } from 'tsup';

export default defineConfig(
  {
    entry: [ './src/index.ts' ],
    outExtension: () => ({
      js: '.js'
    }),
    dts: {
      resolve: true
    },
    clean: false,
    treeshake: false,
    splitting: false,
    keepNames: true,
    platform: 'node',
    format: [
      'cjs'
    ]
  }
);
