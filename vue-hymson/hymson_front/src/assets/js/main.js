(()=>{
  setInterval(shake,4000);

  //产品与方案的鼠标 hover 动画效果
  var $pro = $('.pro>div')
  for (let each of $pro) {
    $(each).hover(
      () => {
        $(each).find('img').css("margin-top", 0)
        $(each).find('p').css("visibility", 'visible')
        $(each).find('a').css("visibility", 'visible')
        $(each).children().css('background', 'rgba(10,50,90,0.7)')
      },
      () => {
        $(each).find('img').css("margin-top", 140)
        $(each).find('p').css("visibility", 'hidden')
        $(each).find('a').css("visibility", 'hidden')
        $(each).children().css('background', 'none')
      },
    )
  }

  // 计算元素到页面顶部的距离
  function getTotalTop(elem){
    var sum=0
    do{
      sum+=elem.offsetTop
      elem = elem.offsetParent;
    }while(elem)
    return sum+140
  }

  $(window).on("scroll",()=>{
    var items = $("#lift .lift_item")
    var totalTop = getTotalTop($("#f1")[0])
    var show = false
    var scrollTop = document.documentElement.scrollTop  //屏幕滚动距离 ; innerHeight屏幕视口高度

    if(innerHeight/2+scrollTop>=totalTop){
      $("#lift").show()
      show = true
    }else{
      $("#lift").hide()
      show = false
    }
    if(show){
      for (var i=0;i<3;i++){
        var totalTop = getTotalTop($(`#f${i+1}`)[0])
        if(totalTop<=innerHeight/2+scrollTop){
          for(let each of items){
            $(each).attr('class','lift_item')
          }
          $(items[i]).addClass('lift_item_on')
        }
      }
    }
  })
  $("#lift").on("click", ".lift_item", function(){
    var index = parseInt($(this).index())+1
    if(index!=4){
      var totalTop = getTotalTop($(`#f${index}`)[0])
      $("body,html").stop(true).animate({scrollTop:totalTop-280},500)
    }else{
      $("body,html").stop(true).animate({scrollTop:0},500)
    }
  })

  // banner图片轮播效果实现
  var i=1,canShake=true;
  function shake(){
    if(canShake==true){
      canShake=false;
      if(i==5)i=1;
      else i++;

      var txt = [
        '海目星激光智能装备（江苏）有限公司 ',
        '深圳市海目星激光智能装备股份有限公司',
        '广州市海目星激光科技有限公司',
        '海目星（江门）激光智能装备有限公司 ',
        '鞍山海目星科技有限公司'
      ]
      $('.indicator>a.cur').removeClass('cur')
      $('.indicator>a').eq(i-1).addClass('cur')
      $('.bannerTxt>p').html(txt[i-1])

      var arr=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14];
      arr.sort((a,b)=>Math.random()<0.5?1:-1);

      var j=0;
      var timer1 = setInterval(()=>{
        if(j>14){
          clearInterval(timer1)
        }
        else{
          $(`#box>div:eq(${arr[j++]})`).css(
            "backgroundImage",
            `url(images/banner/${i}.jpg)`
          ).addClass("shake");
        }
      },50);
      setTimeout(()=>{
        $("#box>div").removeClass("shake");
        $("#box>img").attr("src",`../assets/images/banner/${i}.jpg`);
        canShake=true;
      },1000);
    }
  }
})()