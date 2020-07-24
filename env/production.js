/*
 * @Description: 正式环境配置
 * @Date: 2020-06-01 13:37:08
 * @Autor: Popper_Li
 * @LastEditors: Popper_Li
 * @LastEditTime: 2020-06-04 14:42:07
 */
module.exports = {
  // 项目路径
  pulicPath: './',
  /**
   * 默认请求路径
   * @param {String | Object} apiBase
   */
  // apiBase: 'https://xxx.xxx.com/api/',
  // 如果为Object的话axios会按模块化组装。
  apiBase: {
    // key为接口模块前缀名
    cats: {
      // 接口baseUrl
      url: 'https://www.cats.cn/cats'
    },
    dogs: {
      url: 'https://www.dogs.cn/dogs'
    }
  },
  // 是否开启debug
  openVconsole: false,
  // 是否开启临时变量本地存储（方便调试，生产环境不建议开启）
  openTempData2Local: false
}
