var assert = require('assert');
var lego = require('../legos');
var bst = require('../bst');

const Brick = lego.Brick;
const BST = bst.BST;

/* add bricks of the same color and count the BST nodes */
describe('Brick', function() {
	describe('BST#count()', function() {
		it('add six bricks of the same color and count the number of bricks added to the BST', function() {
			var brick0 = new Brick(6, 'red');
			var brick1 = new Brick(8, 'red');
			var brick2 = new Brick(3, 'red');
			var brick3 = new Brick(4, 'red');
			var brick4 = new Brick(1, 'red');
			var brick5 = new Brick(2, 'red');
			var tree = new BST();
			tree.insert(brick0);
			tree.insert(brick1);
			tree.insert(brick2);
			tree.insert(brick3);
			tree.insert(brick4);
			tree.insert(brick5);

			assert.equal(6, tree.count());
		});
	});
});

/* add bricks of the same color containing one invalid color and count the BST nodes */
describe('Brick', function() {
	describe('BST#count()', function() {
		it('add six bricks of the same color and one invalid color and count the number of bricks added to the BST', function() {
			var brick0 = new Brick(6, 'red');
			var brick1 = new Brick(8, 'red');
			var brick2 = new Brick(3, 'red');
			var brick3 = new Brick(4, 'red');
			var brick4 = new Brick(1, 'red');
			var brick5 = new Brick(2, 'red');
			var brick6 = new Brick(2, 'purple'); //invalid
			var tree = new BST();
			tree.insert(brick0);
			tree.insert(brick1);
			tree.insert(brick2);
			tree.insert(brick3);
			tree.insert(brick4);
			tree.insert(brick5);
			tree.insert(brick6);

			assert.equal(6, tree.count());
		});
	});
});
