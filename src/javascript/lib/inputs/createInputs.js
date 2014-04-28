// Create inputs accessible by name or code

module.exports = function(keyMap) {
	var inputsByName = {};
	var inputsByCode = {};

	for (var code in keyMap) {
		var name = keyMap[code];

		var data = {
			name: name,
			code: code,
			initialPress: false,
			isPressed: false
		};

		inputsByName[name] = data;
		inputsByCode[code] = data;
	}

	return {
		byName: inputsByName,
		byCode: inputsByCode
	};
};