$(()=>{
  function getProductDetail() {
    var pid = location.search.split("=")[1];
    var price = 0
    ajax('get','data/products/details.php?pid='+pid)
      .then(data=>{
        // console.log(data)
        price = data.price
        var subDetail = data.detail2.split("&")
        var lis = ''
        for(var each of subDetail){
          lis += `<li>${each}</li>`
        }
        var html = `
            <div>
      <img src="${data.pic}" alt="">
      <div id="mask"></div>
      <div id="superMask"></div>
    </div>
    <div id="largeDiv" style="background-image: url('${data.pic}');
background-size:1200px 800px "></div>
    <div>
      <h3>${data.title}</h3>
      <p>${data.detail1}</p>
      <h4>设备特点：</h4>
      <ul>
        ${lis}
      </ul>
      <p class="price">￥${data.price}</p>
      <a href="#"  id="buy"><span> > </span>立即购买</a>
    </div>`
        $("#product_detail").html(html)

        var $superMask = $("#superMask")
        var $mask = $("#mask")
        var $largeDiv = $("#largeDiv")
        $superMask.mouseover(function(){
          $mask.show()
          $largeDiv.show()
        })
        $superMask.mouseout(function(){
          $mask.hide()
          $largeDiv.hide()
        })
        const MSIZE = 200, SMWIDTH=600, SMHEIGHT=400
        var width = SMWIDTH-MSIZE
        var height = SMHEIGHT-MSIZE
        $superMask.mousemove(function(e){
          var left = e.offsetX - MSIZE/2
          var top = e.offsetY - MSIZE/2
          if(left<0) left = 0
          else if(left>width) left = width
          if(top<0) top = 0
          else if(top>height) top = 200
          $mask.css("left",left)
          $mask.css("top",top)
          $largeDiv[0].style.backgroundPosition= left/width*100+"%"+" "+top/height*100+"%"
        })

        $("#buy").click(function(e){
          e.preventDefault()
          if(!sessionStorage.uname){
            if(confirm("您当前尚未登录，前去登录？")){
              location = 'login.html'
            }
          }else{
            alert("支付成功，支付宝成功扣费："+price+"元")
          }
        })
      })
  }
  getProductDetail()
})