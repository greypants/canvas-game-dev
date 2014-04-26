var drawImage = require('../lib/drawImage');
var ctx = require('../lib/context');
var canvas = require('../lib/canvas');
var last = require('../lib/last');
var baddie = drawImage('/build/images/enemy.png');

var speed = {
	x: 0.001,
	y: 0.002
};

var range = {
	x: (canvas.width - 100) / 2,
	y: 30
};

module.exports = function() {
	// Update values based on time
	var x = ((Math.sin(Date.now() * speed.x) * range.x) + range.x) + 0.5 | 0;
	var y = ((Math.sin(Date.now() * speed.y) * range.y) + range.y) + 0.5 | 0;
	last.update({x: x, y: y, width: baddie.width, height: baddie.height});
	ctx.drawImage(baddie, x, y);
};
