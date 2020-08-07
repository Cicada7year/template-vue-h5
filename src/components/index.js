/*
 * @Description: 自动注册组件
 * @Autor: Popper_Li
 */

const files = require.context('./', true, /^\.\/[\w-_]+\/index\.(js|vue)$/)

const components = files.keys().map(key => files(key).default)

export default {
  install(Vue) {
    components.forEach(item => {
      Vue.component(item.name, item)
    })
  }
}