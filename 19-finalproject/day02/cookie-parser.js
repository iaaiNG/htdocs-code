const http = require('http');
const express = require('express');
const cookieParser = require('cookie-parser');

let app = express();
http.createServer(app).listen(3000);

app.use(cookieParser())
app.get('/user', (req,res)=>{
  console.log(req.cookies)
  res.json(req.cookies || {})
});
