var canvas = require('./lib/canvas');
var ctx = require('./lib/context');

var drawCircle = require('./lib/drawCircle');
var drawImage = require('./lib/drawImage');
var animateWithTime = require('./steps/animate');
var animateWithInput = require('./steps/input');

// var collisions = require('./examples/collisions');
// var audio = require('./examples/audio');

// drawCircle(80);
// drawImage('/build/images/ship.png');
var last = require('./lib/last');

var loop = function() {
	last.clear();

	animateWithTime();
	animateWithInput();

	requestAnimationFrame(loop);
};

loop();