var canvas = require('canvas');
var ctx = require('context');
var inputs = require('./inputs');
var white = 'rgba(255, 255, 255, 0.65)';
var red = 'rgba(255, 0, 0, 0.65)';

module.exports = {
	x: (canvas.width / 2) - 50,
	y: canvas.height - 125,
	height: 100,
	width: 100,
	speed: 10,
	color: white,

	makeRed: function() {
		this.color = red;
	},

	makeWhite: function() {
		this.color = white;
	},

	draw: function() {
		ctx.beginPath();
		ctx.fillStyle = this.color;
		ctx.rect(this.x, this.y, this.width, this.height);
		ctx.fill();
		ctx.closePath();
	},

	update: function() {
		if(inputs.left.isPressed) {
			this.x -= this.speed;
		}

		if(inputs.right.isPressed){
			this.x += this.speed;
		}

		if(inputs.up.isPressed) {
			this.y -= this.speed;
		}

		if(inputs.down.isPressed){
			this.y += this.speed;
		}
	}
};