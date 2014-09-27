global.expect = require('chai').expect;
global.Plugin = require('./');
describe('Plugin', function() {
  var plugin;

  beforeEach(function() {
    plugin = new Plugin({});
  });

  it('should be an object', function() {
    expect(plugin).to.be.ok;
  });

  it('should has #compile method', function() {
    expect(plugin.compile).to.be.an.instanceof(Function);
  });

  it('should compile and produce valid result', function(done) {
    var content = ':root{--mainSize:2em} body{ font-size:var(--mainSize)}';
    var expected = 'body{ font-size: 2em}';
    plugin.compile({data:content}, function(error, data) {
      expect(error).not.to.be.ok;
      expect(data.trim()).to.equal(expected);
      done();
    });
  });

});
