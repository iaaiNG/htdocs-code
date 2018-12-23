$("#btn1").on("click", function(){
    $.ajax({
        url : "data/18_carousel_upload.php",
        type : "post",
        data : new FormData($("#form-product")[0]),
        contentType : false,
        processData : false,
        success(){
            alert("上传成功")
        }
    })
})