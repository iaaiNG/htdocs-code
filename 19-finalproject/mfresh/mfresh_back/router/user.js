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
const qs = require('querystring');
module.exports = router;

router.post('/login', (req, res) => {
  let obj = req.body
  let unameOrPhone = obj.unameOrPhone
  let upwd = obj.upwd
  let sql = 'select * from mf_user where (uname=? or phone=?) and upwd=?'
  pool.query(sql, [unameOrPhone, unameOrPhone, upwd], (err, result) => {
    if (err) throw err;
    res.json(result)
  })
})
/**
 *注册新用户
 *请求参数：
 uname-用户名
 upwd-密码
 phone-电话号码
 *输出结果：
 * {"code":1,"uid":3,"uname":"test"}
 * 或
 * {"code":500}
 */
router.post('/register', (req, res) => {
  let obj = req.body
  let uname = obj.unameOrPhone
  let upwd = obj.upwd
  let phone = obj.phone
  let sql = 'insert into mf_user(uname,upwd,phone) value(?,?,?) '
  pool.query(sql, [uname, upwd, phone,], (err, result) => {
    if (err) throw err;
    if(result){
      let response = `{"code":200,"uid":"${result.insertId}","uname":"${uname}"}`
      res.send(response)
    }else{
      res.send('{"code":500}')
    }
  })
})

/**
 *验证用户名是否已经存在
 *请求参数：
 uname-用户名
 *输出结果：
 * {"code":200,"msg":"exist"}  存在
 * 或
 * {"code":400,"msg":"non-exist"}  不存在
 */
router.post('/check/uname', (req, res) => {
  let uname = req.body.uname
  pool.query('select * from mf_user where uname=?',[uname], (err, result)=>{
    if (err) throw err;
    if(result.length){
      res.send('{"code":200,"msg":"exist"}')
    }else{
      res.send('{"code":400,"msg":"non-exist"}')
    }
  })
})
/**
 *验证电话号码是否已经存在
 *请求参数：
 phone-用户名
 *输出结果：
 * {"code":200,"msg":"exist"}
 * 或
 * {"code":400,"msg":"non-exist"}
 */
router.post('/check/phone', (req, res) => {
  let phone = req.body.phone
  pool.query('select * from mf_user where phone=?',[phone], (err, result)=>{
    if (err) throw err;
    if(result.length){
      res.send('{"code":200,"msg":"exist"}')
    }else{
      res.send('{"code":400,"msg":"non-exist"}')
    }
  })
})