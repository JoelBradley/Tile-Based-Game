function Player(x,y){
  this.x = x;
  this.y = y;
  this.path = null;
  this.ticks =0;
}
var dx=0,dy=0;
Player.prototype.tick = function () {
  this.ticks++;

  if(up)dy=-2;
  if(down)dy=2;
  if(left)dx=-2;
  if(right)dx=2;
  // var tried = [];
  // if(this.ticks%60===0||[this.x>>5,this.y>>5]===[31,31]){
  //   while(true){
  //     var currentCost = getDistance([this.x>>5,this.y>>5],[31,31]);
  //     dx = Math.floor(Math.random()*3)-1;
  //     dy = Math.floor(Math.random()*3)-1;
  //     if(tried.contains([dx,dy]))continue;
  //     var t = getTile(this.x>>5+dx,this.y>>5+dy);
  //     if(t === null || t === EMPTY||t.isSolid)continue;
  //     var tp = [(this.x>>5)+dx,(this.y>>5)+dy];
  //     var cost = getDistance(tp,[31,31]);
  //     if(cost<currentCost||tried.length>=9)break;
  //     console.log("Not: "+tp);
  //     tried.push(tp);
  //
  //   }
  // }
  if(this.path==null){
    this.path = findPath([this.x>>5,this.y>>5],[10,1]);
  }else{
    if(this.ticks%20===0){
      this.path = findPath([this.x>>5,this.y>>5],[10,1]);
    }
    if(this.path!=null&&this.path!=undefined){
      if(this.path.pos[0]>this.x>>5)dx=1;
      if(this.path.pos[0]<this.x>>5)dx=-1;
      if(this.path.pos[1]>this.y>>5)dy=1;
      if(this.path.pos[1]<this.y>>5)dy=-1;
    }else{
      console.log("No path :(");
    }
  }

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
