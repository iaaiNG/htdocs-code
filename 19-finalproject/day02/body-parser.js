const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

let app = express();
http.createServer(app).listen(3000);

app.use(bodyParser.urlencoded({extended:false}))
// app.use(cors())  // Access-Control-Allow-Origin: *
app.use(cors({
  origin:['http://localhost','http://127.0.0.1'],
  methods:['PUT','DELETE','POST','GET']
}))

app.post('/user/login', (req,res)=>{
  console.log(req.body)
  res.json(req.body || {})
});
