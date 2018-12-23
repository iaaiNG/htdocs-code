<template>
  <div class="container">
    <div class="page-title" style="text-align:center" v-if="!userinfo.openId">您当前尚未登录</div>
      <CommentList  v-if="userinfo.openId&&comments.length"  type='user' :comments='comments'></CommentList>
      <div class="page-title" style="text-align:center;margin-bottom:10rpx" v-if='userinfo.openId&&!comments.length'>您的评论为空</div>
      <div v-if="userinfo.openId&&books.length" >
        <div class="page-title">我的图书</div>
        <Card v-for='book in books' :key='book.id' :book='book'></Card>
      </div>
      <div class="page-title" style="text-align:center;margin-bottom:10rpx" v-if='userinfo.openId&&!books.length'>您的图书为空</div>
  </div>
</template>
<script>
import {request} from '@/utils/utils'
import CommentList from '@/components/CommentList'
import Card from '@/components/Card'
export default {
  data(){
    return {
      comments:[],
      userinfo:{},
      books:[]
    }
  },
  components:{
    CommentList,
    Card
  },
  methods:{
    init(){
      wx.showNavigationBarLoading()
      this.getComments()
      this.getBooks()
      wx.hideNavigationBarLoading()
    },
    async getComments(){
      const comments = await request('/weapp/commentlist', 'get', {openid:this.userinfo.openId})
      this.comments = comments.list
    },
    async getBooks(){
      const books = await request('/weapp/booklist','get', {
        openid:this.userinfo.openId
      })
      this.books = books.list
    }
  },
  onPullDownRefresh(){
    this.init()
    wx.stopPullDownRefresh()
  },
  onShow(){
    if(!this.userinfo.openId){
      let userinfo = wx.getStorageSync('userinfo')
      if(userinfo){
        this.userinfo = userinfo
        this.init()
      }
    }
    
  }
};

</script>

<style scoped>
.page-title{
  margin: 20rpx 20rpx -20rpx;
  padding:10rpx 20rpx ;
}
</style>