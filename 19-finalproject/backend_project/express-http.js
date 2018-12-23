const http = require('http');
const express = require('express');
let app = express();
http.createServer(app).listen(3000);

// 路由Route
// app.get('/', (req, res)=>{
//   res.send("<h3>欢迎使用Express</h3><hr>")
// });
app.get('/list', (req, res) => {
  res.set({"Access-Control-Allow-Origin": "http://localhost"}).json([
    {uname: "tom"},
    {uname: "jerry"}
  ])
});
app.post('/user', (req, res) => {
  res.set({"Access-Control-Allow-Origin": "http://localhost"})
    .send('user add succ')
});
app.put('/put', (req, res) => {
  res.set({"Access-Control-Allow-Origin": "http://localhost"})
    .send('succ put')
});
app.delete('/delete', (req, res) => {
  res.set({"Access-Control-Allow-Origin": "http://localhost"})
    .send('succ delete')
});