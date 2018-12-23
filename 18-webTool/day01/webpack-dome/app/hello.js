const config = require('./config')
module.exports = function(){
    let hello = document.createElement("h1")
    hello.textContent = config.hello
    return hello
}