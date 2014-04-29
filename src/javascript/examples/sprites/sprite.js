var Bitmap = require('bitmap');

var Sprite = function(properties) {
	this.extend(properties);
	this.img = new Bitmap(this.src).img;
	this.setStateTo(this.initialState);
};

Sprite.prototype = {
	animate: function() {
		if (this.stateIndex < this.state.length - 1) {
			this.stateIndex ++;
		} else {
			this.stateIndex = 0;
		}

		this.spriteLocation.x = this.state[this.stateIndex] * this.width;
	},

	extend: function(properties) {
		for(var key in properties) {
			this[key] = properties[key];
		}
	},

	setStateTo: function(name) {
		this.state = this.states[name];
	}
};

module.exports = Sprite;
