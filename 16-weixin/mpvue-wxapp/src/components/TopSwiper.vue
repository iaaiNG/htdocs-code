<template>
  <div>
    <swiper class="swiper" indicator-active-color="white" indicator-dots=true indicator-color="#DD5145" circular=true autoplay=true interval="3000" duration="500">
      <div v-for="(top, ind) in imgUrls" :key='ind'>
        <swiper-item>
          <img @click="bookDetail(img)" v-for="img in top" :key="img.id" class="slide-image" mode='aspectFit' :src="img.image" />
        </swiper-item>
      </div>
    </swiper>
  </div>
</template>

<script>
import array from "lodash/array";
export default {
  props: ["tops"],

  computed: {
    imgUrls() {
      return array.chunk(this.tops, 3);
    }
  },

  methods:{
    bookDetail(item){
      wx.navigateTo({
        url:'/pages/detail/main?id='+item.id
      })
    }
  }
};
</script>

<style lang='scss'>
.swiper {
  margin-top: 15rpx;
  padding: 0 30rpx;
  background: #f7f7f7;
  .slide-image {
    height: 100%;
    width: 33%;
  }
}
</style>

