var http = require('http');
http.createServer(function(req, resp) {
	resp.writeHead(200, { 'Content-Type': 'text/plain' });
	resp.end('Hello World\n');
}).listen(8989);

console.log('Server running at http://localhost:8989');
