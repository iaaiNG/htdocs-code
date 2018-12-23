(function(){
    var input = document.querySelector("thead input")
    var inputs = document.querySelectorAll("tbody input")
    input.onclick = function(){
        for(var each of inputs){
            each.checked=this.checked
        }
    }
    for(var each of inputs){
        each.onclick = function(){
            var checked = document.querySelector("table>tbody td:first-child>input:not(:checked)")
            input.checked = (checked == null)
        }
    }
})()