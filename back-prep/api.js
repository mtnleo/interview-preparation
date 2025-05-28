import http from 'http';

const server = http.createServer((req, res) => {
    console.log("Req received.");

    if(req.url === '/' && req.method === "GET") {
        res.setHeader('Content-Type', 'text-html')
        res.end('<h1>Welcome<h1>')
    }

    if(req.url === '/' && req.method === "POST") {
        res.setHeader('Content-Type', 'text-html')
        res.end('<h1>You dont have permission to do that<h1>')
    }


    
})

server.listen(3000, () => {
        console.log("Server listening on port 3000");
    }
)