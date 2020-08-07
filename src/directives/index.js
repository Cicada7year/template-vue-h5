/*
 * @Description: 自动注册自定义指令
 * @Autor: Popper_Li
 */

const files = require.context('./', true, /^\.\/[\w-_]+\/index\.(js)$/)

const directives = files.keys().map(key => files(key).default)

export default {
  install(Vue) {
    directives.forEach(item => {
      Vue.use(item)
    })
  }
}