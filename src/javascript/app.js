var examples = require('./examples');
var buttons = document.getElementsByTagName('button');
var selected = false;
var exampleMap = {};

var getSelected = function() {
	var name = sessionStorage.getItem('selectedExample');
	return  exampleMap[name]? name : 'drawImage';
};

var selectExample = function(name) {
	selected && deselectCurrent();
	sessionStorage.setItem('selectedExample', name);

	selected = exampleMap[name];
	selected.button.classList.add('active');
	selected.example.run();
};

var deselectCurrent = function() {
	selected.button.classList.remove('active');
	selected.example.clear();
};


var addExample = function(button) {
	var exampleName = button.getAttribute('data-example');
	var example = examples[exampleName];

	if(example) {
		exampleMap[exampleName] = {
			button: button,
			example: example
		};
		button.addEventListener('click', selectExample.bind(this, exampleName));
	}
};

// Bind button clicks and create
Array.prototype.forEach.call(buttons, addExample);

// Select Example
selectExample(getSelected());