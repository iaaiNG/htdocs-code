<template>
  <div>
    <BookInfo :info="info"></BookInfo>
    <CommentList :comments='comments'></CommentList>
    <div class="comment" v-if='showAdd'>
      <textarea class="textarea" :maxlength='100' v-model='comment' placeholder="请输入图书短评..."></textarea>
      <div class="location">
        地理位置：
        <switch color='#DD5145' :check='location' @change='getGeo'></switch>
        <span >{{location}}</span>
      </div>
      <div class="phone">
        手机型号：
        <switch color='#DD5145' :check='phone' @change='getPhone'></switch>
        <span >{{phone}}</span>
      </div>
      <button class="btn" @click="addComment">评论</button>
    </div>
    <div v-else class="text-footer">未登录或者已经参与过评论啦</div>
    <button style="margin:0 20rpx 20rpx" open-type='share' class="btn">转发给好友</button>
  </div>
</template>
<script>
import { request, showModal } from "@/utils/utils";
import BookInfo from "@/components/BookInfo";
import CommentList from '@/components/CommentList';
export default {
  components: {
    BookInfo,
    CommentList
  },
  data() {
    return {
      comments:[],
      userinfo:{},
      bookid: "",
      info: {},
      comment: "",
      location: "",
      phone: ""
    };
  },
  computed:{
    showAdd(){
      if(!this.userinfo.openId){
        return false
      }
      if(this.comments.filter(v=>v.openid == this.userinfo.openId).length){
        return false
      }
      return true
    }
  },
  methods: {
    async getComments(){
      const comments = await request('/weapp/commentlist','get',{bookid:this.bookid})
      this.comments = comments.list || []
      // console.log(this.comments)
    },
    async addComment(){
      if(!this.comment){
        return
      }
      const data = {
        openid:this.userinfo.openId,
        comment:this.comment,
        phone:this.phone,
        location:this.location,
        bookid:this.bookid,
      }
      try{
        await request('/weapp/addcomment','post',data)
        this.comment = ''
        this.getComments()
      }catch(e){
        // showModal('失败',e.msg)
      }
      console.log(data)
    },
    async getDetail() {
      const info = await request("/weapp/bookdetail", "get", {
        id: this.bookid
      });
      wx.setNavigationBarTitle({
        title: info.title
      });
      this.info = info;
      // console.log(info)
    },
    getPhone(e) {
      if (e.target.value) {
        const phoneInfo = wx.getSystemInfoSync();
        this.phone = phoneInfo.model;
        // console.log(phoneInfo);
      } else {
        this.phone = "";
      }
    },
    getGeo(e) {
      const ak = "UrTvE2vjLnVr37EKeWslHWD3pCZ73xr5";
      let url = "http://api.map.baidu.com/geocoder/v2/";
      if (e.target.value) {
        wx.getLocation({
          success: geo => {
            // console.log(geo)
            wx.request({
              url,
              data: {
                ak,
                location: `${geo.latitude},${geo.longitude}`,
                output: "json"
              },
              success: res => {
                // console.log(res.data.result.addressComponent.city);
                if (res.data.status == 0) {
                  this.location = res.data.result.addressComponent.city;
                } else {
                  this.location = "未知地点";
                }
              }
            });
          }
        });
      } else {
        this.location = "";
      }
    }
  },
  mounted() {
    this.bookid = this.$root.$mp.query.id;
    this.getDetail();
    this.getComments()
    const userinfo = wx.getStorageSync('userinfo')
    if(userinfo){
      this.userinfo = userinfo
    }
  },
  onShow(){
    this.phone = "";
    this.location = "";
  }
};
</script>

<style lang='scss' scoped>
.comment {
  box-sizing: border-box;
  width: 750rpx;
  padding: 10rpx 20rpx;
  font-size: 12px;
  .btn{
    width: 100%;
  }
  .textarea {
    box-sizing: border-box;
    width: 100%;
    height: 150rpx;
    background: #eee;
    padding: 5px;
  }
  .location {
    float: left;
    padding: 5px 10px;
    switch {
      zoom: 0.6;
      position: relative;
      bottom:10rpx
    }
    span{
      color:#DD5145
    }
  }
  .phone {
    float: left;
    padding: 5px 10px;
    switch {
      zoom: 0.6;
      position: relative;
      bottom:10rpx
    }
    span{
      color:#DD5145;
       
    }
  }
}
</style>
