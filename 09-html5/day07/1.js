function tt(){
    var start = new Date().getTime()
    do{
        var end = new Date().getTime()
    }while(end-start<=5000)
}

console.time("aa")
tt()
postMessage("LQW")
console.timeEnd("aa")

onmessage = function (e) {
    console.log(e.data)
}