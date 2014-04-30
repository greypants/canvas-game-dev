var Example = require('example');
var ctx = require('context');

module.exports = new Example(function(){

	var image = new Image();

	image.onload = function(e){
		ctx.drawImage(e.srcElement, 50, 50);
	};

	image.setAttribute('src', 'build/images/ship.png');

});
