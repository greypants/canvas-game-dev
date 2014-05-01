var Example   = require('example');
var canvas    = require('canvas');
var ctx       = require('context');
var inputs    = require('./inputs');
var pewPewPew = require('./pewPewPew');
var ship      = require('./ship');

var audio = document.createElement("audio");
audio.preload = 'auto';
audio.src = 'audio/laser.ogg';

module.exports = new Example(function() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.drawImage(ship.img, ship.x, ship.y);

	if(inputs.spacebar.isPressed) {
		audio.play();
		pewPewPew();
	}

}, true);