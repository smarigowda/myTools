var http = require('http');
	path = require('path');
	fs = require('fs');

function httpListner (req, res) {
	console.log(req.url);
	res.writeHead(200, { 'Content-Type': 'plain/text' });
	res.end('hello world');
}

http.createServer(httpListner).listen(8124, function() { console.log('server listening at 8124'); });
