var assert = require('assert');
var featureConst = require('../lib/features/const');

describe('const', function() {
  it('const', function(){
    assert.equal(featureConst(), true);
  });
});