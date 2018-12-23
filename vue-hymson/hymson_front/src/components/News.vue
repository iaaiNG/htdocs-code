<template>
  <div>
    <div class="main_body">
      <!--面包屑导航-->
      <div class="breadcrumb">
        <div class="news_img">
        </div>
        <div class="subcontainer">
          <a href="">首页</a>&nbsp;&nbsp;&gt;&nbsp;&nbsp;<a href="">新闻动态</a>
        </div>
      </div>

      <!--news内容-->
      <div id="news">

        <div v-for="(each,i) in list.data" :key=i class="news">
          <div class="news_content">
            <div>
              <p>发布时间：</p>
              <p class="pubDate">{{each.pubTime}}</p>
            </div>
            <div>
              <h3> {{each.title}}</h3>
              <p>{{each.subTitle}}</p>
              <div>
                <span> > </span><a href="#">查看详情</a>
              </div>
            </div>
          </div>
          <div class="new_pic"><img :src="require('../assets/'+each.newPic)" alt=""></div>
        </div>

      </div>
    </div>

    <!--分页条-->
    <div class="pages">
      <ul>
        <li @click="getList(nowPage>1?nowPage-1:1)">上一页</li>
        <li v-for="(each,i) in totalPage" :key=i @click="getList(i+1)" :class="nowPage==i+1?'cur':''">{{i+1}}</li>
        <li @click="getList(nowPage<totalPage?nowPage+1:totalPage)">下一页</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
    name: "News",
    data() {
        return {
            list: [],
            nowPage: 1,
            totalPage: 5,
        };
    },
    methods: {
        getList(i = 1) {
            let url = "http://103.80.28.227:3005/news/list/" + i;
            this.$http.get(url).then(function(res) {
                this.list = res.body;
                this.nowPage = parseInt(this.list.pno)
                this.totalPage = this.list.pageCount
                // console.log(this.list);
            });
        }
    },
    mounted() {
        this.getList(1);
    }
};
</script>

