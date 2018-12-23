const mysql = require('mysql');
let pool = mysql.createPool({
  host:'127.0.0.1',
  user:'root',
  connectionLimit:10,
  database:'mfresh',
  port:3306
})
console.log('连接池创建完成')
module.exports = pool;
