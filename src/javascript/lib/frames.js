var canvas = require('canvas');
var ctx    = require('context');

module.exports = {
	init: function() {
		this.delta = 0;
	},

	action: function(){}, // overwrite with action to run each frame

	clearCanvas: function() {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
	},

	loop: function() {
		this.clearCanvas()
		this.setDelta();
		this.action();
		this.animationFrame = window.requestAnimationFrame(this.loop.bind(this));
	},

	pause: function() {
		window.cancelAnimationFrame(this.animationFrame);
		this.isPlaying = false;
	},

	stop: function() {
		this.pause();
		this.clearCanvas();
		this.isStopped = true;
	},

	start: function() {
		this.isStopped = false;
		this.resume();
	},

	resume: function() {
		if(!this.isPlaying && !this.stopped) {
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
