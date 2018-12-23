/**
 * connect mysql
 */
const mysql = require('mysql');
let connection = mysql.createConnection({
    user: 'root',
    password: '',
    port: 3306
})
connection.connect((err) => {
    if (err) throw err;
    connection.query('select * from xz.xz_user', (err, results, fields) => {
        if (err) throw err;
        console.log(results)
    })
})