const eleventy = require('@panoply/11ty');
const papyrus = require('papyrus');
const { markdown, sprite, terser, versions } = require('@sissel/11ty');

/**
 * Papyrus Code Blocks
 */
function syntax ({ language, raw }) {

  // Control Different settings for different code block languages
  // For example, ```bash language code block in markdown files.
  if (language === 'bash') {

    return papyrus.static(raw, {
      language,
      editor: false,
      showSpace: false,
    });

  }

  // All Other Languages
  //
  return papyrus.static(raw, {
    language,
    editor: false,
    showSpace: false,
    trimEnd: true,
    trimStart: true
  });

}


module.exports = eleventy(function (config) {

  // Markdown Intergration
  //
  // The syntax callback function will return the extracted
  // code block regions in .md files.
  markdown(config, {
    syntax,
    options: {
      breaks: true,
      html: true,
      linkify: false
    }
  })

  // The versions plugin will generate static subfolders
  // See the Relapse documentation repository for an example
  //
  config.addPlugin(versions, { version: require('./package.json').version })

  // Generates an SVG Sprite
  //
  config.addPlugin(sprite, { inputPath: 'src/assets/svg' });

  // Applied terse distribution when ENV equals "prod"
  // Pass in html-terser options as needed
  //
  config.addPlugin(terser, { prodOnly: true });

  // Example
  config.addPassthroughCopy('./src/assets/img/**')


  return {
    htmlTemplateEngine: 'liquid',
    passthroughFileCopy: false,
    pathPrefix: '',
    templateFormats: ['liquid', 'json', 'md', 'css', 'html', 'yaml'],
    dir: {
      input: 'src',
      output: 'public',
      includes: 'include',
      layouts: 'layout',
      data: ''
    },
  };
});
