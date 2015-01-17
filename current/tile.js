function Tile(id,colour){
  this.colour = colour;
  this.id = id;
  tile[id] = this;
}

Tile.prototype.draw = function(x,y){
  context.fillStyle = this.colour;
  context.fillRect(x,y,32,32);
};

Tile.prototype.tick = function(){

};


var tile = [];
var blank = new Tile(0,"#FF0000");
var grass = new Tile(1,"#00FF00");
var water = new Tile(2,"#0000FF");
