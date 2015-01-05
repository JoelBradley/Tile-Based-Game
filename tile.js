function Tile(id,image) {
  this.image = image;
  this.isSolid = false;
  tile[id] = this;
}

Tile.prototype.tick = function () {
};
Tile.prototype.setSolid = function (solid) {
  this.isSolid = solid;
};
Tile.prototype.draw = function (x,y) {
  context.drawImage(this.image, x, y,32,32);
};
var tile = [];
var EMPTY = new Tile(0,stoneImg).setSolid(true);
var grass = new Tile(1,grassImg);
var water = new Tile(2,waterImg);
var stone = new Tile(3,stoneImg).setSolid(true);
var sand = new Tile(4,sandImg);
var redlight = new Tile(5,redlightImg);
var greenlight = new Tile(6,greenlightImg);
var start1 = new Tile(7,startImg);
var start2 = new Tile(8,startImg);
