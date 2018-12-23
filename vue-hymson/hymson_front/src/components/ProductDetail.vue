<template>
  <div class="main_body">
    <!--面包屑导航-->
    <div class="breadcrumb">
      <div class="detail_img">
      </div>
      <div class="container">
        <a href="">首页</a>&nbsp;&nbsp;&gt;&nbsp;&nbsp;
        <a href="">产品与服务</a>&nbsp;&nbsp;&gt;&nbsp;&nbsp;
        <a href="">全自动保持架组装机</a>
      </div>
    </div>

    <!--product detail内容-->
    <div id="product_detail" class="product container">
      <div>
        <img :src='imgUrl'>
        <div id="mask"></div>
        <div id="superMask"></div>
      </div>
      <div id="largeDiv" :style="'background-image: url('+imgUrl+');background-size:1200px 800px'"></div>
      <div>
        <h3>{{detail.title}}</h3>
        <p>{{detail.detail1}}</p>
        <h4>设备特点：</h4>
        <ul>
          <li v-for="(each, i) in moreDetail" :key=i>{{each}}</li>
        </ul>
        <p class="price">￥{{detail.price}}</p>
        <a href="#" id="buy"><span> > </span>立即购买</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "ProductDetail",
    data(){
      return {
        detail:[],
        imgUrl: '',
        moreDetail:[]
      }
    },
    methods: {
        getList() {
            let url = "http://103.80.28.227:3005/products/detail/" + this.$route.params.pid;
            this.$http.get(url).then(function(res) {
                this.detail = res.body;
                this.imgUrl = require('../assets/'+this.detail.pic)
                this.moreDetail = this.detail.detail2.split("&")
            });
        }
    },
    mounted() {
        this.getList();
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

        $("#buy").click((e)=>{
          e.preventDefault()
          if(!sessionStorage.uname){
            if(confirm("您当前尚未登录，前去登录？")){
              this.$router.push('/login')
              
            }
          }else{
            alert("支付成功，支付宝成功扣费："+this.detail.price+"元")
          }
        })

    }
};
</script>

