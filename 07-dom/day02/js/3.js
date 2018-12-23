document.querySelector("#container>div:first-child")
    .style.zIndex=10;
(function(){
    var as = document.querySelectorAll(".tabs [data-trigger]")
    for(var a of as){
        a.onclick = function(){
            var i = this.href.lastIndexOf("#")
            var div = document.getElementById(this.href.slice(i+1))
            var styles = getComputedStyle(div)
            if(styles.zIndex=="auto"){
                var divs = document.querySelectorAll("#container>div")
                for(let div of divs){
                    div.style.zIndex=""
                }
                div.style.zIndex = 10
            }
        }
    }
})()