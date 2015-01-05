function Tile(id,colour) {
  this.colour = colour;
  tile[id] = this;
}

Tile.prototype.tick = function () {
};

Tile.prototype.draw = function (x,y) {
  context.fillStyle = this.colour;
  context.fillRect(x,y,32,32);
};
var tile = [];
var grass = new Tile(0,"#00FF00");
var water = new Tile(1,"#0000FF");
var stone = new Tile(2,"#999999");
