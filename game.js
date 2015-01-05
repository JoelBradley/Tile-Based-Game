//canvas setup
var canvas = document.getElementById('gameCanvas');
var context = canvas.getContext('2d');
context.imageSmoothingEnabled = false;
context.mozImageSmoothingEnabled = false
context.webkitImageSmoothingEnabled = false;
//END







var tiles = [];
var levelWidth = 32;
var levelHeight = 32;
for(var x=0;x<levelWidth;x++){
  for(var y=0;y<levelHeight;y++){
    tiles[x+(levelWidth*y)] = Math.floor(Math.random()*3)+1;
  }
}
tiles[10+(levelWidth*10)]=1;
//tiles = level1;
var player = new Player(32,32);

function tick(){
  player.tick();
}

function render(){
  context.fillStyle = 'black';
  context.fillRect(0, 0, canvas.width, canvas.height);
  var xoff = player.x - (canvas.width/2)
  var yoff = player.y - (canvas.height/2)
  if(xoff < 0){
    xoff = 0;
  }
  if(xoff > ((levelWidth << 5) - canvas.width)){
    xoff = ((levelWidth << 5) - canvas.width);
  }
  if(yoff < 0){
    yoff = 0;
  }
  if(yoff > ((levelHeight << 5) - canvas.height)){
    yoff = ((levelHeight << 5) - canvas.height);
  }
  for(var x=0;x<levelWidth;x++){
    for(var y=0;y<levelHeight;y++){
      getTile(x,y).draw((x<<5)-xoff,(y<<5)-yoff);
    }
  }
  player.draw(xoff,yoff);
}
function getTile(x,y){
  if(0>x||x>=levelWidth||0>y||y>=levelHeight)return tile[0];
  return tile[tiles[x+(levelWidth*y)]];
}
function timestamp() {
  return window.performance && window.performance.now ? window.performance.now():new Date().getTime();
}
var now,
dt = 0,
last = timestamp(),
step = 1 / 60;
var frames = 0;
var ticks = 0;
function frame() {
  now = timestamp();
  dt = dt + Math.min(1, (now - last) / 1000);
  while (dt > step) {
    dt = dt - step;
    tick();
    ticks++;
    if (ticks % 60 == 0) {
      //console.log("FPS: "+frames);
      frames = 0;
    }
  }
  render();
  frames++;
  last = now;
  requestAnimationFrame(frame);
}

requestAnimationFrame(frame);
