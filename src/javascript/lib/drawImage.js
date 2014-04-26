var ctx = require('../lib/context');

module.exports = function(src) {
	var image = new Image();

	image.onload = function(e){
		ctx.drawImage(e.srcElement, 0, 0);
	};

	image.setAttribute('src', src);

	return image;
};
