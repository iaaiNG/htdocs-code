/**
 * 分页显示所有的商品
 * 请求参数：
 * kw-关键词
 * pno-页码
 */
const router = require('express').Router();
const pool = require('../pool');
module.exports = router;

router.get('/list/:pageNum', (req, res) => {
  let pageNum = req.params.pageNum;
  let kw = req.body.kw || 0
  let count = 0
  let sql = "SELECT COUNT(*) count FROM hymson_product";
  if (kw) {
    sql += " WHERE title LIKE ?";
  }
  pool.query(sql, ['%' + kw + '%'], (err, result) => {
    if (err) throw err;
    var string = JSON.stringify(result)
    var data = JSON.parse(string)[0]
    count = data.count

    let output = {
      'recordCount': count,     //满足条件的总记录数
      'pageSize': 3,        //每页大小，即每页最多可以显示的记录数量
      'pageCount': 0,       //总页数
      'pno': pageNum,          //当前数据所在页号
      'data': null          //当前页中的数据
    }
    //计算总页数
    output.pageCount = Math.ceil(count/output.pageSize)
    
    //获取指定页中的数据
    let start = (pageNum-1)*output.pageSize
    let size = output.pageSize
  
    sql = `SELECT * FROM hymson_product ${kw?`WHERE title LIKE '%${kw}%'`:""} LIMIT ${start},${size}`
    pool.query(sql,  (err, result) => {
      if (err) throw err;
      var string = JSON.stringify(result)
      var data = JSON.parse(string)
      output.data = data
      res.json(output)
    })
  })
})

router.get('/detail/:pid', (req, res) => {
  let pid = req.params.pid;
  
  sql = `SELECT * FROM hymson_product where pid=?`
  pool.query(sql, [pid], (err, result) => {
    if (err) throw err;
    res.json(result[0])
  })
  
})