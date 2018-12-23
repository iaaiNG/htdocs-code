<template>
  <div class="bookinfo">
    <div class="thumb">
      <img class="back" :src="info.image" mode='aspectFill' alt="">
      <img class="img" :src="info.image" mode='aspectFit' alt="">
      <div class="info">
        <div class="title">{{info.title}}</div>
        <div class="author">{{info.author}}</div>
      </div>
    </div>
    <div class="detail">
      <img :src="userinfo.image" class="avatar" mode='aspectFit'>
      {{userinfo.name}}
      <div class="right text-primary">
        {{info.rate}}分<Rate :value="info.rate"></Rate>
      </div>
    </div>
    <div class="detail">
      {{info.publisher}}
      <div class="right">
        {{info.price}}
      </div>
    </div>
    <div class="tags">
      <div class="badge" :key=tag v-for="tag in info.tags">{{tag}}</div>
    </div>
    <div class="summary">
      <p v-for='sum in info.summary' :key='sum'>{{sum}}</p>
    </div>
  </div>
</template>                       
 <script>
import Rate from '@/components/Rate'
export default {
  components:{
    Rate,
  },
  props: ["info"],
  computed:{
    userinfo(){
      return this.info.user_info || {}
    }
  },

};
</script>

<style lang='scss'>
$mainColor:#DD5145;
.bookinfo {
  padding:0 20rpx;
  .badge{
    display: inline-block;
    margin: 5px;
    padding: 3px;
    border-radius: 5px;
    border:1px solid $mainColor;
    color: $mainColor;
  }
  .summary{
    padding: 0 15px;
    margin-top:10px;
    background: #eee;
    p{
      text-indent: 2em;
      font-size: 14px;
      text-align:justify 
    }
  }
  font-size: 14px;
  .right{
    float: right;
  }
  .detail{
    padding: 5px 10px;
    .avatar{
      width: 25px;
      height: 25px;
      border-radius: 50px;
      vertical-align: middle
    }
  }
  .thumb {
    box-sizing: border-box;
    width: 100%;
    height: 470rpx;
    overflow: hidden;
    position: relative;
    .back { 
      filter: blur(20rpx);
      width: 100%;
    }
    .img {
      position: absolute;
      width: 100%;
      height: 300rpx;
      top: 30rpx;
      left: 0;
    }
    .info {
      color: #fff;
      position: absolute;
      width: 100%;
      top: 350rpx;
      left: 0;
      text-align: center;
      .title {
        font-size: 20px;
      }
      .author {
        font-size: 14px;
      }
    }
  }
}
</style>
 