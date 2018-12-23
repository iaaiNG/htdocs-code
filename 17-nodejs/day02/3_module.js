// const file = require('./4_test')
// console.log(file.calcEare(3))
// console.log(file.calcLong(3))
// const x = require('./m2')
// console.log(x.x)

// const queryString = require('querystring');
// let string = 'ie=UTF-8&wd=php是最好的';
// console.log(queryString.parse(string))
// let obj = { ie: 'UTF-8', wd: 'php是最好的' }
// console.log(queryString.stringify(obj)) 

// const url = require('url');
// let string = 'http://www.itcast.cn/subject/phpzly/index.shtml?jingjia-01-chuanzhi-php-xin-pc-php/'
// console.log(url.parse(string))
// console.log(url.parse(string,1))

const path = require('path')
// let string = path.join(__filename, 'test1/test2','/test3')
// console.log(string)
// console.log(path.isAbsolute('./test.js'))
// console.log(path.isAbsolute(__dirname))
// console.log(path.isAbsolute(__filename))
// console.log(path.extname(__filename))

// const util = require('util')
// console.log(util.isArray([]))

const fs = require('fs')
// let data = fs.readFileSync(__filename)
// console.log(data.toString())

// fs.readFile(__filename, (err, data)=>{
//     if(err) throw err;
//     console.log(data.toString())
// })
// console.log('JKM...')
// fs.writeFileSync('./day02/test.txt',"JKM")
// fs.writeFile('./day02/test2.txt',"QWE").

// fs.mkdir(path.join(__dirname,"dir"))

const http = require('http')
// let server = http.createServer((req, res)=>{
//     res.end('it works...')
// })
// let server = http.createServer()
// server.on('request', (req, res)=>{
//     console.log(req.url)
//     console.log(req.httpVersion)
//     console.log(req.headers)
//     res.end("JKM...QWE.")
// });
// server.listen(3000)

let option = {
    host:'ip.taobao.com',
    path:'/service/getIpInfo.php?ip=12.34.56.78'
}
let request = http.request(option, (res)=>{
    res.on('data', (buffer)=>{
        console.log(JSON.parse(buffer.toString()))
    })
})
request.end()