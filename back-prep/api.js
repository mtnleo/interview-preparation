import http from 'http';

const server = http.createServer((req, res) => {
    console.log("Req received.");

    if(req.url === '/' && req.method === "GET") {
        res.writeHead(200, {'Content-Type': 'text-html'})
        res.end('<h1>Welcome<h1>')
    } else if(req.url === '/' && req.method === "POST") {
        res.writeHead(401, {'Content-Type': 'text-html'})
        res.end('<h1>You don`t have permission to do that!<h1>')
    } else if (req.url === '/about' && req.method === "GET") {
        res.writeHead(200, {'Content-Type': 'text-html'})
        res.end('<h1>About<h1>')
    } else if (req.url === '/contact') {
        res.writeHead(200, {"Content-type": "text-html"});
        res.end("<h1>Contact Us<h1> <p>Please fill out this form<p>")
    } else {
        res.writeHead(404, {"Content-type": "text-html"});
        res.end("<h1>404 Not Found :(<h1>")
    }


    
})

server.listen(3000, () => {
        console.log("Server listening on port 3000");
    }
)