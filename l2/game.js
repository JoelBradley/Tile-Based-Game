//canvas setup
var canvas = document.getElementById('gameCanvas');
var context = canvas.getContext('2d');



function tick(){
  console.log("Ticking!");
}

function render(){
  context.fillStyle = 'black';
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = "#FF0000"
  context.fillRect(10,240,now/10,56);
}
function getTimeMillis() {
  return window.performance && window.performance.now ? window.performance.now() : new Date().getTime();
}

var now,
dt = 0,
last = getTimeMillis(),
step = 1 / 60;
function frame() {
  now = getTimeMillis();
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
