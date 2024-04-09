import { minify, Options } from 'html-minifier-terser';
import type { EleventyConfig } from '@panoply/11ty';
import merge from 'mergerino';

export function terser (eleventy: EleventyConfig, options: Options & { prodOnly?: boolean } = { prodOnly: true }) {

  if (options.prodOnly === true && process.env.ENV !== 'prod') return;

  const config = merge({
    collapseWhitespace: true,
    minifyCSS: true,
    minifyJS: true,
    removeComments: true,
    removeRedundantAttributes: true
  }, options as any, { prodOnly: undefined } as any);

  // @ts-expect-error
  eleventy.namespace('html-terser', () => {

    eleventy.addTransform('html-terser', async function (content: string, outputPath: string) {

      try {

        if (outputPath?.endsWith('.html')) {

          const minified = await minify(content, config);

          return minified;

        }

      } catch (error) {

        console.error(error);

      }

      return content;

    });

  });

};
