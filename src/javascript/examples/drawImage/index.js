var Example = require('example');
var ctx = require('context');
var canvas = require('canvas');

module.exports = new Example(function(){

	var image = new Image();

	image.onload = function(e){
		var x = (canvas.width - image.width) / 2;
		var y = (canvas.height - image.height) / 2;
		ctx.drawImage(image, x, y);
	};

	image.setAttribute('src', 'images/ship.png');
});
