/*
 * @Description: 用户相关
 * @Date: 2020-06-08 11:05:38
 * @Autor: Popper_Li
 * @LastEditors: Popper_Li
 * @LastEditTime: 2020-06-08 11:45:39
 */

// 模拟login请求
const login = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        data: {
          nickName: '蝉七年',
          name: 'Popper Li',
          age: 26,
          email: '519318459@qq.com'
        }
      })
    }, 1500);
  })
}

export default {
  // 开启命名空间
  // https://vuex.vuejs.org/zh/guide/modules.html#%E5%91%BD%E5%90%8D%E7%A9%BA%E9%97%B4
  namespaced: true,
  // 存在内存中的值
  state: { userInfo: {} },
  // 更改内存值的同步方法
  mutations: {
    SET_USER_INFO: (state, options) => {
      state.userInfo = { ...state.userInfo, ...options }
    }
  },
  // 与mutation通讯，ui层写入内存数据的接口，可异步操作 可以放各种api
  // 访问路径 dispatch('app/login')
  actions: {
    login: async ({ commit }) => {
      const { data } = await login()
      commit('SET_USER_INFO', data)
    }
  }
}