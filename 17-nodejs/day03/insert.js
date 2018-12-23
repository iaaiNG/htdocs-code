const mysql = require('mysql');
const bcrypt = require('bcryptjs')

let pool = mysql.createPool({
    user: 'root'
})

pool.getConnection((err, connection) => {
    let name = 'iaaiNG'
    let upwd = '123456'
    let salt = bcrypt.genSaltSync(10)
    let encryptedPwd = bcrypt.hashSync(upwd, salt)
    let sql = 'insert into xz.xz_user(uname,upwd) value(?, ?)';
    connection.query(sql, [name, encryptedPwd], (err, results, fields) => {
        console.log(results.affectedRows)
    })
})