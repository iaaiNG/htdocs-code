$(
    $.ajax({
        url:"data/07_product_add2.php",
        type:"get",
        success(data){
            var html = `<option value=-1>--请选择--</option>`
            console.log(data)
            $.each(data,function(i,elem){
                html += `<option value=${i}>${elem[0]}</option>`
            })
            $("#catergory").html(html)
        },
        error(){alert("出错啦")}
    })
)

$("#form-product").submit(function(e){
    e.preventDefault()
    $.ajax({
        url:"data/07_product_add.php",
        type:"post",
        data:$("form").serialize()+'&cuid=1',
        success(data){alert(data.msg)},
        error(){alert("出错啦")}
    })
})