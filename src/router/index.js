import Vue from 'vue'
import Router from 'vue-router'
import pay from './../components/pay/pay'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/pay',
      name: 'pay',
      component: pay
    }
  ]
})
