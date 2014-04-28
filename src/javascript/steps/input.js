var drawImage = require('../lib/drawImage');
var ctx = require('../lib/context');
var canvas = require('../lib/canvas');
var keyMap = require('../config/keyMap');
var inputs = require('../lib/inputs')(keyMap);
var last = require('../lib/last');
var Bitmap = require('../lib/Bitmap');
var ship = new Bitmap('/build/images/ship.png');

ship.x = (canvas.width / 2) - 80;
ship.y = canvas.height - 170;
ship.speed = 10;

module.exports = function() {

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

	// last.update(ship);
	ctx.drawImage(ship.img, ship.x, ship.y);
};