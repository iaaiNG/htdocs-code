import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
// import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/Index'
import About from '@/components/About'
import Products from '@/components/Products'
import News from '@/components/News'
import Login from '@/components/Login'
import ProductDetail from '@/components/ProductDetail'

Vue.use(Router)
Vue.use(VueResource)

export default new Router({
  routes: [
    { path: '/', component: Index },
    { path: '/index', component: Index },
    { path: '/about', component: About },
    { path: '/news', component: News },
    { path: '/products', component: Products },
    { path: '/detail/:pid', component: ProductDetail },
    { path: '/login', component: Login }
  ]
})
