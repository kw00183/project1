var assert = require('assert');
var lego = require('../legos');
const Brick = lego.Brick;

describe('Brick', function() {
  it('should create a lego brick of size and color equal to value passed', function() {
    let myBrick = new Brick(2, 'blue');
    assert.strictEqual(myBrick.size, 2);
    assert.strictEqual(myBrick.color, 'blue');
  });
});


