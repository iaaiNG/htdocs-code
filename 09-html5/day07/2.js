onmessage = function(e){
    var result = 0
    for(var i=1;i<=e.data;i++){
        result += i
    }
    postMessage(result)
}
