var canvas = document.getElementById("gameCanvas");
var context = canvas.getContext("2d");


var width = 0;
var tiles = [];
var levelHeight = 32;
var levelWidth = 32;

for(var x=0;x<levelWidth;x++){
  for(var y=0;y<levelHeight;y++){
    tiles[x+(levelWidth*y)] = Math.floor(Math.random()*3);
  }
}


function tick(){
  console.log("ticking!");
  width++;
}

function render(){
  context.fillStyle = 'black';
  context.fillRect(0,0,canvas.width,canvas.height);
  for(var x=0;x<levelWidth;x++){
    for(var y=0;y<levelHeight;y++){
      tile[tiles[x+(levelWidth*y)]].draw(x<<5,y<<5);
    }
  }
}

function getTimeMillis(){
  return window.performace && window.performace.now ? window.performace.now() : new Date().getTime();
}

var now,
dt = 0,
last = getTimeMillis(),
step = 1/60;
function frame(){
  now = getTimeMillis();
  dt = dt + Math.min(1,(now-last)/1000);
  while(dt > step){
    dt-=step;
    tick();
  }

  render();
  last  = now;
  requestAnimationFrame(frame);
}



requestAnimationFrame(frame);
