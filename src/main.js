// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import utils from '../static/js/utils.js'
// 

import $ from 'jquery'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.min'
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(utils) 
/* eslint-disable no-new */
router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
if (to.meta.title) {
  document.title = to.meta.title
}
  next()
})

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
router.afterEach((to,from,next) => {

  window.scrollTo(0,0);

});
