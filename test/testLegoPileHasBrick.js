var assert = require('assert');
var lego = require('../legos');
var bst = require('../bst');

const Brick = lego.Brick;
const LegoPile = lego.LegoPile;
const BST = bst.BST;

/* check for brick known to exist - return true */
describe('Brick', function() {
  describe('LegoPile#hasBrick()', function() {
    it('add bricks with same color and find one that exists', function() {
      var brick0 = new Brick(6, 'red');
      var brick1 = new Brick(3, 'red');
      var brick2 = new Brick(2, 'red');
      var brick3 = new Brick(1, 'red');
      var brick4 = new Brick(8, 'red');
      var brick5 = new Brick(12, 'red');

      var pile = new LegoPile();
      pile.insert(brick0);
      pile.insert(brick1);
      pile.insert(brick2);
      pile.insert(brick3);
      pile.insert(brick4);
      pile.insert(brick5);

      var brickExist = pile.hasBrick(1, 'red'); //brick exists
      assert.equal(brickExist, true);
    });
  });
});

/* check for brick of same color but wrong size known not to exist - return false */
describe('Brick', function() {
  describe('LegoPile#hasBrick()', function() {
    it('add bricks with same color and find one of same color but wrong size that does not exist', function() {
      var brick0 = new Brick(6, 'red');
      var brick1 = new Brick(3, 'red');
      var brick2 = new Brick(2, 'red');
      var brick3 = new Brick(1, 'red');
      var brick4 = new Brick(8, 'red');
      var brick5 = new Brick(12, 'red');

      var pile = new LegoPile();
      pile.insert(brick0);
      pile.insert(brick1);
      pile.insert(brick2);
      pile.insert(brick3);
      pile.insert(brick4);
      pile.insert(brick5);

      var brickExist = pile.hasBrick(16, 'red'); //brick does not exist
      assert.equal(brickExist, false);
    });
  });
});

/* check brick of empty color key does not exist - return false */
describe('Brick', function() {
  describe('LegoPile#hasBrick()', function() {
    it('add bricks of same color and check different color brick that does not exist', function() {
      var brick0 = new Brick(6, 'red');
      var brick1 = new Brick(3, 'red');
      var brick2 = new Brick(2, 'red');
      var brick3 = new Brick(1, 'red');
      var brick4 = new Brick(8, 'red');
      var brick5 = new Brick(12, 'red');

      var pile = new LegoPile();
      pile.insert(brick0);
      pile.insert(brick1);
      pile.insert(brick2);
      pile.insert(brick3);
      pile.insert(brick4);
      pile.insert(brick5);

      var brickExist = pile.hasBrick(2, 'blue'); //brick does not exist
      assert.equal(brickExist, false);
    });
  });
});
