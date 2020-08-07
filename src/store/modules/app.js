/*
 * @Description: 项目设置
 * @Autor: Popper_Li
 */
import _setting from "@const/setting";

export default {
  // 开启命名空间
  // https://vuex.vuejs.org/zh/guide/modules.html#%E5%91%BD%E5%90%8D%E7%A9%BA%E9%97%B4
  namespaced: true,
  // 存在内存中的值
  state: { setting: Object.assign({}, _setting) },
  // 更改内存值的同步方法
  mutations: {
    SET_SETTING: (state, options) => {
      state.setting = { ...state.setting, ...options }
    }
  },
  // 与mutation通讯，ui层写入内存数据的接口，可异步操作 可以放各种api
  // 访问路径 dispatch('app/setSetting')
  actions: {
    setSetting: ({ commit }, options) => {
      commit('SET_SETTING', options)
    },
    resetSetting: ({ commit }) => {
      commit('SET_SETTING', Object.assign({}, _setting))
    }
  }
}