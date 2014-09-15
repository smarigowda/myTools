var fs = require('fs');
var spawn = require('child_process').spawn;
var ls = spawn('ls', ['-lRt', '/']);
ls.stdout.on('data',  function(chunk) { console.log('chunk = ' + chunk ); });
