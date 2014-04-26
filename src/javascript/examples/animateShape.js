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

module.exports = function() {
      var sin = Math.sin(Date.now()/500) * 10;
      var cos = Math.cos(Date.now()/500) * 10;

      ctx.save();
      ctx.translate(100+ sin, 100 - cos);
      ctx.rotate(sin/10);
      ctx.translate(sin - 50, cos -50);
      ctx.beginPath();
      ctx.moveTo(0.0, 50.0);
      points.forEach(function(point, index){
            // Modify every other value
            var modPoint = point;
            if(index % 2) {
                  modPoint = modifyPoints(point, sin, cos);
            }
            ctx.bezierCurveTo.apply(ctx, modPoint);
      });
      ctx.closePath();
      ctx.fill();
      ctx.restore();
};