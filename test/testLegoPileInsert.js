var assert = require('assert');
var lego = require('../legos');
var bst = require('../bst');

const Brick = lego.Brick;
const BST = bst.BST;

/* insert one brick */
describe('Brick', function() {
  describe('BST#insert()', function() {
    it('add a single lego brick to the BST and create the root node', function() {
      var brick0 = new Brick(6, 'red');
      var tree = new BST();
      tree.insert(brick0);
      assert.equal(tree.root.data, brick0);
      assert.equal(tree.root.data.size, 6);
    });
  });
});
