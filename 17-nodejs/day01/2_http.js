/**
 * 2_http.js
 */

// 1. 引入 Node.js 核心模块 http
const http = require('http');

// req - request 请求
// res - response 响应
// 2. 创建一个服务器实例
let server = http.createServer((req, res) => {
   res.end('It Works.');
});

// 3. 监听 80 端口：HTTP 协议的默认端口
server.listen('80');

