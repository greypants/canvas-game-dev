var changed    = require('gulp-changed');
var gulp       = require('gulp');

gulp.task('markup', function() {
	var dest = './build';

	return gulp.src('./src/index.html')
		.pipe(changed(dest)) // Ignore unchanged files
		.pipe(gulp.dest(dest));
});
