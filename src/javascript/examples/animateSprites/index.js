var ctx        = require('context');
var drawSprite = require('./drawSprite');
var Example    = require('example');
var frames     = require('frames');
var Sprite     = require('./sprite');

var runner = new Sprite({
	src: 'build/images/player-sprites.png',
	fps: 8,
	frameIndex: 0,
	x: 0,
	y: 0,
	width: 140,
	height: 240,
	spriteLocation: { x: 0, y: 0 },
	initialState: 'running',
	states: {
		standing: [0],
		running: [1,2,3,4,5,6]
	}
});

var timer = 0;
var frameActions = function() {
	timer += frames.delta;
	if (timer > 1 / runner.fps) {
		timer = 0;
		ctx.clearRect(runner.x, runner.y, runner.width, runner.height);
		runner.animate();
		drawSprite(runner);
	}
};

module.exports = new Example(frameActions, true);
