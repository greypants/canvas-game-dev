var drawImage = require('../lib/drawImage');
var Bitmap = require('../lib/bitmap');
var ctx = require('../lib/context');
var canvas = require('../lib/canvas');
var last = require('../lib/last');
var baddie = new Bitmap('/build/images/enemy.png');

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
	baddie.x = ((Math.sin(Date.now() * speed.x) * range.x) + range.x) + 0.5 | 0;
	baddie.y = ((Math.sin(Date.now() * speed.y) * range.y) + range.y) + 0.5 | 0;
	// last.update(baddie);
	ctx.drawImage(baddie.img, baddie.x, baddie.y);
};
