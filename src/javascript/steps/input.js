var drawImage = require('../lib/drawImage');
var ctx = require('../lib/context');
var canvas = require('../lib/canvas');
var inputs = require('../lib/inputs');
var last = require('../lib/last');
var ship = drawImage('/build/images/ship.png');

var x = (canvas.width / 2) - 80;
var y = canvas.height - 170;
var speed = 10;

module.exports = function() {

	if(inputs.left.isPressed) {
		x -= speed;
	}

	if(inputs.right.isPressed){
		x += speed;
	}

	var obj = {x: x, y: y, width: ship.width, height: ship.height}
	last.update(obj);
	ctx.drawImage(ship, x, y);
};