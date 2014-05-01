var canvas = require('canvas');

var ship = new Bitmap('images/ship.png');
ship.x = (canvas.width / 2) - 80;
ship.y = canvas.height - 170;

module.exports = ship;