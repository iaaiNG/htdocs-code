$(() => {
  var nowPage,pageCount;
  var kw = location.search.split("=")[1] || '';
  getProduct()

  function getProduct(pno=1){
    nowPage = pno
    ajax("get", "data/products/list.php?pno="+pno+"&kw="+kw)
    .then((data)=>{
      // console.log(data)
      pageCount = data.pageCount
      var html = ''
      for(var each of data.data){
        html += `
<div class="product container">
  <div><img src="${each.pic}" alt=""></div>
  <div>
    <h3>${each.title}</h3>
    <p>${each.detail1}</p>
    <a href="product_detail.html?pid=${each.pid}"><span> > </span>查看详情</a>
  </div>
</div>`
      }
      $("#products").html(html)

      html = '<li>上一页</li>'
      for(var i=0;i<data.pageCount;i++){
        html += `<li class="${nowPage==i+1?'cur':''}">${i+1}</li>`
      }
      html += '<li>下一页</li>'
      $('.pages>ul').html(html)
    })
  }

  $('.pages>ul').on('click','li',function(){
    var text = $(this).html()
    if(!isNaN(text)&&nowPage!=parseInt(text)){
      getProduct(text)
    }else if(text=="上一页"&&nowPage>1){
      getProduct(nowPage-1)
    }else if(text=="下一页"&&nowPage<pageCount){
      getProduct(nowPage-0+1)
    }
  })
})