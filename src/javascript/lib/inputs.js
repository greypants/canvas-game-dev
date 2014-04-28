// Define Inputs
var inputMap = {
	32: 'spacebar',
	37: 'left',
	39: 'right',
	38: 'up',
	40: 'down'
};

var inputsByName = {};
var inputsByCode = {};

for (var code in inputMap) {
	var inputName = inputMap[code];

	var stateObject = {
		name: inputName,
		code: code,
		initialPress: false,
		isPressed: false
	};

	inputsByName[inputName] = stateObject;
	inputsByCode[code] = stateObject;
}


var pressInput = function(e) {
	var input = inputsByCode[e.keyCode];

	if(input) {
		if(input.isPressed) {
			input.initialPress = false;
		} else {
			input.initialPress = true;
			input.isPressed = true;
		}
	}
};

// On keyup, if the key is listed, mark it as unpressed
var releaseInput = function(e) {
	var input = inputsByCode[e.keyCode];

	if(input) {
		input.isPressed = false;
		input.initialPress = false;
	}
};

addEventListener('keydown', pressInput);
addEventListener('keyup', releaseInput);

module.exports = inputsByName;