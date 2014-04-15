var fs = require('fs');

// Require all the tasks in the tasks folder
fs.readdirSync('./gulp/tasks/').forEach(function(taskFile) {
	require('./tasks/' + taskFile);
});