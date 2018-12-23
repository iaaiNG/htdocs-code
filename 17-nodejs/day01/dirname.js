// console.log(__dirname);
// console.log(__filename);
// console.time();
// console.info("JKM");
// console.warn("JKM");
// console.trace("JKM");
// console.timeEnd();
// console.log(process.arch)
// console.log(process.pid)
// process.kill(6212)
// console.log(process.env)
// console.log(process.execPath)
// console.log(process.version)
// console.log(process.cwd())
// console.log(process.uptime())
// const os = require("os")
// console.log(os.uptime())
// let buffer = new Buffer(8)
let buffer = Buffer.alloc(8)
console.log(buffer)
let b2 = Buffer.from("abc")
for (let each of b2.entries()){
    console.log(each)
}
