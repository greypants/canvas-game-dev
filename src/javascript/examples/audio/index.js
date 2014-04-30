var Example = require('example');
var canvas = require('canvas');
var ship = new Bitmap('images/ship.png');
var Inputs = require('inputs');
var ctx = require('context');

ship.x = (canvas.width / 2) - 80;
ship.y = canvas.height - 170;

var audio = document.createElement("audio");
audio.preload = 'auto';
audio.src = 'audio/laser.ogg';

var inputs = new Inputs({
	32: 'spacebar'
}).byName;

module.exports = new Example(function() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.drawImage(ship.img, ship.x, ship.y);
	if(inputs.spacebar.isPressed) {
		audio.play();
	}
}, true);