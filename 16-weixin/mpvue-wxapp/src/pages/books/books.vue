<template>
  <div>
    <TopSwiper :tops="tops"></TopSwiper>
    <Card v-for='(book,index) in books' :key=index :book='book'></Card>
    <p class="text-footer" v-if="!more">没有更多数据了呀</p>
  </div>
</template>

<script>
import {request} from '@/utils/utils'
import Card from '@/components/Card'
import TopSwiper from '@/components/TopSwiper'
export default {
  components:{
    Card,
    TopSwiper
  },
  data(){
    return {
      books:[],
      page:0,
      more:true,
      tops:[],
    }
  },
  methods:{
    async getList(init){
      if(init){
        this.page = 0
        this.more = true
      }
      wx.showNavigationBarLoading()
      const books = await request('/weapp/booklist','get',{page:this.page})
      if(books.list.length<6&&this.page>0){
        this.more = false
      }
      if(init){
        this.books = books.list
        wx.stopPullDownRefresh()
      }else{
        this.books = this.books.concat(books.list)
      }
      wx.hideNavigationBarLoading()
      // console.log(books)
    },
    async getTop(){
      const tops = await request('/weapp/top','get')
      this.tops = tops.list
      // console.log(this.tops)
    }
  },
  mounted(){
    this.getList(true)
    this.getTop()
  },
  onPullDownRefresh(){
    this.getList(true)
    this.getTop()
  },
  onReachBottom(){
    if(!this.more){
      return
    }
    this.page = this.page + 1 
    this.getList()
  }
}
</script>

<style>

</style>
