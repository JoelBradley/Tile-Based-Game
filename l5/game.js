//canvas setup
var canvas = document.getElementById('gameCanvas');
var context = canvas.getContext('2d');


var tiles = [];
var levelWidth = 32;
var levelHeight = 32;
for(var x=0;x<levelWidth;x++){
  for(var y=0;y<levelHeight;y++){
    tiles[x+(levelWidth*y)] = Math.floor(Math.random()*3);
  }
}

function tick(){
  console.log("Ticking!");
}

function render(){
  context.fillStyle = 'black';
  context.fillRect(0, 0, canvas.width, canvas.height);
  for(var x=0;x<levelWidth;x++){
    for(var y=0;y<levelHeight;y++){
      tile[tiles[x+(levelWidth*y)]].draw(x<<5,y<<5);
    }
  }
}
function timestamp() {
  return window.performance && window.performance.now ? window.performance.now() : new Date().getTime();
}

var now,
dt = 0,
last = timestamp(),
step = 1 / 60;
function frame() {
  now = timestamp();
  dt = dt + Math.min(1, (now - last) / 1000);
  while (dt > step) {
    dt = dt - step;
    tick();
  }
  render();
  last = now;
  requestAnimationFrame(frame);
}

requestAnimationFrame(frame);
