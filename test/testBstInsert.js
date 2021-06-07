var assert = require('assert');
var lego = require('../legos');
var bst = require('../bst');

const Brick = lego.Brick;
const BST = bst.BST;

describe('Brick', function() {
  describe('BST#insert()', function() {
    it('add a single lego brick to the BST and create the root node', function() {
      let data = new Brick(6, 'red');
      let tree = new BST();
      let insert = tree.insert(data);
      assert.equal(tree.root.data, 6);
    });
  });
});
