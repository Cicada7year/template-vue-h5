/*
 * @Description: 
 * @Date: 2020-06-01 14:39:38
 * @Autor: Popper_Li
 * @LastEditors: Popper_Li
 * @LastEditTime: 2020-06-08 11:56:34
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'lib-flexible'
import '@/assets/scss/common/_reset.scss'
import Env from '../env'
Vue.config.productionTip = false

/* eslint-disable no-new */
if (Env.openVconsole) {
  const VConsole = require('vconsole')
  new VConsole()
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
