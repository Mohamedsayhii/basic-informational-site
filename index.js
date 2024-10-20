const url = require('url');
const http = require('http');
const fs = require('fs');

const notFound = fs.readFileSync('404.html');

http.createServer(function (req, res) {
	const pathname = url.parse(req.url, true).pathname;
	const filename =
		pathname === '/' ? './index.html' : '.' + pathname + '.html';

	fs.readFile(filename, (err) => {
		if (err) {
			res.writeHead(404, { 'Content-Type': 'text/html' });
			return res.end(notFound);
		}

		res.writeHead(200, { 'Content-Type': 'text/html' });
		res.write(fs.readFileSync(filename));
		return res.end();
	});
}).listen(8080);
