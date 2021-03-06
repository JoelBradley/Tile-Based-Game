//canvas setup
var canvas = document.getElementById('gameCanvas');
var context = canvas.getContext('2d');


var level = new Level(32,32);

function tick(){
  console.log("Ticking!");
  level.tick();
}

function render(){
  context.fillStyle = 'black';
  context.fillRect(0, 0, canvas.width, canvas.height);
  level.draw();
  
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
