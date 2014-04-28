// Define Inputs
var inputMap = {
	32: { name: 'spacebar' },
	37: { name: 'left' },
	39: { name: 'right' },
	38: { name: 'up' },
	40: { name: 'down' }
};

// Create reverse lookup map
var inputs = {};
for (var key in inputMap) {
	var input = inputMap[key];
	inputs[input.name] = input;
}

// On keydown, if the key is listed, mark it as pressed
var pressInput = function(e) {
	var input = inputMap[e.keyCode];
	if(input) {
		if(input.isPressed) {
			// console.log('repeat press ' + input.name )
			input.initialPress = false;
		} else {
			// console.log('initial press ' + input.name )
			input.initialPress = true;
			input.isPressed = true;
		}
	}
};

// On keyup, if the key is listed, mark it as unpressed
var releaseInput = function(e) {
	var input = inputMap[e.keyCode];
	if(input) {
		// console.log('unpress ' + input.name )
		input.isPressed = false;
		input.initialPress = false;
	}
};

addEventListener('keydown', pressInput);
addEventListener('keyup', releaseInput);

module.exports = inputs;