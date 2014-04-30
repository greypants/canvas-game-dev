var Example = require('example');
var Bitmap = require('bitmap');
var ctx = require('context');
var canvas = require('canvas');
var baddie = new Bitmap('images/enemy.png');

var speed = {
	x: 0.001,
	y: 0.002
};

var range = {
	x: (canvas.width - 100) / 2,
	y: 30
};

module.exports = new Example(function(){
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	baddie.x = ((Math.sin(Date.now() * speed.x) * range.x) + range.x) + 0.5 | 0;
	baddie.y = ((Math.sin(Date.now() * speed.y) * range.y) + range.y) + 0.5 | 0;
	ctx.drawImage(baddie.img, baddie.x, baddie.y);
}, true);
