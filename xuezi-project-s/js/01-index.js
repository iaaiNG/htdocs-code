function getTotalTop(elem){
  var sum=0
  do{
    sum+=elem.offsetTop
    elem = elem.offsetParent;
  }while(elem)
  return sum
}

(function(){
    ajax("get","data/01-index/floors.php","")
        .then(value=>{
            var html=""
            var p=value.f1
            for(let i=0;i<p.length;i++){
                if(i<2)
                html+=`
                    <div>
                      <div class="desc">
                        <p class="name">${p[i].title}</p>
                        <p class="details">${p[i].details}</p>
                        <p class="price">¥${parseFloat(p[i].price).toFixed(2)}</p>
                        <a href="${p[i].href}" class="view">查看详情</a>
                      </div>
                      <img src="${p[i].pic}">
                    </div>`
                if(i==2)
                    html+=`
                    <div>
                      <div class="desc">
                        <p class="name">${p[i].title}</p>
                        <p class="price">¥${parseFloat(p[i].price).toFixed(2)}</p>
                        <a href="${p[i].href}" class="view">查看详情</a>
                      </div>
                      <img src="${p[i].pic}">
                    </div>`
                if(i>2)
                    html+=`
                    <div class="product">
                      <img src="${p[i].pic}" title="${p[i].details}">
                      <p class="name">${p[i].title}</p>
                      <p class="price">¥${parseFloat(p[i].price).toFixed(2)}</p>
                      <a href="${p[i].href}">查看详情</a>
                    </div>`
            }

            document.getElementById("f1-content").innerHTML=html
            var html=""
            var p=value.f2
            for(var i=0;i<p.length;i++){
                if(i<2)
                    html+=`
                    <div>
                      <div class="desc">
                        <p class="name">${p[i].title}</p>
                        <p class="details">${p[i].details}</p>
                        <p class="price">¥${parseFloat(p[i].price).toFixed(2)}</p>
                        <a href="${p[i].href}" class="view">查看详情</a>
                      </div>
                      <img src="${p[i].pic}">
                    </div>`
                if(i==2)
                    html+=`
                    <div>
                      <div class="desc">
                        <p class="name">${p[i].title}</p>
                        <p class="price">¥${parseFloat(p[i].price).toFixed(2)}</p>
                        <a href="${p[i].href}" class="view">查看详情</a>
                      </div>
                      <img src="${p[i].pic}">
                    </div>`
                if(i>2)
                    html+=`
                    <div class="product">
                      <img src="${p[i].pic}">
                      <p class="name">${p[i].title}</p>
                      <p class="price">¥${parseFloat(p[i].price).toFixed(2)}</p>
                      <a href="${p[i].href}">查看详情</a>
                    </div>`
            }
            document.getElementById("f2-content").innerHTML=html
            var html=""
            var p=value.f3
            for(var i=0;i<p.length;i++){
                if(i<2)
                    html+=`
                    <div>
                      <div class="desc">
                        <p class="name">${p[i].title}</p>
                        <p class="details">${p[i].details}</p>
                        <p class="price">¥${parseFloat(p[i].price).toFixed(2)}</p>
                        <a href="${p[i].href}" class="view">查看详情</a>
                      </div>
                      <img src="${p[i].pic}">
                    </div>`
                if(i==2)
                    html+=`
                    <div>
                      <div class="desc">
                        <p class="name">${p[i].title}</p>
                        <p class="price">¥${parseFloat(p[i].price).toFixed(2)}</p>
                        <a href="${p[i].href}" class="view">查看详情</a>
                      </div>
                      <img src="${p[i].pic}">
                    </div>`
                if(i>2)
                    html+=`
                    <div class="product">
                      <img src="${p[i].pic}">
                      <p class="name">${p[i].title}</p>
                      <p class="price">¥${parseFloat(p[i].price).toFixed(2)}</p>
                      <a href="${p[i].href}">查看详情</a>
                    </div>`
            }
            document.getElementById("f3-content").innerHTML=html

            var items = document.querySelectorAll("#lift .lift_item")
            window.addEventListener("scroll",()=>{
                var totalTop = getTotalTop(document.querySelector("#f1"))
                var scrollTop = document.documentElement.scrollTop
                document.getElementById("lift").style.display = innerHeight/2+scrollTop>=totalTop?"block":"none"
                if(document.getElementById("lift").style.display=="block"){
                    for (var i=0;i<items.length;i++){
                        var totalTop = getTotalTop(document.querySelector(`#f${i+1}`))
                        if(totalTop<=innerHeight/2+scrollTop){
                            for(let each of items)each.className="lift_item"
                            items[i].className = "lift_item lift_item_on"
                        }
                    }
                }
            })
            $("#lift").on("click", ".lift_item", function(){
                var totalTop = getTotalTop(document.querySelector(`#f${parseInt($(this).index())+1}`))
                $("body,html").stop(true).animate({scrollTop:totalTop-70},1000)
            })
        })
})();
(function(){
    ajax("get","data/01-index/banners.php","")
        .then(value=>{
            const LIWIDTH=960;
            var htmlImgs="";
            var htmlIdxs="";
            for(var i=0;i<value.length;i++){
                var p=value[i]
                htmlImgs+=`
                    <li>
                      <a href="${p.href}">
                        <img src="${p.img}" title="${p.title}">
                      </a>
                    </li>`
                htmlIdxs+="<li></li>"
            }
            var bannerImg = document.getElementById("banner-img")
            bannerImg.innerHTML = htmlImgs
            bannerImg.style.width = LIWIDTH*value.length+"px"
            document.getElementById("indicators").innerHTML = htmlIdxs
    })
})();