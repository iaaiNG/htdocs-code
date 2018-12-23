const router = require('express').Router();
module.exports = router;

/**
 *根据产品ID返回产品详情
 *请求参数：
 pid-产品ID，必需
 *输出结果：
 {
   "pid": 1,
   "title1":"xxx",
   ...
 }
 */
router.get('/:pid', (req, res) => {
  let i = req.params.pid;
  let news = {
    nid:i,
    title:'title'
  }
  res.json(news)
  req.on('data', (data) => {

  })
})
/**
 *分页获取产品信息
 *请求参数：
 pageNum-需显示的页号；默认为1
 type-可选，默认为1
 *输出结果：
 {
   totalRecord: 37,
   pageSize: 6,
   pageCount: 7,
   pageNum: 1,
   type: 1,
   data: [{},{} ... {}]
 }
 */
router.get('/list/:pageNum', (req, res) => {
  let n = req.params.pageNum;
  let news = {
    nid:n,
    title:'title'
  }
  res.json(news)
  req.on('data', (data) => {
  })
})