module.exports.Brick = Brick;
module.exports.LegoPile = LegoPile;

var bst = require('./bst');
const BST = bst.BST;

function Brick(size, color) {
  this.size = size;
  this.color = color;
}

function LegoPile() {
  this.dictionary = {};
  this.dictionary['red'] = new BST();
  this.dictionary['green'] = new BST();
  this.dictionary['blue'] = new BST();
  this.dictionary['yellow'] = new BST();
  this.dictionary['black'] = new BST();
  this.dictionary['white'] = new BST();
  this.insert = insert;
  this.showAll = showAll;
  this.hasBrick = hasBrick;
  this.count = count;
}

function count() {
  var totalBrickCount = 0;
  Object.keys(this.dictionary).forEach((key) => {
    var bst = this.dictionary[key];
    totalBrickCount += bst.count();
  });
  return totalBrickCount;
}

function insert(Brick) {
  if (Brick.color == 'red' 
	|| Brick.color == 'blue'
	|| Brick.color == 'green'
	|| Brick.color == 'yellow'
	|| Brick.color == 'black'
	|| Brick.color == 'white') {
  var bst = this.dictionary[Brick.color];
  bst.insert(Brick);
}
}

function hasBrick(size, color) {
  var current = this.dictionary[color].root;

  if (current == null) {
    return false;
  }

  while (current.data.size != size) {
    if (size < current.data.size) {
      current = current.left;
    } else if (size > current.data.size) {
      current = current.right;
    } else if (size == current.data.size) {
      return true;
    }
    if (current == null) {
      return false;
    }
  }
  return true;
}

function showAll() {
  //console.log(Object.keys(this.dictionary));
  Object.keys(this.dictionary).forEach((key) => {
    console.log(key + " -> " + this.dictionary[key]);
  });
}
