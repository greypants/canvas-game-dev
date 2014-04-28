var ctx = require('../lib/context');

var points = [
      [ 0.0, 63.8,
        5.6, 76.3,
        14.6, 85.4
      ],
      [23.7, 94.4, 36.2, 100.0, 50.0, 100.0],
      [63.8, 100.0, 76.3, 94.4, 85.4, 85.4],
      [94.4, 76.3, 100.0, 63.8, 100.0, 50.0],
      [100.0, 36.2, 94.4, 23.7, 85.4, 14.6],
      [76.3, 5.6, 63.8, 0.0, 50.0, 0.0],
      [36.2, 0.0, 23.7, 5.6, 14.6, 14.6],
      [5.6, 23.7, 0.0, 36.2, 0.0, 50.0]
];

var modifyPoints = function(points, sin, cos) {
      var cp1x = points[0];
      var cp1y = points[1];

      var cp2x = points[2];
      var cp2y = points[3];

      var x = points[4];
      var y = points[5];

      cp1y += sin;
      cp2y += sin;
      y += sin;

      return [cp1x, cp1y, cp2x, cp2y, x, y];
};

var quarterArc = Math.PI / 2;
var radius = 50;

module.exports = function() {
      var sin = Math.sin(Date.now()/500) * 10;
      var cos = Math.cos(Date.now()/500) * 10;

      ctx.save();
      ctx.beginPath();
      ctx.moveTo(50,50);          // Create a horizontal line
      ctx.arcTo(100,100,100,200,100); // Create an arc
      ctx.closePath();
      ctx.fill();
      ctx.restore();
};