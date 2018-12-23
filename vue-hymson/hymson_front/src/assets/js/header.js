$(() => {
  if(sessionStorage.uname){
    $("#getUname").html("欢迎："+sessionStorage.uname+'&nbsp&nbsp<a href="#">[ 安全退出 ]</a>')
    $("#getUname>a").click(()=>{
      sessionStorage.removeItem('uname')
      sessionStorage.removeItem('uid')
      $("#getUname").html('<router-link to="/login">登录</router-link> | <a href="#">注册</a>')
    })
  }

  var $list = $('#nav>li>ul')
  $list.parent().hover(
    e => {
      $(e.target).find('ul').addClass('showList')
    },
    () => {
      $list.removeClass('showList')
    }
  )

})