const http = require("http");

const server = http.createServer((req, res) => {
	if (req.url === "/") {
		res.end("welcome to out home page");
		return;
	} else if (req.url === "/about") {
		res.end("welcome to out about page");
		return;
	}
	res.end(`
	<h1>Oops!</h1>
	<p>we cant seem to find the page you are looking for</p>
	<a href='/'>go back to home page</a>
	`);
});

server.listen(5000);
