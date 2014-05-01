var ctx     = require('context');
var canvas  = require('canvas');
var Example = require('example');

var radius = 50;
var x = (canvas.width - radius ) / 2 ;
var y = (canvas.height - radius ) / 2 ;
var startAngle = 0;
var endAngle = 2 * Math.PI;

module.exports = new Example(function() {

	ctx.beginPath();
	ctx.arc(x, y, radius, startAngle, endAngle);
	ctx.fill();
	ctx.closePath();

});
