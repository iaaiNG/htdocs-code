var koa = require('koa');
var Router = require('koa-router');
var koaLog = require('./koa-logger')

var app = new koa();
var router = new Router()

router.get('/', (ctx, next)=>{
  ctx.body = '齐天大圣'
})
router.get('/login', (ctx, next)=>{
  ctx.body = '登录页面'
})
app.use(koaLog)
app.use(router.routes()).use(router.allowedMethods())
// app.use(async(ctx, next) => {
//   // console.log(ctx)
//   ctx.body = '1'
//   await next()
//   ctx.body += '2'
// });
// app.use(async(ctx, next) => {
//   ctx.body += '3'
//   await next()
//   ctx.body += '4'
// });
// app.use(async(ctx, next) => {
//   ctx.body += '5'
//   await next()
//   ctx.body += '6'
// });

app.listen(8080);

