var grunt = require('grunt');
var mockery = require('mockery');

module.exports = {
  setUp : function(callback) {
    callback();
  },

  tearDown : function(callback) {
    mockery.deregisterAll();
    mockery.resetCache();
    mockery.disable();

    callback();
  },

  minor : function(test) {


    var output = require('./output.json');
    test.equals(output.commands.length, 0);

    test.done();
  }

};
