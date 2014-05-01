var canvas  = require('canvas');
var ctx     = require('context');
var Example = require('example');

var object1 = require('./object1');
var object2 = require('./object2');

var collision = function(a, b) {
	return a.x <= (b.x + b.width) &&
		b.x <= (a.x + a.width) &&
		a.y <= (b.y + b.height) &&
		b.y <= (a.y + a.height);
};

module.exports = new Example(function() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	object1.update();

	if(collision(object1, object2)) {
		object1.makeRed();
	} else {
		object1.makeWhite();
	}

	object1.draw();
	object2.draw();
}, true);