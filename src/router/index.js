import Vue from 'vue'
import VueRouter from 'vue-router'
import pages from './pages'
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [...pages]
})

export default router
