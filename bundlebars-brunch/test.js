'use strict';

const expect = require('chai').expect;
const Plugin = require('./');
const fs = require('fs');

describe('Plugin', () => {
  let plugin;

  beforeEach(() => {
    plugin = new Plugin({paths: {root: '.'}});
  });

  it('should be an object', () => {
    expect(plugin).to.be.ok;
  });

  it('should has #compileStatic method', () => {
    expect(plugin.compileStatic).to.be.an.instanceof(Function);
  });

  it('should compileStatic and produce valid result', () => {
    // Setup
    var expected = "<!DOCTYPE html>\n<head>\n  <title>Hi</title>\n<pre><code>&lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; href=&quot;style.css&quot;&gt;\n</code></pre>\n</head>\n<body>\n  <div class=\"header\">\n    <a href=\"index.html\" class=\"logo\" style=\"background-image:url(img/logo.svg);\"></a>\n<pre><code>&lt;div class=&quot;nav&quot;&gt;\n    &lt;a href=&quot;index.html&quot; class=&quot;\n      nav__item\n      \n    &quot;&gt;\n      Home\n    &lt;/a&gt;\n    &lt;a href=&quot;about.html&quot; class=&quot;\n      nav__item\n      \n    &quot;&gt;\n      About\n    &lt;/a&gt;\n&lt;/div&gt;\n</code></pre>\n  </div>\n<h1>Just hack&amp;#x27;n</h1>\n<p>And this is the body of the content with the description of</p>\n<p>Nothing to see here</p>\n<p>inserted by bundlebars and also a partial of</p>\n<p>&lt;h1&gt;Hi from apart&lt;/h1&gt;</p>\n<p>inserted.</p>\n  <div class=\"footer\">2017 &copy; Copyleft</div>\n</body>\n</html>\n";
    var testFilePath = './app/assets/pages/test.md';
    var testData = fs.readFileSync(testFilePath, 'utf8');

    // Test
    return plugin.compileStatic({data: testData, path: testFilePath}).then(got => {
      console.log(got);
      expect(got).to.equal(expected);
    }, error => expect("Got " + got + " " + error).not.to.be.ok);
  });

});
