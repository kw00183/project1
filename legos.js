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
}

function insert(Brick) {
  var bst = this.dictionary[Brick.color];
  bst.insert(Brick);
}

function showAll() {
  //console.log(Object.keys(this.dictionary));
  Object.keys(this.dictionary).forEach((key) => {
    console.log(key + " -> " + this.dictionary[key]);
  });
}
