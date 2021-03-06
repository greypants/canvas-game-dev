var ctx        = require('context');
var drawSprite = require('./drawSprite');
var Example    = require('example');
var frames     = require('frames');
var Sprite     = require('./sprite');

var runner = new Sprite({
	src: 'images/player-sprites.png',
	fps: 12,
	frameIndex: 0,
	x: 150,
	y: 120,
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

module.exports = new Example( function() {
	timer += frames.delta;
	if (timer > 1 / runner.fps) {
		timer = 0;
		runner.animate();
	}
	drawSprite(runner);
}, true);
