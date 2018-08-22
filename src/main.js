// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import App from './components/App.vue'
import routes from './router'

// for iview ui
import iView from 'iview'
// echarts
import echarts from 'echarts'

// for vuex
import state from './store/state'
import mutations from './store/mutations'

Vue.config.productionTip = false

Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(iView)

Vue.prototype.$echarts = echarts

const router = new VueRouter({
  mode: 'history',
  routes: routes
})

const store = new Vuex.Store({
  state,
  mutations
})

router.beforeEach((to, from, next) => {
  if (!store.state.token && !sessionStorage.getItem('state')) {
    if (to.path === '/login') {
      next()
    } else {
      // TODO Request Token
      next({ path: '/login' })
    }
  } else {
    next()
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
