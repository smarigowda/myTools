var formidable = require('formidable');
var http = require('http');
var util = require('util');

var server = http.createServer(function(req, res) {
  if (req.url == '/upload' && req.method.toLowerCase() == 'post') {
    // parse a file upload
    var form = new formidable.IncomingForm();

    form.parse(req, function(err, fields, files) {
      res.writeHead(200, {'content-type': 'text/plain'});
      res.write('received upload:\n\n');
      //res.end(JSON.stringify(util.inspect({fields: fields, files: files})));
      res.end(util.inspect({fields: fields, files: files}));
    });
    
    form.on('progress', function() {
       console.log('file upload is in progress....');
    });

    return;
  }

  // show a file upload form
  res.writeHead(200, {'content-type': 'text/html'});
  res.end(
    '<form action="/upload" enctype="multipart/form-data" method="post">'+
    '<input type="text" name="title"><br>'+
    '<input type="file" name="upload" multiple="multiple"><br>'+
    '<input type="submit" value="Upload">'+
    '</form>'
  );
}).listen(1337, function() { console.log('listen callback...'); });

server.on('listening', function() { console.log('server is listening now...'); });