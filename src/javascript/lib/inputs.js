var Inputs = function(keyMap) {
	this.createInputs(keyMap);
	this.addKeyListeners();
};

Inputs.prototype = {
	addKeyListeners: function() {
		addEventListener('keydown', this.press.bind(this));
		addEventListener('keyup', this.release.bind(this));
	},

	press: function(e) {
		var input = this.byCode[e.keyCode];

		if(input) {
			if(input.isPressed) {
				input.initialPress = false;
			} else {
				input.initialPress = true;
				input.isPressed = true;
			}
		}
	},

	release: function(e) {
		var input = this.byCode[e.keyCode];

		if(input) {
			input.isPressed = false;
			input.initialPress = false;
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
