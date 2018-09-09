// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VurResource from 'vue-resource'
import goods from './components/goods/goods'
import seller from './components/seller/seller'
import ratings from './components/ratings/ratings'
import pay from './components/pay/pay'
import './commen/stylus/index.styl'

Vue.use(VueRouter)
Vue.use(VurResource)

Vue.config.productionTip = false

/* eslint-disable no-new */
var routes = [
  {path: '/', redirect: '/goods'},
  {path: '/goods', component: goods},
  {path: '/ratings', component: ratings},
  {path: '/seller', component: seller},
  {path: '/pay', component: pay}
]

var router = new VueRouter({
  linkActiveClass: 'active',
  routes
})
// => 是ES6的箭头语法
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
// router.push('/goods')
Vue.prototype.HOST = '/apiLink'
