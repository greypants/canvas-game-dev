var changed    = require('gulp-changed');
var gulp       = require('gulp');

gulp.task('audio', function() {
	var dest = './build/audio';

	return gulp.src('./src/audio/**')
		.pipe(changed(dest)) // Ignore unchanged files
		.pipe(gulp.dest(dest));
});
