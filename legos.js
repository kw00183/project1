module.exports.Brick = Brick;
module.exports.LegoPile = LegoPile;

function Brick(size, color) {
  this.size = size;
  this.color = color;
}

function LegoPile() {
  this.dictionary = new Array();
  this.insert = insert;
}

function insert(Brick) {
  var bst = dictionary[Brick.color];
  bst.insert(Brick);
}
