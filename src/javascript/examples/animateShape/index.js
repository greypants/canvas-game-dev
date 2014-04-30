var Example = require('example');
var ctx = require('context');
var canvas = require('canvas');

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

var rotation = 0;

module.exports = new Example(function(){
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	rotation = rotation >= 2 * Math.PI ? 0 : rotation + 0.005;

	ctx.save();
	ctx.translate(200, 150);
	ctx.rotate(rotation);
	ctx.translate(-200,-150);

	ctx.beginPath();
	points.forEach(function(point, index){
		x = point.x + (40 * Math.sin(Date.now() / (200 + point.y)));
		y = point.y + (40 * Math.cos(Date.now() / (200 + point.x)));
		ctx.lineTo(x, y);
	});
	ctx.stroke();
	ctx.closePath();
	ctx.restore();

}, true);
