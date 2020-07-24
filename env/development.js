/*
 * @Description: 开发环境配置
 * @Date: 2020-06-01 13:36:29
 * @Autor: Popper_Li
 * @LastEditors: Popper_Li
 * @LastEditTime: 2020-06-04 17:49:03
 */

module.exports = {
  // 项目路径
  pulicPath: '',
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
      url: 'https://www.cats.cn/cats',
      // 超时时间，非必填，默认15s
      timeout: 15000,
      // 接口代理，应对开发阶段联调的跨域情况，仅支持dev模式。
      proxy: {
        // key为前缀
        '/api': {
          // 是否开启更改
          changeOrigin: true,
          // 重写路径
          pathRewrite: {
            // key为前缀，以此前缀替换value的指定字符,如果有多字段请自行替换
            '^/api': '/api/xxx'
          }
        }
      }
    },
    dogs: {
      url: 'https://www.dogs.cn/dogs',
      proxy: false
    }
  },
  // 是否开启debug
  openVconsole: true,
  // 是否开启临时变量本地存储（方便调试，生产环境不建议开启）
  openTempData2Local: true
}
