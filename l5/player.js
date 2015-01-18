function Player(x,y){
  this.x = x;
  this.y = y;
}
Player.prototype.tick = function () {
  var dx=0,dy=0;
  if(up)dy=-2;
  if(down)dy=2;
  if(left)dx=-2;
  if(right)dx=2;
  this.move(dx,dy);
};
Player.prototype.move = function (dx,dy) {
  if(dx!=0&&dy!=0){
    this.move(dx,0);
    this.move(0,dy);
    return;
  }
  var nx = this.x+dx;
  var ny = this.y+dy;

  var xMax = 31,
  xMin = 0,
  yMax = 31,
  yMin = 0;

  if(!getTile(this.x>>5,this.y>>5).isSolid){
    if(getTile(nx+xMin>>5,ny+yMin>>5).isSolid)return;
    if(getTile(nx+xMax>>5,ny+yMin>>5).isSolid)return;
    if(getTile(nx+xMax>>5,ny+yMax>>5).isSolid)return;
    if(getTile(nx+xMin>>5,ny+yMax>>5).isSolid)return;
  }
  this.x=nx;
  this.y=ny;
};
Player.prototype.draw = function(xoff,yoff){
  context.fillStyle = "#FF0000"
  context.fillRect(this.x-xoff,this.y-yoff,32,32);
};
