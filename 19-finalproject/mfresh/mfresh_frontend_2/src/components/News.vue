<template>
  <div>
    <!--面包屑导航-->
    <div class="breadcrumb">
      <div class="container">
        <h2>
          <a href="">首页</a>&gt;<a href="">公司动态</a>
        </h2>
      </div>
    </div>
    <!--页面主体-->
    <div class="main container">
      <div class="news">
        <ul>
          <li v-for="item in pager.data">
            <span>{{item.pubTime}}</span>
            <a :href="item.nid">{{item.title}}</a>
          </li>
        </ul>
      </div>
      <!-- 分页导航-->
      <div class="pages">
        <a href="" class="">上一页</a>
        <a v-for="i in pager.pageCount" @click="getPager(i)" :class="pager.pageNum==i?'cur':''">{{i}}</a>
        <a href="">下一页</a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        pager: {}
      }
    },
    // methods:{
    //   getPager(i=1){
    //     let url = 'http://localhost:3000/news/list/'+i;
    //     this.$http.get(url).then(function(res){
    //       console.log(res.body)
    //       this.pager = res.body
    //     })
    //   }
    // },
    // mounted(){
    //   this.getPager(1)
    // },
  }

</script>

