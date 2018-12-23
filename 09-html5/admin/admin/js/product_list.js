$(function(){
    var $pagination = $("#pagination"),
        $page = $("#page-size"),
        $tbd = $("tbody"),
        currentPage = 1,
        visitId
    var $updateWindow = $(".update-jumbotron"),
        $updataOk = $("[data-action=update-ok]"),
        $inputPrice = $(".input-price")
    var $detailWindow = $("[class=detail-jumbotron]")
    var search = []
    function findp(search, pno=1){
        var pageSize = $page.val()
        var offset = (pno-1)*pageSize
        currentPage = pno
        $.ajax({
            url:`data/04_product_list.php`,
            type:"get",
            data: {pageSize:pageSize, offset:offset, kw:search[0], low:search[1], high:search[2]},
            success(data){
                if(data.data.length>0){
                    var html=""
                    for(var l of data.data){
                        if(l.expire==1){
                            html += `
                                <tr class="expire">
                                    <td><input type="checkbox"></td>
                                    <td>${l.lid}</td>
                                    <td><img class="pic" src="${l.pic}"></td>
                                    <td><p class="fname" title="${l.name}">${l.name}</p></td>
                                    <td><p class="title" title="${l.title}">${l.title}</p></td>
                                    <td><p class="spec" title="${l.spec}">${l.spec}</p></td>
                                    <td><p class="pprice">￥${l.price}</p></td>
                                    <td></td>
                                </tr>`
                        }else{
                            html += `
                                <tr>
                                    <td><input type="checkbox"></td>
                                    <td>${l.lid}</td>
                                    <td><img class="pic" src="${l.pic}" alt="pic"></td>
                                    <td><p class="fname" title="${l.name}">${l.name}</p></td>
                                    <td><p class="title" title="${l.title}">${l.title}</p></td>
                                    <td><p class="spec" title="${l.spec}">${l.spec}</p></td>
                                    <td><p class="pprice">￥${l.price}</p></td>
                                    <td data-id="${l.lid}">
                                      <a href="${l.name},${l.category},${l.price},${l.os}" data-action="detail">详情</a>
                                      <a href="#"  data-action="update" data-name="${l.name}">修改</a>
                                      <a href="#"  data-action="delete" data-name="${l.name}">删除</a>
                                    </td>
                                </tr>`
                        }
                    }
                    $tbd.html(html)

                    var len = (Math.ceil((data.count/pageSize)))
                    html = `<li class="${pno==1?'disabled':''}"><a href=\"#\">上一页</a></li>`
                    for(var i=1;i<=len;i++){
                        html += `<li class="${i==pno?'active':''}"><a href="#">${i}</a></li>`
                    }
                    html += `<li class="${pno==len?'disabled':''}"><a href="#">下一页</a></li>`
                    $pagination.html(html)
                }else{
                    var html = `
                            <tr>
                                <td colspan="8">
                                    <h4 class="loading">搜索条件太严苛啦，未找到任何商品~~~</h4>
                                </td>
                            </tr>`
                    $tbd.html(html)
                    $pagination.html("")
                }
            },
            error(){
                alert("网络错误请检查")
            }
        })
    }
    findp(search)
    $page.on("change", function(){
        findp(search)
    })
    $pagination.on("click",function(e){
        e.preventDefault()
        var $tar = $(e.target), value = $tar.html()
        !isNaN(value) && currentPage!=value && findp(search, value)
        value =='上一页' && !$tar.parent().is(".disabled") && findp(search, currentPage-1)
        value =='下一页' && !$tar.parent().is(".disabled") && findp(search, currentPage-0+1)
    })

    $tbd.on("click", function(e){
        e.preventDefault()
        var $tar = $(e.target), $tds =$tar.parent().siblings()
        visitId = $tar.parent().data("id")
        if($tar.is("[data-action=delete]") && confirm(`你确认要删除：${$tds.find(".fname").html()}的对应记录吗`))
            $.get("data/05_product_del.php", {lid:visitId}, data=>findp(search, currentPage))
        if($tar.is("[data-action=update]")){
            $inputPrice.val($tds.find(".pprice").html().slice(1))
            $updateWindow.show(500)
        }
        if($tar.is("[data-action=detail]")){
            var msgArray = $tar.attr("href").split(",")
            $.each(msgArray,(i,elem)=> $detailWindow.find("li")[i].firstElementChild.innerHTML = elem)
            $detailWindow.show(500)
        }
    })

    $updateWindow.on("click",function(e){
        e.preventDefault()
        var $tar = $(e.target)
        if($tar.is("[data-action=update-cancel]"))$updateWindow.hide(500)
        if($tar.is("[data-action=update-ok]")){
            $.get("data/10_product_update.php", {price:$inputPrice.val(),lid:visitId}, function(data){
                alert(data.msg)
                findp(search, currentPage)
                $updateWindow.hide(500)
            })
        }
    })

    $("[data-action=detail-cancel]").click (function(e){
        e.preventDefault()
        $detailWindow.hide(500)
    })

    $(":input").keyup(function(e){
        if(e.keyCode==13){
            search = [$("#product-kw").val(), $("#price_low").val(), $("#price_high").val()]
            findp(search)
        }
    })
})