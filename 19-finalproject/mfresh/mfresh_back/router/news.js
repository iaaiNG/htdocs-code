/**
 *根据新闻ID返回新闻详情
 *请求参数：
 nid-新闻ID，必需
 *输出结果：
 {
   "nid": 1,
   ...
 }
 */
const router = require('express').Router();
const pool = require('../pool')
module.exports = router;

router.get('/:nid', (req, res) => {
  let i = req.params.nid;
  let sql = 'select * from mf_news where nid=?'
  pool.query(sql,[i],(err,result)=>{
    res.json(result[0])
  })
})
/**
 *按发布时间逆序返回新闻列表
 *请求参数：
 pageNum-需显示的页号；默认为1
 *输出结果：
 {
   totalRecord: 24,
   pageSize: 5,
   pageCount: 5,
   pageNum: 1,
   data: [{},{} ... {}]
 }
 */
router.get('/list/:pageNum', (req, res) => {
  let pageNum = parseInt(req.params.pageNum) || 1;
  let pager = {
    totalRecord: 0,
    pageSize: 5,
    pageCount: 0,
    pageNum: pageNum,
    data: []
  }
  let sql = 'select nid,title,pubTime from mf_news order by pubTime DESC limit ? , ?;';
  pool.query('select count(*) c from mf_news',(err,resulut)=>{
    if(err) throw err;
    pager.totalRecord = resulut[0].c
    pager.pageCount = Math.ceil(pager.totalRecord/pager.pageSize)
    pool.query(sql,[(pageNum-1)*pager.pageSize,pager.pageSize],(err,result)=>{
      if(err) throw err;
      pager.data = result
      res.json(pager)
    })
  })

})