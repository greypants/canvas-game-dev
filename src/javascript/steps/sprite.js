var ctx = require('../lib/context');
var Bitmap = require('../lib/bitmap');

var runner = {
	spritesheet: new Bitmap('build/images/player-sprites.png').img,
	x: 0,
	y: 0,
	width: 140,
	height: 240,
	spriteLocation: { x: 0, y: 0 },
	states: {
		standing: [0],
		running: [1,2,3,4,5,6]
	},
	frameIndex: 0
};

var draw = function() {
	ctx.drawImage(
		runner.spritesheet,         // source image (spritesheet)
		runner.spriteLocation.x,    // source x (x location within a spritesheet)
		runner.spriteLocation.y,    // source y (y location within a spritesheet)
		runner.width,               // source width
		runner.height,              // source height
		runner.x,                   // destination x
		runner.y,                   // destination y
		runner.width,               // destination width (same source width)
		runner.height               // destination height (same source height)
	);
};

var animate = function(state) {
	if (runner.stateIndex < state.length - 1) {
		runner.stateIndex ++;
	} else {
		runner.stateIndex = 0;
	}

	runner.spriteLocation.x = state[runner.stateIndex] * runner.width;
};

var now = Date.now() / 1000;
var then = now;
var timer = 0;
var delta = 0;
var fps = 8;

var loop = function() {
	now = Date.now() / 1000;
	delta = now - then;
	timer += delta;
	then = now;
	if (timer > 1 / fps) {
		timer = 0;
		ctx.clearRect(runner.x, runner.y, runner.width, runner.height);
		animate(runner.states.running);
		draw();
	}
	requestAnimationFrame(loop);
};

loop();