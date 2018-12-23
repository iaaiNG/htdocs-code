const http = require('http');

let server = http.createServer((req, res)=>{
  console.log(req.headers)
  res.writeHead(200, {
    "Content-Type":"text/html;charset=utf-8",
    "Cache-Control":"no-cache"
  })
  res.write('<h1>From Node.js</h1>')
  res.end('<h2>世界，你好！</h2>')
});
server.listen(3000);