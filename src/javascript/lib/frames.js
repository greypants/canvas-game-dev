var canvas = require('canvas');
var ctx    = require('context');

module.exports = {
	init: function() {
		this.delta = 0;
		window.addEventListener('blur', this.pause.bind(this), false);
		window.addEventListener('focus', this.play.bind(this), false);
	},

	action: function(){}, // overwrite with action to run each frame

	loop: function() {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		this.setDelta();
		this.action();
		this.animationFrame = window.requestAnimationFrame(this.loop.bind(this));
	},

	pause: function() {
		window.cancelAnimationFrame(this.animationFrame);
		this.isPlaying = false;
	},

	play: function() {
		if(!this.isPlaying) {
			this.then = Date.now();
			this.loop();
			this.isPlaying = true;
		}
	},

	setDelta: function() {
		this.now = Date.now();
		this.delta = (this.now - this.then) / 1000; // seconds since last frame
		this.then = this.now;
	}
};
