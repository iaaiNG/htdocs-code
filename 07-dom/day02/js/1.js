(function(){
    var spans = document.querySelectorAll(".tree>li>span")
    for(var elem of spans){
        elem.onclick = function(){
           if(this.className=="open")
               this.className=""
            else{
               var fin = document.querySelector(".tree .open")
               if(fin!=null)fin.className=""
               this.className = "open"
            }
        }
    }
})()

