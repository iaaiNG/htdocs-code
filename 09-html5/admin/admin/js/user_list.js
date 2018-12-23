$(function(){
    var $pagination = $("#pagination")
    var $page = $("#page-size")
    var $tbd = $("tbody")
    var currentPage = 1
    var visitId

    var $updateWindow = $(".update-jumbotron")
    var $updataOk = $("[data-action=update-ok]")
    var $avatarWindow = $(".detail-jumbotron")
    var $roleWindow = $(".role-jumbotron")

    var preview = document.getElementById("preview")
    var cfile

    var kw = ""

    function findp(pno=1, kw=""){
        var pageSize = $page.val()
        var offset = (pno-1)*pageSize
        currentPage = pno
        $.get("data/08_user_list.php", {pageSize:pageSize, offset:offset, kw:kw}, function (data) {
            console.log(data)
            var html=""
            for(var l of data.data){
                var gender = l.gender==1?"男":"女";
                var phone = l.phone.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2');
                if(l.expire==1){
                    html += `
                        <tr class="expire">
                            <td><input type="checkbox"></td>
                            <td><img class="pic" src="${l.avatar}"></td>
                            <td><p class="fname" title="${l.uname}">${l.uname}</p></td>
                            <td>${l.user_name}</td>
                            <td><p class="spec" title="${l.gender}">${gender}</p></td>
                            <td><p class="title" title="${l.email}">${l.email}</p></td>
                            <td><p class="pprice">${phone}</p></td>
                            <td></td>
                        </tr>`
                }else{
                    html += `
                        <tr>
                            <td><input type="checkbox"></td>
                            <td><img class="pic" src="${l.avatar}"></td>
                            <td><p class="fname" title="${l.uname}">${l.uname}</p></td>
                            <td>${l.user_name}</td>
                            <td><p class="spec" title="${l.gender}">${gender}</p></td>
                            <td><p class="title" title="${l.email}">${l.email}</p></td>
                            <td><p class="pprice">${phone}</p></td>
                            <td data-id="${l.uid}">
                                <a href="#" class="btn-xs btn-primary" data-action="avatar">上传头像</a>
                                <a href="#" class="btn-xs btn-info" data-action="detail">详情</a>
                                <a href="#" class="btn-xs btn-warning" data-action="update">修改</a>
                                <a href="#" class="btn-xs btn-danger" data-action="delete">删除</a>
                                <a href="#" class="btn-xs btn-success" data-action="role">分配角色</a>
                                <a href="#" class="btn-xs btn-warning" data-action="acl">授权</a>
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
        })
    }
    $page.on("change", ()=>findp())
    $pagination.on("click",function(e){
        e.preventDefault()
        var $tar = $(e.target), value = $tar.html()
        !isNaN(value) && currentPage!=value && findp(value, kw)
        value =='上一页' && !$tar.parent().is(".disabled") && findp(currentPage-1,  kw)
        value =='下一页' && !$tar.parent().is(".disabled") && findp(currentPage-0+1, kw)
    })
    $tbd.on("click", function(e){
        e.preventDefault()
        var $tar = $(e.target), $tds =$tar.parent().siblings()
        visitId = $tar.parent().data("id")
        if($tar.is("[data-action=delete]") && confirm(`你确认要删除：${$tds.find(".fname").html()}的对应记录吗`))
            $.get("data/09_user_del.php", {uid:visitId}, data=> findp(currentPage))
        if($tar.is("[data-action=update]")){
            $updateWindow.find(".uname").html($tds.find(".fname").html())
            $updateWindow.show(500)
        }
        if($tar.is("[data-action=avatar]")){
            $avatarWindow.show(500)
        }
        if($tar.is("[data-action=role]")){
            $roleWindow.find("span").html($tds.find(".fname").html())
            $roleWindow.show(500)
        }
    })
    $updateWindow.on("click",function(e){
        e.preventDefault()
        var $tar = $(e.target)
        if($tar.is("[data-action=update-cancel]"))$updateWindow.hide(500)
        if($tar.is("[data-action=update-ok]")){
            $.get("data/11_user_update.php",
                {oldUPwd:$updateWindow.find(".old-pwd").val(), newUPwd:$updateWindow.find(".new-pwd").val(), uid:visitId},
                function(data){
                    $updateWindow.hide(500)
                    alert(data.msg)
            })
        }
    })
    $avatarWindow.on("click", function(e){
        e.preventDefault()
        var $tar = $(e.target)
        if($tar.is("[data-action=detail-cancel]")){
            $avatarWindow.hide(500)
        }
        if($tar.is("[data-action=detail-ok]")){
            var formData = new FormData()
            formData.append("mypic", cfile)
            formData.append("uid", visitId)
            var xhr = new XMLHttpRequest();
            xhr.open("POST", "data/12_user_avatar_update.php", true)
            xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest")
            xhr.onreadystatechange = function(){
                if(xhr.readyState==4)
                    if(xhr.status==200){
                        var resText=xhr.responseText;
                        findp(currentPage)
                    }
            }
            xhr.send(formData)
            $avatarWindow.hide(500)
        }
    })
    $roleWindow.on("click", function(e){
        var $tar = $(e.target)
        if($tar.is("[data-action=role-cancel]")){
            $(this).hide(500)
        }
        if($tar.is("[data-action=role-ok]")){
            var rid = $(this).find(":radio:checked").val()
            console.log(rid)
            $.get("data/16_user_role_update.php",
                {rid:rid, uid:visitId},
                function(data){
                    $roleWindow.hide(500)
                    alert(data.msg)
                })
        }
    })

    document.ondragenter = document.ondragover = document.ondragleave = document.ondrop = e=>e.preventDefault()
    preview.ondragover = e=>e.preventDefault()
    preview.ondrop = function(e){
        var file = e.dataTransfer.files[0]
        cfile = file
        if(file){
            var img = window.URL.createObjectURL(file)
            preview.innerHTML = `<img src="${img}">`
            $("#photoCover").val(file.name)
        }
    }
    $("#mypic").on("change", function(){
        cfile = this.files[0]
        var img = window.URL.createObjectURL(this.files[0])
        $("#photoCover").val(this.files[0].name)
        preview.innerHTML = `<img src="${img}">`
    })
    //权限管理
    $.get("data/15_role_list.php", function(data){
        var html = ``
        for(var r of data){
            html += `<label><input type="radio" name="role" value="${r.id}">&nbsp;&nbsp;${r.rname}</label>`
        }
        $("#roles").html(html)
    })

    $("#user-kw").keyup(function(e){
        if(e.keyCode==13){
            kw = $(this).val()
            findp(1,kw)
        }
    })
    findp()
})

