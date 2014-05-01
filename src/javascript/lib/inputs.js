var frames = require('frames');

var Inputs = function(keyMap) {
	this.createInputs(keyMap);
	this.addKeyListeners();
};

Inputs.prototype = {
	addKeyListeners: function() {
		addEventListener('keydown', this.press.bind(this));
		addEventListener('keyup', this.release.bind(this));
	},

	removeInitial: function(input) {
		input.initialPress = false;
	},

	press: function(e) {
		var input = this.byCode[e.keyCode];

		if(input) {
			e.preventDefault();
			if(!input.isPressed) {
				input.initialPress = true;
				input.isPressed = true;
				requestAnimationFrame(this.removeInitial.bind(this, input));
			}
		}
	},

	release: function(e) {
		var input = this.byCode[e.keyCode];

		if(input) {
			input.isPressed = false;
		}
	},

	createInputs: function(keyMap) {
		this.byName = {};
		this.byCode = {};

		for (var code in keyMap) {
			var name = keyMap[code];

			var data = {
				name: name,
				code: code,
				initialPress: false,
				isPressed: false
			};

			this.byName[name] = data;
			this.byCode[code] = data;
		}
	}
};

module.exports = Inputs;
