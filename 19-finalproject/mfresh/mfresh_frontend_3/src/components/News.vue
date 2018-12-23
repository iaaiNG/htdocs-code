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
          <li v-for="(item,index) in pager.data" :key=index>
            <span>{{item.pubTime}}</span>
            <a :href="item.nid">{{item.title}}</a>
          </li>
        </ul>
      </div>
      <!-- 分页导航-->
      <div class="pages">
        <a  class="" @click="getPager(nowPage>1?nowPage-1:1)">上一页</a>
        <a v-for="(i,index) in pager.pageCount" :key=index @click="getPager(i)" :class="pager.pageNum==i?'cur':''">{{i}}</a>
        <a @click="getPager(nowPage<totalPage?nowPage+1:totalPage)">下一页</a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        nowPage: 1,
        totalPage: 0,
        pager: {}
      }
    },
    methods:{
      getPager(i=1){
        this.nowPage = i
        let url = 'http://localhost:3000/news/list/'+i;
        this.$http.get(url).then(function(res){
          this.pager = res.body
          this.totalPage = this.pager.pageCount
        })
      }
    },
    mounted(){
      this.getPager(1)
    },
  }

</script>

