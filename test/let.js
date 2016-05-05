var assert = require('assert');
var featureLet = require('../lib/features/let');

describe('let', function() {
  it('let', function(){
    assert.equal(featureLet(), true);
  });
});