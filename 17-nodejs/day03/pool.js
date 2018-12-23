const mysql = require('mysql')
let pool = mysql.createPool({
    user: 'root',
    connectionLimit: 10
})
// pool.getConnection((err, connection) => {
//     if (err) throw err;
let uname = 'dingding'
let upwd = '123456'
let sql = `select * from xz.xz_user where uname=? and upwd=md5(?)`;
//     connection.query(sql, [uname, upwd], (err, results, fields) => {
//         if (err) throw err;
//         console.log(results.length)
//     })
//     connection.release()
// })
pool.query((sql, [uname, upwd], (err, results, fields) => {
    if (err) throw err;
    console.log(results.length)
}))