const http = require('http');
//create server
const server = http.createServer((req,res)=>{
    //log details
    console.log(`Received ${req.method} request for: ${req.url}`);

    //set code 
    res.writeHead(200, {"Content-Type":"text/plain"});

    //set status

    res.end('hello server, first node')
})

//?Define port

const PORT = 7000;
server.listen(PORT, ()=>{
    console.log(`Server  running at: http://localhost:${PORT}`);
    console.log('Press ctrl+ c to stop server');
})