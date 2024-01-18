import type { EleventyConfig } from '@panoply/11ty';
import md from 'markdown-it';
import mdcontainer from 'markdown-it-container';
import type { LiteralUnion } from 'type-fest';

export type Languages = LiteralUnion<(
  | 'html'
  | 'bash'
  | 'css'
  | 'scss'
  | 'liquid'
  | 'xml'
  | 'json'
  | 'javascript'
  | 'typescript'
  | 'jsx'
  | 'tsx'
  | 'yaml'
  | 'plaintext'
  | 'treeview'
), string>

export interface CodeBlocks {
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

export interface IMarkdown {
  /**
   * Papyrus Syntax Highlighting
   */
  syntax(options: CodeBlocks): string;
  /**
   * Markdown IT Config
   */
  options: Omit<md.Options, 'highlight'>;
}

/**
 * Prints an error to the console when an issue occurs during the
 * `highlightCode` function.
 */
function highlightError (language: Languages, error: string) {

  const SEP = '\n\n------------------------------------------------------------\n\n';

  console.error(
    SEP,
    ' HIGHLIGHT ERROR\n',
    ' LANGUAGE: ' + language + '\n\n',
    error,
    SEP
  );

}

function highlightCode (
  md: md,
  raw: string,
  language: string
) {

  if (language) {

    try {

      return <CodeBlocks>{
        language,
        raw,
        escape: () => md.utils.escapeHtml(raw)
      };

    } catch (err) {

      highlightError(language, err);

      return md.utils.escapeHtml(raw);

    }

  }

  return md.utils.escapeHtml(raw);

};

function grid (md: md, tokens: md.Token[], idx: number) {

  if (tokens[idx].nesting === 1) {

    const col = tokens[idx].info.trim().match(/^grid\s+(.*)$/);

    if (col !== null) {

      // opening tag
      return [

        /* html */`
       <div class="${md.utils.escapeHtml(col[1])}">
       `
      ].join('');
    }

  }

  return '</div>';

}

function notes (tokens: md.Token[], index: number) {

  return tokens[index].nesting === 1 ? '<blockquote class="note">' : '</blockquote>';

}

export function markdown (config: EleventyConfig, options: IMarkdown) {

  const opts = Object.assign<md.Options, IMarkdown['options']>({
    html: true,
    linkify: true,
    typographer: true,
    breaks: false
  }, options.options);

  const markdown = md({
    ...opts,
    highlight: (str, lang) => {

      const syntax = highlightCode(markdown, str, lang);

      if (typeof syntax === 'object') {
        return options.syntax(syntax);
      }

      return syntax;

    }
  }).use(mdcontainer, 'note', {
    render: notes
  }).use(mdcontainer, 'grid', {
    render: (tokens: md.Token[], idx: number) => (
      grid(markdown, tokens, idx)
    )
  });

  markdown.disable('code');
  config.setLibrary('md', markdown);

  return markdown;

}
