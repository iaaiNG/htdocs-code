function pageLoad(pno=0){
    var kw=location.search.split("=")[1]||"";
    var url="data/04-products/products.php?kw="+kw+"&pno="+pno
    ajax("get",url,"")
        .then(value=>{
            var content=value.data
            let html="";
            for(var p of content){
                html +=
                    `<li>
                        <a href="http://localhost/xuezi-project-s/05-product-details.html?lid=${p.lid}">
                          <img src="${p.md}" alt="">
                        </a>
                        <p>
                          <span class="${p.price}">&yen;6988.00</span>
                          <a href="#">${p.title}</a>
                        </p>
                        <div>
                          <span class="reduce">-</span>
                          <input type="text" value="1">
                          <span class="add">+</span>
                          <a href="#" class="addCart">加入购物车</a>
                        </div>
                    </li>`
            }
            document.getElementById("show-list").innerHTML = html

            // var spans = document.querySelectorAll("#show-list .reduce, #show-list .add")
            // for(var each of spans){
            //     each.onclick=function(){
            //         var input = this.parentNode.children[1]
            //         if(this.className=="add") ++input.value
            //         else if(input.value>1)input.value--;
            //     }
            // }
            var btn = document.querySelector("#show-list")
            btn.onclick = function(e){
                if(e.target.className=="add") e.target.parentNode.children[1].value++
                else if(e.target.className=="reduce"&&e.target.parentNode.children[1].value>1)e.target.parentNode.children[1].value--
            }


            let lis =""
            var pageCount = value.pageCount,
                pageNo =value.pageNo
            for(var i=1;i<=pageCount;i++){
                if(pageNo!=i-1)
                    lis += `<a href="#">${i}</a>`
                else
                    lis += `<a href="#" class="current">${i}</a>`
            }
            html =
                `<a href="#" class="previous">上一页</a>${lis}
                 <a href="#" class="next">下一页</a>`

            var divPages = document.getElementById("pages")
            divPages.innerHTML = html
            var pre = divPages.firstElementChild
            var nex = divPages.lastElementChild
            if(pageNo==0){
                pre.className = "previous disabled"
            }else if(pageNo==pageCount-1){
                nex.className = "next disabled"
            }else{
                pre.className = "previous"
                nex.className = "next"
            }

            // var as = divPages.querySelectorAll("a:not(:first-child)")
            // for (let i=0;i<as.length-1;i++){
            //     as[i].onclick = function(){
            //         pageLoad(i)
            //     }
            // }

            divPages.onclick = e=>{
                if(!isNaN(e.target.innerHTML))pageLoad(e.target.innerHTML-1)
            }

            pre.onclick = function(){
                if(pageNo>0)pageLoad(parseInt(pageNo)-1)
            }
            nex.onclick = function(){
                if(pageNo<pageCount-1)pageLoad(parseInt(pageNo)+1)
            }

        })
}
pageLoad()