// var canvas = require('./lib/canvas');
// var ctx = require('./lib/context');
// var drawCircle = require('./lib/drawCircle');
// require('./playground');
// require('./steps/sprite.js');
var frames = require('frames');
frames.init();

var examples = require('./examples');

// examples.drawImage.run();
// examples.drawShape.run();
// examples.animateShape.run();
examples.sprites.run();
