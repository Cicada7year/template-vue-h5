/*
 * @Description: vuex入口
 * @Autor: Popper_Li
 */
import Vue from 'vue'
import Vuex from 'vuex'
import getters from "./getters";

Vue.use(Vuex)

// 自动导入./modules里的包，这样的话就不用手动一个个引入了
// https://webpack.js.org/guides/dependency-management/#requirecontext
const modulesFiles = require.context('./modules', true, /\.js$/)
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  // set './app.js' => 'app'
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = modulesFiles(modulePath)
  modules[moduleName] = value.default
  return modules
}, {})

export default new Vuex.Store({ getters, modules })
