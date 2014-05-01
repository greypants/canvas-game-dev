var canvas = require('canvas');
var ctx    = require('context');

var text = "PEW!";
var fontFamily = 'Impact';
var fontSize = '60px';
var textX = 0;
var textY = 0;

var getRandomInt = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

module.exports = function() {
	textX = getRandomInt(10, canvas.width - 150);
	textY = getRandomInt(10, canvas.height - 100 );
	ctx.lineJoin = 'round';
	ctx.fillStyle = "#fff";
	ctx.lineWidth = 8;
	ctx.font = [fontSize, fontFamily].join(' ');
	ctx.strokeText(text, textX, textY);
	ctx.fillText(text, textX, textY);
};