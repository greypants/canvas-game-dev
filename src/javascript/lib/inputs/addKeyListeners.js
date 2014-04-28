module.exports = function(inputsByCode){

	window.addEventListener('keydown', function(e) {
		var input = inputsByCode[e.keyCode];

		if(input) {
			if(input.isPressed) {
				input.initialPress = false;
			} else {
				input.initialPress = true;
				input.isPressed = true;
			}
		}
	});

	window.addEventListener('keyup', function(e) {
		var input = inputsByCode[e.keyCode];

		if(input) {
			input.isPressed = false;
			input.initialPress = false;
		}
	});
};
