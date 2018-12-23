import Vue from 'vue'
// import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// import News from '@/components/News'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', component: HelloWorld },
    // { path: '/news', component: News }
  ]
})
