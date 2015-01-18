function Level(w,h){
  this.width = w;
  this.height = h;
  this.tiles = [];
  this.createLevel();
}


Level.prototype.createLevel = function(){
  for(var x=0;x<this.width;x++){
    for(var y=0;y<this.height;y++){
      this.setTile(x,y,tile[Math.floor(Math.random()*3)]);
    }
  }
};

Level.prototype.draw = function(){
  for(var x=0;x<this.width;x++){
    for(var y=0;y<this.height;y++){
      this.getTile(x,y).draw(x<<5,y<<5);
    }
  }
};

Level.prototype.tick = function(){

};

Level.prototype.getTile = function(x,y){
  if(x<0||x>=this.width||y<0||y>=this.height)
  return blank;
  return tile[this.tiles[x+(this.width*y)]];
};

Level.prototype.setTile = function(x,y,tile){
  if(x<0||x>=this.width||y<0||y>=this.height)
    return;
  this.tiles[x+(this.width*y)] = tile.id;
};
