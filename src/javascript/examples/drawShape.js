var ctx = require('../lib/context');

var points = [
      [0.0, 63.8, 5.6, 76.3, 14.6, 85.4],
      [23.7, 94.4, 36.2, 100.0, 50.0, 100.0],
      [63.8, 100.0, 76.3, 94.4, 85.4, 85.4],
      [94.4, 76.3, 100.0, 63.8, 100.0, 50.0],
      [100.0, 36.2, 94.4, 23.7, 85.4, 14.6],
      [76.3, 5.6, 63.8, 0.0, 50.0, 0.0],
      [36.2, 0.0, 23.7, 5.6, 14.6, 14.6],
      [5.6, 23.7, 0.0, 36.2, 0.0, 50.0]
];

ctx.save();
ctx.beginPath();
ctx.moveTo(0.0, 50.0);
points.forEach(function(point, index){
      console.log(point)
      ctx.bezierCurveTo.apply(ctx, point);
});
ctx.closePath();
ctx.fill();
ctx.restore();

// // layer1/Path
// ctx.save();
// ctx.beginPath();
// ctx.moveTo(0.0, 50.0);
// ctx.bezierCurveTo(0.0, 63.8, 5.6, 76.3, 14.6, 85.4);
// ctx.bezierCurveTo(23.7, 94.4, 36.2, 100.0, 50.0, 100.0);
// ctx.bezierCurveTo(63.8, 100.0, 76.3, 94.4, 85.4, 85.4);
// ctx.bezierCurveTo(94.4, 76.3, 100.0, 63.8, 100.0, 50.0);
// ctx.bezierCurveTo(100.0, 36.2, 94.4, 23.7, 85.4, 14.6);
// ctx.bezierCurveTo(76.3, 5.6, 63.8, 0.0, 50.0, 0.0);
// ctx.bezierCurveTo(36.2, 0.0, 23.7, 5.6, 14.6, 14.6);
// ctx.bezierCurveTo(5.6, 23.7, 0.0, 36.2, 0.0, 50.0);
// ctx.closePath();
// ctx.fill();