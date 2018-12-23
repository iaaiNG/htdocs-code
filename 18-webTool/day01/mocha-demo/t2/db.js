const mysql = require('mysql');
module.exports = mysql.createPool({
    user:'root'
})