// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import App from './components/App'
import routes from './router'

// for iview ui
import iView from 'iview'
import 'iview/dist/styles/iview.css'

// for vuex
import state from './store/state'
import mutations from './store/mutations'

Vue.config.productionTip = false

Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(iView)

const router = new VueRouter({
  routes: routes
})

const store = new Vuex.Store({
  state,
  mutations
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
