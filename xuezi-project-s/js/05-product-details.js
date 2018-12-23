(()=>{
    var lid = location.search.split("=")[1];
    if(lid!="") {
        ajax("get", "data/05-product-details/details.php?lid="+lid,"")
            .then(data=>{
                var laptop = data.laptop,
                    family = data.family,
                    mImg = document.getElementById("mImg"),
                    largeDiv = document.getElementById("largeDiv"),
                    icon_list = document.getElementById("icon_list")

                //加载左上角图片
                mImg.src = laptop.pics[0].md
                largeDiv.style.backgroundImage = `url(${laptop.pics[0].lg})`
                var html = ""
                for(var pic of laptop.pics){
                    html +=`<li class="i1"><img src="${pic.sm}" data-md="${pic.md}" data-lg="${pic.lg}"></li>`
                }
                icon_list.innerHTML = html

                var aForward = document.querySelector("#preview>h1>a.forward"),
                    aBackward = document.querySelector("#preview>h1>a.backward"),
                    moved = 0
                const LIWIDTH=62
                if(laptop.pics.length<=5){
                    aForward.className = "forward disabled"
                }
                aForward.onclick = function(){
                    if(moved<laptop.pics.length-5){
                        moved++
                        move()
                        aBackward.className = "backward"
                        if(moved==laptop.pics.length-5){this.className = "forward disabled"}
                    }
                }
                aBackward.onclick = function(){
                    if(moved>0){
                        moved--
                        move()
                        aForward.className = "forward"
                        if(moved==0){this.className = "backward disabled"}
                    }
                }
                function move(){
                    icon_list.style.left = -moved*LIWIDTH+20+"px"
                }

                icon_list.onmouseover = e =>{
                     if(e.target.nodeName == "IMG"){
                         mImg.src = e.target.dataset.md
                         largeDiv.style.backgroundImage = `url(${e.target.dataset.lg})`
                     }
                }
                var superMask = document.getElementById("superMask")
                var mask = document.getElementById("mask")
                superMask.onmouseover = function(){
                    mask.style.display = "block"
                    largeDiv.style.display = "block"
                }
                superMask.onmouseout = function(){
                    mask.style.display = "none"
                    largeDiv.style.display = "none"
                }
                var MSIZE = 175, SMSIZE=350
                var calc = SMSIZE-MSIZE
                superMask.onmousemove = function(e){
                    var left = e.offsetX - MSIZE/2
                    var top = e.offsetY - MSIZE/2
                    if(left<0) left = 0
                    else if(left>calc) left = calc
                    if(top<0) top = 0
                    else if(top>calc) top = calc
                    mask.style.left = left+"px"
                    mask.style.top = top+"px"
                    largeDiv.style.backgroundPosition= left/calc*100+"%"+" "+top/calc*100+"%"
                }

                //加载右上角信息
                var title = document.querySelector("#show-details>h1"),
                    subtitle = document.querySelector("#show-details>h3>a"),
                    price = document.querySelector("#show-details>.price>.stu-price>span"),
                    promise = document.querySelector("#show-details>.price>.promise"),
                    spec = document.querySelector("#show-details>.spec>div")

                title.innerHTML = laptop.title
                subtitle.innerHTML = laptop.subtitle
                price.innerHTML += laptop.price
                promise.innerHTML += laptop.promise
                var html = ""
                for(let laptop of family.laptop_list){
                    html += `<a href="05-product-details.html?lib=${laptop.lid}" class=${
                        laptop.lid===lid?"active":""
                        }>${laptop.spec}</a>`
                }
                spec.innerHTML = html
            })
    }
})()