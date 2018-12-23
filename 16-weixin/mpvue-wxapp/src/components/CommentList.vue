<template>
  <div class="comment-list">
    <div class="page-title" v-if="comments.length">
      评论
    </div>
    <div @click="handleClick(comment)" class="comment" v-for="comment in comments" :key=comment.id>
      <div class="user">
        <div class="inline">
          <img :src="comment.image" class="avatar" mode='aspectFit' alt="">
          {{comment.title}}
        </div>
        <div class="right">
          {{comment.location||'未知地点'}}
          <span>--</span>
          {{comment.phone||'未知型号'}}
        </div>
      </div>
      <div class="content">
        {{comment.comment}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["comments",'type'],
  updated() {
    if (this.comments) {
      console.log(this.comments);
    }
  },
  methods:{
    handleClick(item){
      if(this.type === 'user'){
        wx.navigateTo({
          url:'/pages/detail/main?id='+item.bookid
        })
      }
    }
  }
};
</script>

<style lang='scss'>
.comment-list {
  margin: 10rpx 20rpx 0;
  padding: 10rpx 20rpx;
  background: #eee;
  font-size: 14px;
  .right {
    float: right;
  }
  .comment {
    box-sizing: border-box;
    width: 100%;
    background: #fff;
    margin-bottom: 10px;
    padding: 5px 10px;
    .content {
      margin: 10rpx 0;
      font-size: 12px;
    }
    .user {
      font-size: 12px;
      .inline {
        display: inline-block;
      }
      .avatar {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        vertical-align: middle;
      }
    }
  }
}
</style>
