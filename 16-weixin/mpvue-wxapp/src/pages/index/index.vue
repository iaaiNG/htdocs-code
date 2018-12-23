<template>
  <div class="container">
    <div class="userinfo">
      <img :src="userinfo.avatarUrl" alt="">
      <p>{{userinfo.nickName}}</p>
    </div>
    <YearProgress></YearProgress>
    <button v-if='userinfo.openId' class="btn" @click="scanBook">添加图书</button>
    <button class="btn" v-show="!userinfo.openId" open-type="getUserInfo" lang="zh_CN" @getuserinfo="doLogin">点击登录</button>
  </div>
</template>

<script>
import qcloud from "wafer2-client-sdk";
import config from "@/config.js";
import { showSuccess, request, showModal } from "@/utils/utils";
import YearProgress from "@/components/YearProgress";
export default {
  components: {
    YearProgress
  },
  data() {
    return {
      isLogin: false,
      userinfo: {
        avatarUrl: "../../../static/img/unlogin.png",
        nickName: "点击登录"
      }
    };
  },
  methods: {
    async addBook(isbn){
      const res = await request('/weapp/addbook','post',{
        isbn,
        openid:this.userinfo.openId
      })
      console.log(res)
      showModal('添加成功',`${res.title}`)
    },
    scanBook() {
      wx.scanCode({
        success: res => {
          this.addBook(res.result)
        }
      });
    },
    doLogin: function(e) {
      if (!this.isLogin) {
        var that = this;
        qcloud.setLoginUrl(config.loginUrl);
        qcloud.login({
          success: function(userinfo) {
            qcloud.request({
              url: config.userUrl,
              login: true,
              success(userRes) {
                console.log("登录成功", userRes.data.data);
                wx.setStorageSync("userinfo", userRes.data.data);
                showSuccess("登录成功");
                that.userinfo = userRes.data.data;
              }
            });
          },
          fail: function(err) {
            console.log("登录失败", err);
          }
        });
      }
    }
  },
  onShow() {
    let userinfo = wx.getStorageSync("userinfo");
    if (userinfo) {
      this.userinfo = userinfo;
    }
  }
};
</script>

<style lang='scss'>
.container {
  padding: 0 30rpx;
  .userinfo {
    text-align: center;
    margin-top: 100rpx;
    img {
      width: 180rpx;
      height: 180rpx;
      border-radius: 50%;
      margin: 20rpx;
    }
  }
}
.hidden {
  display: none;
}
</style>
 