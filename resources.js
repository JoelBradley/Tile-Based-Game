var itemsToLoad = 7.00;//add one to this whenever you add a new image to load
var itemsLoaded = 0.00;

var grassImg = new Image();
grassImg.onload = function () {
  itemsLoaded++;
};
grassImg.src ='tiles/grass.png';

var waterImg = new Image();
waterImg.onload = function () {
  itemsLoaded++;
};
waterImg.src ='tiles/water.png';

var stoneImg = new Image();
stoneImg.onload = function () {
  itemsLoaded++;
};
stoneImg.src ='tiles/wall.png';

var sandImg = new Image();
sandImg.onload = function () {
  itemsLoaded++;
};
sandImg.src ='tiles/sand.png';

var redlightImg = new Image();
redlightImg.onload = function () {
  itemsLoaded++;
};
redlightImg.src ='tiles/redlight.png';

var greenlightImg = new Image();
greenlightImg.onload = function () {
  itemsLoaded++;
};
greenlightImg.src ='tiles/greenlight.png';

var startImg = new Image();
startImg.onload = function () {
  itemsLoaded++;
};
startImg.src ='tiles/start.png';
