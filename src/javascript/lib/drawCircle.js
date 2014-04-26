var ctx = require('../lib/context');

module.exports = function(radius) {
	ctx.save();
	ctx.beginPath();
	ctx.translate(radius, radius);
	ctx.fillStyle = "rgba(0, 100, 255, 0.15)";
	ctx.arc(0, 0, radius, 0, 2 * Math.PI);
	ctx.fill();
	ctx.closePath();
	ctx.restore();
};
