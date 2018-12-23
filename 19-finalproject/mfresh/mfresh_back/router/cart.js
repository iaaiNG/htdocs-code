const router = require('express').Router();
module.exports = router;

/**
 *向购物车中添加商品
 *请求参数：
 uid-用户ID，必需
 pid-产品ID，必需
 *输出结果：
 * {"code":200,"msg":"succ", "productCount":1}
 * 或
 * {"code":400}
 */
router.post('/add/:uid/:pid', (req, res) => {
  let u = req.params.uid;
  let p = req.params.pid;
  let news = {"code":400}
  res.json(news)
  req.on('data', (data) => {

  })
})
/**
 *根据购物车详情记录编号删除该购买记录
 *请求参数：
 did-详情记录编号
 *输出结果：
 * {"code":1,"msg":"succ"}
 * 或
 * {"code":400}
 */
router.post('/delete/:did', (req, res) => {
  let d = req.params.did;
  let news = {"code":400}
  res.json(news)
  req.on('data', (data) => {
  })
})
/**
 *查询指定用户的购物车内容
 *请求参数：
 uid-用户ID，必需
 *输出结果：
 {
   "uid": 1,
   "products":[
     {"pid":1,"title1":"xxx","pic":"xxx","price":1599.00,"count":3},
     {"pid":3,"title1":"xxx","pic":"xxx","price":1599.00,"count":3},
     ...
     {"pid":5,"title1":"xxx","pic":"xxx","price":1599.00,"count":3}
   ]
 }
 */
router.get('/select/:uid', (req, res) => {
  let u = req.params.uid;
  let news = {
    "uid": u,
  }
  res.json(news)
  req.on('data', (data) => {
  })
})
/**
 *根据购物车详情记录编号修改该商品购买数量
 *请求参数：
 did-详情记录编号
 pid-商品编号
 count-更新后的购买数量
 *输出结果：
 * {"code":200,"msg":"succ"}
 * 或
 * {"code":400}
 */
router.post('/updata/:did/:pid/:count', (req, res) => {
  let d = req.params.did;
  let p = req.params.pid;
  let c = req.params.count;
  let news = {"code":400}
  res.json(news)
  req.on('data', (data) => {
  })
})