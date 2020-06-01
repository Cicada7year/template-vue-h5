/*
 * @Description: vue webpack项目配置
 * @Date: 2020-06-01 13:06:49
 * @Autor: Popper_Li
 * @LastEditors: Popper_Li
 * @LastEditTime: 2020-06-01 14:40:34
 */

const path = require('path')
const env = require('./env')
const resove = dir => path.join(__dirname, dir)

module.exports = {
  publicPath: env.publicPath,
  /**
   * 开发环境设置
   */
  devServer: {
    // 端口号
    port: 9527,
    // api代理，防止开发阶段联调出现跨域情况
    // 文档地址：https://cli.vuejs.org/zh/config/#devserver-proxy
    proxy: {
      '/api': {
        target: env.apiBase,
        changeOrigin: true,
        pathRewrite: {
          // key为前缀，以此前缀替换value的指定字符
          '^/api': '/api/xxx'
        }
      }
    }
  },
  chainWebpack: config => {
    /**
     * 别名设置
     */
    config.resolve.alias
      .set('@c', resove('src/components'))
      .set('@u', resove('src/utils'))
    /**
     * px2rem设置
     */
    config.module
      .rule('scss')
      .oneOf('vue')
      .use('px2rem-loader')
      .loader('px2rem-loader')
      .before('postcss-loader')
      .options({
        // 75为750px设计稿 350的直接写35就行
        remUnit: 75,
        remPrecision: 8
      })
      .end()
  }
}