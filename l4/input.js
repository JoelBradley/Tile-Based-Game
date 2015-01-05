var left = false,
right = false,
up = false,
down = false;
document.onkeydown = function (evt) {
  var event = evt || window.event;
  if (event.keyCode == 65) {
    left = true;
  } else if (event.keyCode == 68) {
    right = true;
  } else if (event.keyCode == 87) {
    up = true;
  } else if (event.keyCode == 83) {
    down = true;
  }
};

document.onkeyup = function (evt) {
  evt = evt || window.event;
  var event = evt || window.event;
  if (event.keyCode == 65) {
    left = false;
  } else if (event.keyCode == 68) {
    right = false;
  } else if (event.keyCode == 87) {
    up = false;
  } else if (event.keyCode == 83) {
    down = false;
  }
};
