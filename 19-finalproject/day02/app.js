const http = require('http');
const express = require('express');
const userRouter = require('./router/user');
const newsRouter = require('./router/news');
const productRouter = require('./router/project');
const cartRouter = require('./router/cart');

let app = express();
http.createServer(app).listen(3000);

app.use('/user', userRouter);
app.use('/news', newsRouter);
app.use('/product', productRouter);
app.use('/cart', cartRouter);