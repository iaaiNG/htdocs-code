/**登录单击按钮事件监听**/
$('#bt-login').click(function () {
  var data = $('#form-login').serialize();
  $.ajax({
    type: 'POST',
    url: 'data/user/login.php',
    data: data,
    success: function (result) {
      if (result.code === 200) {              //登录成功
        sessionStorage.uname = result.uname;
        sessionStorage.uid = result.uid;
        alert("登录成功，将自动跳转到首页...")
        setTimeout(()=>{
          location.href = 'index.html';
        },1500)
      } else {       //登录失败
        $("#errMsg").css("visibility", "visible")
        var timer = setTimeout(()=>{
          $("#errMsg").css("visibility", "hidden")
          timer = null
        },1000)
      }
    }
  });
});