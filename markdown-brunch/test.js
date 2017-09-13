'use strict';

const expect = require('chai').expect;
const Plugin = require('./');

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
    const content = '# This is a title';
    var expected = "<h1>This is a title</h1>\n";

    return plugin.compileStatic({data: content, path: './app/assets/pages/test.hbs'}).then(got => {
      expect(eval(got)).to.equal(expected);
    }, error => expect("Got " + got + " " + error).not.to.be.ok);
  });

});
