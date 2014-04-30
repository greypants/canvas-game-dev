var ctx     = require('context');
var Example = require('example');

var radius = 50;
var x = radius;
var y = radius;
var startAngle = 0;
var endAngle = 2 * Math.PI;

module.exports = new Example(function() {

	ctx.beginPath();
	ctx.arc(x, y, radius, startAngle, endAngle);
	ctx.fill();
	ctx.closePath();

});
