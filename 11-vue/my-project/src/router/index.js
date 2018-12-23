import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import HelloWorld from '@/components/HelloWorld'
import MyHeader from '@/components/MyHeader'
import MyList from '@/components/MyList'
import Login from '@/components/Login'
import ProductList from '@/components/ProductList'

Vue.use(Router)
Vue.use(VueResource)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/header',
      name: 'MyHeader',
      component: MyHeader
    },
    {
      path:'/list',
      name: 'MyList',
      component: MyList
    },
    {
      path:'/login',
      name: 'Login',
      component: Login
    },
    {
      path:'/productlist',
      name: 'ProductList',
      component: ProductList
    },
  ]
})
