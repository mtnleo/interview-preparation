import http from 'http';

const PORT = 8080;

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        console.log("req received");
        res.writeHead(200, {'Content-type': 'text-html'});
        res.end('<h1>Welcome to the Grid Dynamics` interview!</h1>');
    } else if (req.url === '/about') {
        res.writeHead(200, {"Content-type": "text-html"});
        res.end("<h1>About GD</h1>");
    }
})

server.listen(PORT, () => {`Server is listening in port ${PORT}`});