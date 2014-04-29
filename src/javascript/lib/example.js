var frames = require('frames');
var Example = function(action) {
	this.action = action;
};

Example.prototype = {
	run: function() {
		frames.action = this.action;
		frames.play();
	},

	pause: function() {
		frames.pause();
	}
};

module.exports = Example;