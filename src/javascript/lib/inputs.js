var inputMap = {
	32: { name: 'spacebar' },
	37: { name: 'left' },
	39: { name: 'right' }
};

var inputs = {};

for (var key in inputMap) {
	var input = inputMap[key];
	inputs[input.name] = input;
}

var pressKey = function(e) {
	console.log(inputs)
	var input = inputMap[e.keyCode];
	if(input && !input.isPressed) {
		input.isPressed = true;
	}
};

var releaseKey = function(e) {
	var input = inputMap[e.keyCode];
	if(input) {
		input.isPressed = false;
	}
};

addEventListener('keydown', pressKey);
addEventListener('keyup', releaseKey);

module.exports = inputs;