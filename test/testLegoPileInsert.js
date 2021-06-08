var assert = require('assert');
var lego = require('../legos');
var bst = require('../bst');

const Brick = lego.Brick;
const LegoPile = lego.LegoPile;
const BST = bst.BST;

/* insert one brick */
describe('Brick', function() {
  describe('LegoPile#insert()', function() {
    it('add a single brick to the pile', function() {
      var brick0 = new Brick(6, 'red');
      var pile = new LegoPile();
      pile.insert(brick0);

      var redBST = pile.dictionary['red'].root.data;
      assert.equal(redBST, brick0);
    });
  });
});
