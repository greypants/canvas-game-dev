var connect = require('connect');
var gulp    = require("gulp");
var http    = require('http');
var config  = require('../config');

gulp.task('serve', function(){
	var buildPath = __dirname.split('/gulp/tasks')[0] + '/build';

	var app = connect()
		.use(connect.logger('dev'))
		.use(connect.static(buildPath));

	http.createServer(app).listen(config.port);
});
