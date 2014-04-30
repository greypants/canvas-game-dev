var frames = require('frames');

var Example = function(action, loops) {
	this.action = action;
	this.loops = loops;
};

Example.prototype = {
	run: function() {
		if(this.loops) {
			frames.action = this.action;
			frames.play();
		} else {
			this.action();
		}
	},

	pause: function() {
		frames.pause();
	}
};

module.exports = Example;