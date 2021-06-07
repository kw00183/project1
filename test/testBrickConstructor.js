var assert = require('assert');
var lego = require('../legos');
const Brick = lego.Brick;

describe('Brick', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([2, "blue"].indexOf(4), -1);
    });
  });
});


