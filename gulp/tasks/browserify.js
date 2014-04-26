var browserify = require('browserify');
var gulp       = require('gulp');
var livereload = require('gulp-livereload');
var notify     = require("gulp-notify");
var source     = require('vinyl-source-stream');

var errorHandler = function() {
	// Send error to notification center with gulp-notify
	notify.onError({
		message: "<%= error.message %>",
		title: "JavaScript Error"
	}).apply(this, arguments);

	// Keep gulp from hanging on this task
	this.emit('end');
};

gulp.task('browserify', function(){
	return browserify({
			entries: ['./src/javascript/app.js'],
			extensions: ['.coffee', '.hbs']
		})
		.require('backbone/node_modules/underscore', { expose: 'underscore' })
		.bundle({debug: true})
		.on('error', errorHandler)
		.pipe(source('app.js'))
		.pipe(gulp.dest('./build/'))
		.pipe(livereload());
});
