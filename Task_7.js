const http = require('http');

const server = http.createServer((req,res)=>{
    const url=req.url;
    if (url=='/home'){
        res.write('<html>')
        res.write('<body><h1>Welcome Home</h1></body>')
        res.write('</html>')
        res.end()
    }
    if (url=='/about'){
        res.write('<html>')
        res.write('<body><h1>Welcome to About Us Page</h1></body>')
        res.write('</html>')
        res.end()
    }
    if (url=='/node'){
        res.write('<html>')
        res.write('<body><h1>Welcome to my Node JS project</h1></body>')
        res.write('</html>')
        res.end()
    }
    
});

server.listen(4000);