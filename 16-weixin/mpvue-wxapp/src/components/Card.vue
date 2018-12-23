<template>
  <a :href="detailUrl">
    <div class="book-card">
      <div class="thumb" @click.stop="preview">
        <img :src="book.image" mode="aspectFit">
      </div>
      <div class="detail">
        <div class="row .text-primary">
          <div class="right">
            {{book.rate}}分<Rate :value="book.rate"></Rate>
          </div>
          <div class="left">
            {{book.title}}
          </div>
        </div>
        <div class="row">
          <div class="right">
            {{book.count}}位左友阅读过
          </div>
          <div class="left">
            作者：{{book.author}}
          </div>
        </div>
        <div class="row">
          <div class="right">
            {{book.user_info.nickName}} 添加
          </div>
          <div class="left">
            出版社：{{book.publisher}}
          </div>
        </div>
      </div>
    </div>
  </a>
</template>
<script>
import Rate from "@/components/Rate";
export default {
  components: {
    Rate
  },
  props: ["book"],
  computed:{
    detailUrl(){
      return '/pages/detail/main?id='+this.book.id
    }
  },
  methods:{
    preview(){
      wx.previewImage({
        current:this.book.image,
        urls:[this.book.image]
      })
    }
  }

};
</script>

<style lang='scss' scoped>
.book-card {
  padding:0 20rpx;
  overflow: hidden;
  // border:1px solid #000;
  font-size: 12px;
  background: #eee;
  margin: 20rpx 20rpx 0;
  .thumb {
    // border:1px solid #000;
    width: 160rpx;
    height: 200rpx;
    float: left;
    margin: 0 auto;
    overflow: hidden;
    img {
      max-width: 100%;
      max-height: 100%;
    }
  }
  .detail {
    margin-left: 180rpx;
    
    .row {
      line-height: 55rpx;
      margin: 10rpx 0;
      .right {
        float: right;
      }
      .left {
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
    }
  }
}
</style>
