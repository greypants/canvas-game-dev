var ctx = require('../lib/context');

module.exports = function(radius) {
	var x = radius;
	var y = radius;
	var startAngle = 0;
	var endAngle = 2 * Math.PI;

	ctx.beginPath();
	ctx.arc(x, y, radius, startAngle, endAngle);
	ctx.fill();
	ctx.closePath();
};
