// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//加载静态资源
import './assets/css/footer.css'
import './assets/css/header.css'
import './assets/css/banner.css'
import './assets/css/index.css'
import './assets/css/main.css'
import './assets/css/login.css'

import './assets/js/ajax.js'
import './assets/js/jquery-3.3.1.min'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
