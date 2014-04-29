// var canvas = require('./lib/canvas');
// var ctx = require('./lib/context');
// var drawCircle = require('./lib/drawCircle');
// require('./playground');
// require('./steps/sprite.js');
var frames = require('frames');
frames.init();

var examples = require('./examples');

examples.sprites.run();
// var animateShape = require('./examples/animateShape2')

// drawCircle(100);
// var loop = function() {
//	// last.clear();
//	ctx.clearRect(0, 0, canvas.width, canvas.height)
//	animateShape();
//	requestAnimationFrame(loop);
// };

// loop();