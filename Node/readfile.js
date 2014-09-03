var fs = require('fs');
fs.readFile('my_file.txt', function(err, data) { 
	if (err) { throw err; }
	console.log(data);
});
