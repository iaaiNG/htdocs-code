const http = require('http');
const express = require('express');
const qs = require('querystring')

let app = express()
http.createServer(app).listen(3000);

function sendMsg(res, msg) {
  res.set({"Access-Control-Allow-Origin": "http://localhost"}).send(msg)
}

app.options('/user', (req, res) => {  // 针对预检请求的响应
  res.set({
    "Access-Control-Allow-Origin": "http://localhost",
    "Access-Control-Allow-Methods": "PUT,DELETE",
  }).end()
})
// 查询
app.get('/user', (req, res) => {
  console.log(req.query)
  sendMsg(res, '欢迎：iaaiNG')
})
// 增加
app.post('/user/login', (req, res) => {
  req.on('data',(data)=>{  // node.js接收到请求数据触发data事件
    // console.log(data.toString())
    console.log(qs.parse(data.toString()))
  })
  sendMsg(res, '登录成功')
})
// 修改
app.put('/user', (req, res) => {
  sendMsg(res, '修改成功')
})
// 删除
app.delete('/user', (req, res) => {
  sendMsg(res, '删除成功')
})
