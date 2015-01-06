var canvas = document.getElementById("gameCanvas");
var context = canvas.getContext("2d");


var width = 0;

function tick(){
  console.log("ticking!");
  width++;
  console.log(width/60);
}

function render(){
  context.fillStyle = 'black';
  context.fillRect(0,0,canvas.width,canvas.height);
  context.fillStyle = "#FF3240";
  context.fillRect(100,123,width,512);
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
