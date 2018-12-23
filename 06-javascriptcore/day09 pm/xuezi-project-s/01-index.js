//加载header
(()=>{
  ajax("get","03-header.html","","text")
    .then(html=>
    document.getElementById("header").innerHTML=html
  )
})();
//加载楼层
(()=>{
  ajax("get","data/01-index/floors.php","")
    .then(output=>{
    //根据规定的模板,动态生成f1的HTML代码片段
    var html="";
    var f1=output.f1;
    for(var i=0;i<f1.length;i++){
      var p=f1[i];
      html+=i<2?`<div>
          <div class="desc">
            <p class="name">${p.title}</p>
            <p class="details">${p.details}</p>
            <p class="price">¥${
              parseFloat(p.price).toFixed(2)
            }</p>
            <a href="${p.href}" class="view">查看详情</a>
          </div>
          <img src="${p.pic}">
        </div>`:
        i==2?`<div>
          <div class="desc">
            <p class="name">${p.title}</p>
            <p class="price">¥${
                parseFloat(p.price).toFixed(2)
            }</p>
            <a href="${p.href}" class="view">查看详情</a>
          </div>
          <img src="${p.pic}" title="${p.details}">
        </div>`:
        `<div class="product">
          <img src="${p.pic}" title="${p.details}">
          <p class="name">${p.title}</p>
          <p class="price">¥${
            parseFloat(p.price).toFixed(2)
          }</p>
          <a href="${p.href}">查看详情</a>
        </div>`
    }
    document.getElementById("f1-content")
            .innerHTML=html;

    var html="";
    var f2=output.f2;
    for(var i=0;i<f2.length;i++){
      var p=f2[i];
      html+=i<2?`<div>
          <div class="desc">
            <p class="name">${p.title}</p>
            <p class="details">${p.details}</p>
            <p class="price">¥${
              parseFloat(p.price).toFixed(2)
            }</p>
            <a href="${p.href}" class="view">查看详情</a>
          </div>
          <img src="${p.pic}">
        </div>`:
        i==2?`<div>
          <div class="desc">
            <p class="name">${p.title}</p>
            <p class="price">¥${
                parseFloat(p.price).toFixed(2)
            }</p>
            <a href="${p.href}" class="view">查看详情</a>
          </div>
          <img src="${p.pic}" title="${p.details}">
        </div>`:
        `<div class="product">
          <img src="${p.pic}" title="${p.details}">
          <p class="name">${p.title}</p>
          <p class="price">¥${
            parseFloat(p.price).toFixed(2)
          }</p>
          <a href="${p.href}">查看详情</a>
        </div>`
    }
    document.getElementById("f2-content")
            .innerHTML=html;

    var html="";
    var f3=output.f3;
    for(var i=0;i<f3.length;i++){
      var p=f3[i];
      html+=i<2?`<div>
          <div class="desc">
            <p class="name">${p.title}</p>
            <p class="details">${p.details}</p>
            <p class="price">¥${
              parseFloat(p.price).toFixed(2)
            }</p>
            <a href="${p.href}" class="view">查看详情</a>
          </div>
          <img src="${p.pic}">
        </div>`:
        i==2?`<div>
          <div class="desc">
            <p class="name">${p.title}</p>
            <p class="price">¥${
                parseFloat(p.price).toFixed(2)
            }</p>
            <a href="${p.href}" class="view">查看详情</a>
          </div>
          <img src="${p.pic}" title="${p.details}">
        </div>`:
        `<div class="product">
          <img src="${p.pic}" title="${p.details}">
          <p class="name">${p.title}</p>
          <p class="price">¥${
            parseFloat(p.price).toFixed(2)
          }</p>
          <a href="${p.href}">查看详情</a>
        </div>`
    }
    document.getElementById("f3-content")
            .innerHTML=html;
    
  })
})();
//加载广告轮播
(()=>{
  ajax("get","data/01-index/banners.php","")
    .then(data=>{
    const LIWIDTH=960;
    var htmlImgs="";//保存图片li的HTML片段
    var htmlIdxs="";//保存导航圆点的li的html片段
    //for(var i=0;i<data.length;i++){
      //var p=data[i];
    for(var p of data){
      htmlImgs+=`<li>
              <a href="${p.href}" title="${p.title}">
                <img src="${p.img}">
              </a>
            </li> `;
      htmlIdxs+="<li></li>";
    }
    var bannerImg=
      document.getElementById("banner-img");
    bannerImg.style.width=
      LIWIDTH*data.length+"px";
    bannerImg.innerHTML=htmlImgs;
    document.getElementById("indicators")
            .innerHTML=htmlIdxs;
  })
})();