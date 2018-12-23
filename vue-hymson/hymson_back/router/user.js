/**
 *用户登录验证
 *请求参数：
 unameOrPhone-用户名或电话
 upwd-密码
 *输出结果：
 * {"code":200,"uid":1,"uname":"test","phone":"13012345678"}
 * 或
 * {"code":400}
 */
const router = require('express').Router();
const pool = require('../pool');
module.exports = router;

router.post('/login', (req, res) => {
  let obj = req.body
  console.log(obj)
  let uname = obj.uname
  let upwd = obj.upwd
  let output = {}
  let sql = 'select * from hymson_user where uname=? and upwd=?'
  pool.query(sql, [uname, upwd], (err, result) => {
    if (err) throw err;
    if(!result[0]){
      output.code = 400
    }else{
      var string = JSON.stringify(result)
      var data = JSON.parse(string)
      output.code = 200
      output.data = data[0]
    }
    // console.log(output)
    res.json(output)
  })
})
