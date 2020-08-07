/*
 * @Description: 总入口
 * @Autor: Popper_Li
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Env from '@Env'
import Directives from '@/directives'
import Components from '@c'
import '@/assets/scss/common/_reset.scss'
import 'lib-flexible'

Vue.config.productionTip = false

// 自动注册组件
Vue.use(Components)
// 自动注册指令
Vue.use(Directives)

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
