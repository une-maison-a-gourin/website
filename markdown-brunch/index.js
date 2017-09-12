'use strict';

var md = require('markdown-it')({
  html: true,
  linkify: true,
  typographer: true,
});

class MarkdownCompiler {
  constructor(config) {
    if (config.plugins) {
      this.config = config.plugins.MarkdownCompiler;
    } else {
      this.config = {};
    }
  }

  compileStatic(params) {
    var data = params.data;
    return new Promise((resolve, reject) => {
      if (data === '') {
        reject('Empty data');
      } else {
        resolve(md.render(data));
      }
    });
  }
}

MarkdownCompiler.prototype.brunchPlugin = true;
MarkdownCompiler.prototype.type = 'template';
MarkdownCompiler.prototype.extension = /\.(markdown|md)$/;
MarkdownCompiler.prototype.staticTargetExtension = 'html';

module.exports = MarkdownCompiler;
