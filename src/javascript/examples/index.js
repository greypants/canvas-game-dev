var frames = require('frames');
frames.init();

module.exports = {
	drawImage: require('./drawImage'),
	drawShape: require('./drawShape'),
	animateShape: require('./animateShape'),
	animateWithTime: require('./animateWithTime'),
	animateWithInput: require('./animateWithInput'),
	animateSprites: require('./animateSprites'),
	collisions: require('./collisions'),
	text: require('./text'),
	audio: require('./audio')
};