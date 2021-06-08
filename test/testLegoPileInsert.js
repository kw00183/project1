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

/* insert one brick of each color */
describe('Brick', function() {
  describe('LegoPile#insert()', function() {
    it('add a single brick to the pile for each color', function() {
      var brick0 = new Brick(6, 'red');
      var brick1 = new Brick(6, 'blue');
      var brick2 = new Brick(6, 'yellow');
      var brick3 = new Brick(6, 'green');
      var brick4 = new Brick(6, 'black');
      var brick5 = new Brick(6, 'white');

      var pile = new LegoPile();
      pile.insert(brick0);
      pile.insert(brick1);
      pile.insert(brick2);
      pile.insert(brick3);
      pile.insert(brick4);
      pile.insert(brick5);

      var redBST = pile.dictionary['red'].root.data;
      var blueBST = pile.dictionary['blue'].root.data;
      var yellowBST = pile.dictionary['yellow'].root.data;
      var greenBST = pile.dictionary['green'].root.data;
      var blackBST = pile.dictionary['black'].root.data;
      var whiteBST = pile.dictionary['white'].root.data;
      assert.equal(redBST, brick0);
      assert.equal(blueBST, brick1);
      assert.equal(yellowBST, brick2);
      assert.equal(greenBST, brick3);
      assert.equal(blackBST, brick4);
      assert.equal(whiteBST, brick5);
    });
  });
});

/* insert many bricks of one color */
describe('Brick', function() {
  describe('LegoPile#insert()', function() {
    it('add many bricks of one color', function() {
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

      var redBST = pile.dictionary['red'];
      assert.equal(redBST.root.data, brick0); //root
      assert.equal(redBST.root.left.data, brick1); //root->left
      assert.equal(redBST.root.left.left.data, brick2); //root->left->left
      assert.equal(redBST.root.left.left.left.data, brick3); //root->left->left->left
      assert.equal(redBST.root.right.data, brick4); //root->right
      assert.equal(redBST.root.right.right.data, brick5); //root->right->right
    });
  });
});
