var ctx = require('context');

module.exports = function(sprite) {
	ctx.drawImage(
		sprite.img,                 // source image (spritesheet)
		sprite.spriteLocation.x,    // source x (x location within a spritesheet)
		sprite.spriteLocation.y,    // source y (y location within a spritesheet)
		sprite.width,               // source width
		sprite.height,              // source height
		sprite.x,                   // destination x
		sprite.y,                   // destination y
		sprite.width,               // destination width (same source width)
		sprite.height               // destination height (same source height)
	);
};