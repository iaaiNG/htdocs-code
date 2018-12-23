const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

let app = express();
http.createServer(app).listen(3000);

//前置中间件
app.use((req,res,next)=>{
  console.log('middle start')
  next()
})

app.use(bodyParser.urlencoded({extended:false}))
app.use(cookieParser())

app.use('/user/login',(req, res,next)=>{
  console.log('JKM')
  res.send("JKM")
  next()
})

app.get('/user', (req,res)=>{
  console.log(req.cookies)
  res.json(req.cookies || {})
});

//后置中间件
app.use((req,res,next)=>{
  console.log('middle end')
  next()
})