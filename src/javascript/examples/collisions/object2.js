var canvas = require('canvas');
var ctx = require('context');
var inputs = require('./inputs');
var green = 'rgba(0, 255, 50, 0.5)'

module.exports = {
	x: (canvas.width / 2) - 25,
	y: (canvas.height / 2) - 25,
	height: 50,
	width: 50,
	speed: 10,
	color: green,

	draw: function() {
		ctx.beginPath();
		ctx.fillStyle = this.color;
		ctx.rect(this.x, this.y, this.width, this.height);
		ctx.fill();
		ctx.closePath();
	}
};