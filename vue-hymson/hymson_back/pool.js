const mysql = require('mysql');
let pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  connectionLimit: 10,
  database: 'a1018003129',
  port: 3306
})
console.log('连接池创建完成')
module.exports = pool;
