var gulp = require('gulp');

gulp.task('build', ['browserify', 'compass', 'images', 'audio', 'markup']);
