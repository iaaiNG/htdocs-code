const http = require('http');
const express = require('express');

const userRouter = require('./router/user');
const productsRouter = require('./router/products')
const news = require('./router/news')

const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');

let app = express();
http.createServer(app).listen(3005);

// 中间件
app.use(cookieParser())
app.use(bodyParser.urlencoded({extended:false}))
app.use(cors({
  origin:[
    'http://localhost','http://127.0.0.1',
    'http://localhost:8080','http://127.0.0.1:8080'],
  methods:['PUT','DELETE','POST','GET']
}))

app.use('/user', userRouter);
app.use('/products', productsRouter);
app.use('/news', news)