var createInputs = require('./createInputs');
var addListeners = require('./addKeyListeners');

module.exports = function(keyMap) {

	var inputs = createInputs(keyMap);
	window.addListeners(inputs.byCode);
	return inputs.byName;

};