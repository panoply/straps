/* eslint-disable no-use-before-define */
import { Options as BrowserSyncOptions } from 'browser-sync';


export type TemplateEngines =
  | 'html'
  | 'md'
  | '11ty.js'
  | 'liquid'
  | 'njk'
  | 'hbs'
  | 'mustache'
  | 'ejs'
  | 'haml'
  | 'pug'
  | 'jstl';

export type Plugin<Options = undefined> =
  | PluginFunction<Options>
  | PluginObject<Options>;

export type PluginFunction<Options> = (
  eleventyConfig: Config,
  options: Options
) => void;

export interface PluginObject<Options> {
  initArguments?: object;
  configFunction: PluginFunction<Options>;
}

export type AsyncFilterCallback = (
  error: unknown | null,
  result?: any
) => void;

export interface Config {
  /**
   * Enable quiet mode to reduce console noise
   */
  setQuietMode(quiet: boolean): void;

  setTemplateFormats(formats: readonly string[]): void;

  // Data Deep Merge
  setDataDeepMerge(deepMerge: boolean): void;

  // Customize front matter parsing
  setFrontMatterParsingOptions(options: any): void;

  // Watch and serve configuration
  setWatchJavaScriptDependencies(watch: boolean): void;
  setBrowserSyncConfig(eleventyConfig: BrowserSyncOptions): void;
  setWatchThrottleWaitTime(ms: number): void;
  addWatchTarget(target: string): void;

  // Ignore files
  setUseGitIgnore(use: boolean): void;

  addTransform(
    transformName: string,
    transform: (
      content: string,
      outputPath: string
    ) => string | PromiseLike<string>
  ): void;

  addLinter(
    linterName: string,
    linter: (content: string, inputPath: string, outputPath: string) => void
  ): void;

  addPassthroughCopy(path: string | { [input: string]: string }): void;

  // Filters
  addLiquidFilter(filterName: string, filter: (...args: any[]) => string): void;
  addNunjucksFilter(
    filterName: string,
    filter: (...args: any[]) => string
  ): void;
  addNunjucksAsyncFilter(
    filterName: string,
    filter: (callback: AsyncFilterCallback) => void
  ): void;
  addNunjucksAsyncFilter(
    filterName: string,
    filter: (arg: any, callback: AsyncFilterCallback) => void
  ): void;
  addNunjucksAsyncFilter(
    filterName: string,
    filter: (arg1: any, arg2: any, callback: AsyncFilterCallback) => void
  ): void;
  addHandlebarsHelper(
    filterName: string,
    filter: (...args: any[]) => string
  ): void;
  addJavaScriptFunction(
    filterName: string,
    filter: (...args: any[]) => string | PromiseLike<string>
  ): void;
  addFilter(filterName: string, filter: (...args: any[]) => string): void;
  getFilter(filterName: string): (...args: any[]) => string;

  // Shortcodes
  addLiquidShortcode(
    shortcodeName: string,
    filter: (...args: any[]) => string | PromiseLike<string>
  ): void;
  addNunjucksShortcode(
    shortcodeName: string,
    filter: (...args: any[]) => string | PromiseLike<string>
  ): void;
  addHandlebarsShortcode(
    shortcodeName: string,
    filter: (...args: any[]) => string
  ): void;
  addJavaScriptFunction(
    shortcodeName: string,
    filter: (...args: any[]) => string | PromiseLike<string>
  ): void;
  addShortcode(
    shortcodeName: string,
    filter: (...args: any[]) => string | PromiseLike<string>
  ): void;
  addPairedLiquidShortcode(
    shortcodeName: string,
    filter: (content: string, ...args: any[]) => string | PromiseLike<string>
  ): void;
  addPairedNunjucksShortcode(
    shortcodeName: string,
    filter: (content: string, ...args: any[]) => string | PromiseLike<string>
  ): void;
  addPairedHandlebarsShortcode(
    shortcodeName: string,
    filter: (content: string, ...args: any[]) => string
  ): void;
  addPairedShortcode(
    shortcodeName: string,
    filter: (content: string, ...args: any[]) => string | PromiseLike<string>
  ): void;

  addPlugin(plugin): void;

  on(
    event: 'beforeBuild' | 'afterBuild' | 'beforeWatch',
    handler: () => void
  ): void;
}

export type LocalConfig = ExportFunction | ReturnConfig;

export type ExportFunction = (eleventyConfig: Config) => ReturnConfig | undefined;

export interface ReturnConfig {
  dir?: {
    /**
     * Input directory
     */
    input?: string;
    /**
     * Output directory
     */
    output?: string;
    /**
     * Directory for includes
     */
    includes?: string;
    /**
     * Directory for layouts
     */
    layouts?: string;
    /**
     * Directory for global data files
     */
    data?: string;
  };

  /**
   * Default template engine for global data files
   */
  dataTemplateEngine?: TemplateEngines | false;
  /**
   * Default template engine for markdown files
   */
  markdownTemplateEngine?: TemplateEngines | false;
  /**
   * Default template engine for HTML files
   */
  htmlTemplateEngine?: TemplateEngines | false;
  /**
   * Template formats that should be transformed
   */
  templateFormats?: string | string[];

  /**
   * URL path prefix
   */
  pathPrefix?: string;

  /**
   * Suffix that will be added to output files
   * if `dir.input` and `dir.output` match.
   */
  htmlOutputSuffix?: string;
  /**
   * Set file suffix for template and directory specific data files.
   */
  jsDataFileSuffix?: string;

  /**
   * Disable passthrough file copy
   */
  passthroughFileCopy?: boolean;
}

/* -------------------------------------------- */
/* CUSTOM PLUGINS                               */
/* -------------------------------------------- */


/**
 * Syntax Highlighter
 *
 * Callback function passed to the `init` function
 * of @11ty/eleventy-plugin-syntaxhighlight.
 */
export type PluginPrism = (this: Config, params: { Prism: globalThis.Prism }) => void



/**
 * Sort Order
 *
 * Uses the frontmatter data `order` to sort a list of collection page urls.
 * The `order` property requires a numeric value be provided.
 */
export type PluginOrder = (template: { data: { order?: number }}[]) => void

 /* -------------------------------------------- */
 /* NAMESPACE                                    */
 /* -------------------------------------------- */

 export as namespace Eleventy;
