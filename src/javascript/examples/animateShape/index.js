var Example = require('example');
var ctx = require('context');
var canvas = require('canvas');

var time = 0;
var rotation = 0;
var points = [
	{ x: 100, y: 100 },
	{ x: 200, y: 50 },
	{ x: 300, y: 100 },
	{ x: 300, y: 200 },
	{ x: 200, y: 250 },
	{ x: 200, y: 250 },
	{ x: 100, y: 200 },
	{ x: 100, y: 100 }
];

module.exports = new Example(function(){
	ctx.save();
	ctx.translate(200, 150);
	rotation = rotation >= 2 * Math.PI ? 0 : rotation + 0.005;
	ctx.rotate(rotation);
	ctx.translate(-200,-150);

	ctx.beginPath();

	time = Date.now();
	points.forEach(function(point, index){
		x = point.x + (40 * Math.sin(time / (200 + point.y)));
		y = point.y + (40 * Math.cos(time / (200 + point.x)));
		ctx.lineTo(x, y);
	});
	ctx.fill();
	ctx.closePath();
	ctx.restore();

}, true);
