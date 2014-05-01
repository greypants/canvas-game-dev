var Example = require('example');
var ctx = require('context');

module.exports = new Example(function(){
	var text = "MEME ALL THE THINGS!";
	var x = 10;
	var y = 250;
	var fontFamily = 'Impact';
	var fontSize = '60px';
	ctx.lineJoin = 'round';
	ctx.fillStyle = "#fff";
	ctx.lineWidth = 8;
	ctx.font = [fontSize, fontFamily].join(' ');
	ctx.strokeText(text, x, y);
	ctx.fillText(text, x, y);
});