var fs = require('fs');
var spawn = require('child_process').spawn;

var python_process = spawn('python', ['python_pgm.py'], '-u');

var output = '';

python_process.stderr.on('data', function(chunk) {
  output += chunk.toString();
});

python_process.stdout.on('data', function(chunk) {
  output += chunk.toString();
});

python_process.on('close', function() {
  console.log(output);
});
