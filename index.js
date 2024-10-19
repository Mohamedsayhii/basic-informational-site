const url = require('url');
const http = require('http');
const fs = require('fs');

const homepage = fs.readFileSync('index.html');
const about = fs.readFileSync('about.html');
const contactMe = fs.readFileSync('contact-me.html');
const notFound = fs.readFileSync('404.html');

http.createServer(function (req, res) {
	const pathname = url.parse(req.url, true).pathname;
	const filename =
		pathname === '/' ? './index.html' : '.' + pathname + '.html';

	fs.readFile(filename, function (err, data) {
		if (err) {
			res.writeHead(404, { 'Content-Type': 'text/html' });
			return res.end(notFound);
		}

		res.writeHead(200, { 'Content-Type': 'text/html' });
		if (pathname === '/') {
			res.write(homepage);
		} else if (pathname === '/about') {
			res.write(about);
		} else if (pathname === '/contact-me') {
			res.write(contactMe);
		}

		return res.end();
	});
}).listen(8080);
