var ctx = require('./context');

module.exports = function() {
	ctx.beginPath();
	ctx.fillStyle = "rgba(0, 100, 255, 0.15)";
	ctx.arc(100, 75, 50, 0, 2 * Math.PI);
	ctx.fill();
	ctx.closePath();

	ctx.beginPath();
	ctx.fillStyle = "transparent";
	ctx.strokeStyle = "rgba(255, 255, 255, 0.25)";
	ctx.lineWidth = 3;
	ctx.arc(100, 75, 50, 0, 2 * Math.PI);
	ctx.stroke();
	ctx.fill();
	ctx.closePath();
};
