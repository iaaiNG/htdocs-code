$(() => {
  var nowPage,pageCount
  getProduct()


  function getProduct(pno=1){
    nowPage = pno
    ajax("get", "data/news/news_select.php?pageNum="+pno)
      .then((data)=>{
        // console.log(data.data)
        pageCount = data.pageCount
        var html = ''
        for(var each of data.data){
          html += `
<div class="news">
  <div class="news_content">
    <div>
      <p>发布时间：</p>
      <p class="pubDate">${each.pubTime}</p>
    </div>
    <div>
      <h3>${each.title}</h3>
      <p>${each.subTitle}</p>
      <div>
        <span> > </span><a href="#">查看详情</a>
      </div>
    </div>
  </div>
  <div class="new_pic"><img src="${each.newPic}" alt=""></div>
</div>
      `
        }
        $("#news").html(html)

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