if(typeof jQuery!=="function"){
  throw new Error("dong-ui依赖于jQuery，必须先引入jQuery");
}else{
  /*************dropdown*****************/
  $(()=>{//DOM加载后才绑定事件
    $("[data-trigger=dropdown]").parent()
      .hover(function(){
        $(this).children().last()
                .toggleClass("in")
    });
  })
  /*************accordion*****************/
  $(()=>{
    $("[data-trigger=accordion]")
      .on(
        "click",
        ":even",
        e=>
        $(e.target)
          .next().addClass("in")
          .siblings(":nth-child(2n)")
            .removeClass("in")
      );
  })
}