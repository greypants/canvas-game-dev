var ctx = require('../lib/context');

module.exports = function() {
	var time = Date.now();
	var sin = (Math.sin(time *100) * 100);
	var cos = (Math.cos(time *100) * 100);
	ctx.scale(sin, cos);
};