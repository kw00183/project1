var assert = require('assert');
var lego = require('../legos');
var bst = require('../bst');

const Brick = lego.Brick;
const LegoPile = lego.LegoPile;
const BST = bst.BST;

/* check count for all bricks */
describe('Brick', function() {
  describe('LegoPile#count()', function() {
    it('add bricks and count the total number', function() {
      var brick0 = new Brick(6, 'red');
      var brick1 = new Brick(3, 'red');
      var brick2 = new Brick(2, 'red');
      var brick3 = new Brick(1, 'red');
      var brick4 = new Brick(8, 'red');
      var brick5 = new Brick(12, 'red');
      var brick6 = new Brick(6, 'blue');
      var brick7 = new Brick(3, 'green');
      var brick8 = new Brick(2, 'black');
      var brick9 = new Brick(1, 'blue');
      var brick10 = new Brick(8, 'white');
      var brick11 = new Brick(12, 'red');
      var brick12 = new Brick(12, 'purple');
      var brick13 = new Brick(12, 'white');
      var brick14 = new Brick(12, 'red');

      var pile = new LegoPile();
      pile.insert(brick0);
      pile.insert(brick1);
      pile.insert(brick2);
      pile.insert(brick3);
      pile.insert(brick4);
      pile.insert(brick5);
      pile.insert(brick6);
      pile.insert(brick7);
      pile.insert(brick8);
      pile.insert(brick9);
      pile.insert(brick10);
      pile.insert(brick11);
      pile.insert(brick12);
      pile.insert(brick13);
      pile.insert(brick14);

      assert.equal(14, pile.count());
    });
  });
});
