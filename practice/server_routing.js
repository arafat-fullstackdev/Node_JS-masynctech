const http = require("http");
//create server
const server = http.createServer((req, res) => {
  //log details
  console.log(`Received ${req.method} request for: ${req.url}`);

  //set code
  res.writeHead(200, { "Content-Type": "text/plain" });

  //set status
//   if(req.url==='/' && req.method==='GET'){
//     res.statusCode= 200;
//     res.end('Welcome to home page')
//   }else if(req.url === '/about' && req.method==='GET'){
//      res.statusCode= 200;
//     res.end('Welcome to About page')
//   }else if(req.url === '/contact' && req.method==='GET'){
//      res.statusCode= 200;
//     res.end('Contact us at @yahoo mail')
//   }else{
//      res.statusCode= 404;
//     res.end('404-page not found')
//   }

 // res.end("hello server, first node");
//});

//! JSON data
if(req.url==='/' && req.method==='GET'){
    res.statusCode= 200;
    res.end(JSON.stringify({message: 'Welcome to JSON data Api'}))
}else if(req.url==='/users' && req.method==='GET'){
    res.statusCode= 200;
    const usersData= [{id: 1, name: 'Smith', role: 'Developer',
        id: 2, name: 'Gam', role: 'Engineer',
        id: 3, name: 'Lohan', role: 'AI',
    }]
    res.end(JSON.stringify(usersData))
}else if(req.url==='/products' && req.method==='GET'){
    res.statusCode= 200;
    const productData=[{
        id: 11, name: 'Honey', price: 234,
        id: 22, name: 'Nut', price: 543,
        id: 33, name: 'Chees', price: 154
    }]
    res.end(JSON.stringify(productData))
}else{
    res.end('404-page not found');
}
})
//?Define port

const PORT = 7000;
server.listen(PORT, () => {
  console.log(`Server  running at: http://localhost:${PORT}`);
  console.log("Press ctrl+ c to stop server");
});
