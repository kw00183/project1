var assert = require('assert');
var lego = require('../legos');
var bst = require('../bst');

const Brick = lego.Brick;
const BST = bst.BST;

/* test for one brick - root */
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

/* root plus one left child */
describe('Brick', function() {
	describe('BST#insert()', function() {
		it('add two bricks to make the root and left nodes with left node less than root', function() {
			var brick0 = new Brick(6, 'red');
			var brick1 = new Brick(3, 'blue');
			var tree = new BST();
			tree.insert(brick0);
			tree.insert(brick1);
			assert.equal(tree.root.data, brick0);
			assert.equal(tree.root.data.size, 6);
			assert.equal(tree.root.left.data.size, 3);
		});
	});
});

/* root plus one right child */
describe('Brick', function() {
	describe('BST#insert()', function() {
		it('add two bricks to make the root and right nodes with right node greater than root', function() {
			var brick0 = new Brick(6, 'red');
			var brick1 = new Brick(8, 'blue');
			var tree = new BST();
			tree.insert(brick0);
			tree.insert(brick1);
			assert.equal(tree.root.data, brick0);
			assert.equal(tree.root.data.size, 6);
			assert.equal(tree.root.right.data.size, 8);
		});
	});
});

/* root plus one left child and one right child */
describe('Brick', function() {
	describe('BST#insert()', function() {
		it('add three bricks to make the root and both right and left nodes with right node greater than root and left less than the root', function() {
			var brick0 = new Brick(6, 'red');
			var brick1 = new Brick(8, 'blue');
			var brick2 = new Brick(3, 'yellow');
			var tree = new BST();
			tree.insert(brick0);
			tree.insert(brick1);
			tree.insert(brick2);
			assert.equal(tree.root.data, brick0);
			assert.equal(tree.root.data.size, 6);
			assert.equal(tree.root.left.data, brick2);
			assert.equal(tree.root.left.data.size, 3);
			assert.equal(tree.root.right.data, brick1);
			assert.equal(tree.root.right.data.size, 8);
		});
	});
});

/* root plus 5 nodes */
describe('Brick', function() {
	describe('BST#insert()', function() {
		it('add six bricks and check the root, left and right are the expected values', function() {
			var brick0 = new Brick(6, 'red');
			var brick1 = new Brick(8, 'blue');
			var brick2 = new Brick(3, 'yellow');
			var brick3 = new Brick(4, 'yellow');
			var brick4 = new Brick(1, 'green');
			var brick5 = new Brick(2, 'black');
			var tree = new BST();
			tree.insert(brick0);
			tree.insert(brick1);
			tree.insert(brick2);
			tree.insert(brick3);
			tree.insert(brick4);
			tree.insert(brick5);
			assert.equal(tree.root.data, brick0); //root
			assert.equal(tree.root.data.size, 6);
			assert.equal(tree.root.left.data, brick2); //root->left
			assert.equal(tree.root.left.data.size, 3);
			assert.equal(tree.root.right.data, brick1); //root->right
			assert.equal(tree.root.right.data.size, 8);
			assert.equal(tree.root.left.left.data, brick4); //root->left->left
			assert.equal(tree.root.left.left.data.size, 1);
			assert.equal(tree.root.left.left.right.data, brick5); //root->left->right->left
			assert.equal(tree.root.left.left.right.data.size, 2);
			assert.equal(tree.root.left.right.data, brick3); //root->left->right
			assert.equal(tree.root.left.right.data.size, 4);
		});
	});
});
