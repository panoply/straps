import { Options } from 'html-minifier-terser';
import { EleventyConfig } from '@panoply/11ty';
import md from 'markdown-it';
import SVGSpriter from 'svg-sprite';

declare function terser(eleventy: EleventyConfig, options?: Options & {
    prodOnly?: boolean;
}): void;

/**
Matches any [primitive value](https://developer.mozilla.org/en-US/docs/Glossary/Primitive).

@category Type
*/
type Primitive =
	| null
	| undefined
	| string
	| number
	| boolean
	| symbol
	| bigint;

declare global {
	// eslint-disable-next-line @typescript-eslint/consistent-type-definitions -- It has to be an `interface` so that it can be merged.
	interface SymbolConstructor {
		readonly observable: symbol;
	}
}

/**
Allows creating a union type by combining primitive types and literal types without sacrificing auto-completion in IDEs for the literal type part of the union.

Currently, when a union type of a primitive type is combined with literal types, TypeScript loses all information about the combined literals. Thus, when such type is used in an IDE with autocompletion, no suggestions are made for the declared literals.

This type is a workaround for [Microsoft/TypeScript#29729](https://github.com/Microsoft/TypeScript/issues/29729). It will be removed as soon as it's not needed anymore.

@example
```
import type {LiteralUnion} from 'type-fest';

// Before

type Pet = 'dog' | 'cat' | string;

const pet: Pet = '';
// Start typing in your TypeScript-enabled IDE.
// You **will not** get auto-completion for `dog` and `cat` literals.

// After

type Pet2 = LiteralUnion<'dog' | 'cat', string>;

const pet: Pet2 = '';
// You **will** get auto-completion for `dog` and `cat` literals.
```

@category Type
*/
type LiteralUnion<
	LiteralType,
	BaseType extends Primitive,
> = LiteralType | (BaseType & Record<never, never>);

type Languages = LiteralUnion<('html' | 'bash' | 'css' | 'scss' | 'liquid' | 'xml' | 'json' | 'javascript' | 'typescript' | 'jsx' | 'tsx' | 'yaml' | 'plaintext' | 'treeview'), string>;
interface CodeBlocks {
    /**
     * The Code Block Language ID
     */
    language: Languages;
    /**
     * The inner contents of the code block
     */
    raw: string;
    /**
     * The inner contents of the code block
     */
    escape(): string;
}
interface IMarkdown {
    /**
     * Papyrus Syntax Highlighting
     */
    syntax(options: CodeBlocks): string;
    /**
     * Markdown IT Config
     */
    options: Omit<md.Options, 'highlight'>;
}
declare function markdown(config: EleventyConfig, options: IMarkdown): md;

interface ISVGSprite {
    /**
     * Relative path to svg directory
     */
    inputPath: string;
    /**
     * The output path of the SVG Sprite
     */
    outputPath?: string;
    /**
     * Applied to all embedded occurances
     *
     * ```liquid
     * {% svg 'icon-name', 'global-class custom-class' %}
     * ```
     *
     * @default ''
     */
    globalClass?: string;
    /**
     * Applied to all embedded occurances
     *
     * ```liquid
     * {% svg 'icon-name', 'global-class default-class' %}
     * ```
     *
     * @default ''
     */
    defaultClass?: string;
    /**
     * The Sprite shortcode
     *
     * ```liquid
     * {% sprite %}
     * ```
     *
     * @default 'sprite'
     */
    spriteShortCode: string;
    /**
     * The embedded SVG shortcode
     *
     * ```liquid
     * {% svg 'icon-name', 'custom-class' %}
     * ```
     */
    svgShortCode: string;
    /**
     * [SVG Sprite](https://github.com/svg-sprite/svg-sprite) Options
     */
    spriteConfig: SVGSpriter.Config;
}
declare function sprite(eleventyConfig: EleventyConfig, pluginConfig: ISVGSprite[]): void;

declare function versions(eleventyConfig: EleventyConfig, { version }?: {
    version: string;
}): void;

export { markdown, sprite, terser, versions };
