var Bitmap  = require('bitmap');
var canvas  = require('canvas');
var ctx     = require('context');
var Example = require('example');
var Inputs  = require('inputs');

var keyMap = {
	32: 'spacebar',
	37: 'left',
	39: 'right',
	38: 'up',
	40: 'down'
};

var inputs = new Inputs(keyMap).byName;

var ship = new Bitmap('/build/images/ship.png');

ship.x = (canvas.width / 2) - 80;
ship.y = canvas.height - 170;
ship.speed = 10;

ship.update = function() {
	if(inputs.left.isPressed) {
		ship.x -= ship.speed;
	}

	if(inputs.right.isPressed){
		ship.x += ship.speed;
	}

	if(inputs.up.isPressed) {
		ship.y -= ship.speed;
	}

	if(inputs.down.isPressed){
		ship.y += ship.speed;
	}
};

module.exports = new Example(function() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ship.update();
	ctx.drawImage(ship.img, ship.x, ship.y);
}, true);