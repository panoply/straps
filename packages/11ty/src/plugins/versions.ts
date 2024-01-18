import type { EleventyConfig } from '@panoply/11ty';
import { readdirSync, existsSync, mkdirSync } from 'fs';
import { join } from 'path';

export function versions (eleventyConfig: EleventyConfig, { version }: { version: string} = { version: null }) {

  if (version === null) {
    console.warn('[version-plugin] Missing the { version } parameter ');
    return;
  }
  const cwd = process.cwd();
  const dir = join(cwd, 'version');

  if (!existsSync(dir)) mkdirSync(dir);

  const versions = readdirSync(join(cwd, 'version')).filter(v => v !== '.DS_Store').map(version => {

    const v = version.replace(/\.zip/, '');

    return `<li><a href="/v/${v}/">${v.replace(/-beta/, ' (beta)')}</a></li>`;

  }).join('');

  eleventyConfig.addLiquidShortcode('version', () => version);
  eleventyConfig.addLiquidShortcode('versions', () => versions);

}
