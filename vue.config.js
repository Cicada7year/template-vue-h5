/*
 * @Description: vue webpack项目配置
 * @Date: 2020-06-01 13:06:49
 * @Autor: Popper_Li
 * @LastEditors: Popper_Li
 * @LastEditTime: 2020-06-04 17:51:25
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
          // key为前缀，以此前缀替换value的指定字符,如果有多字段请自行替换
          '^/api': '/api/xxx'
        }
      }
    }
  },
  /**
   * 更改webpack上下文配置文件
   * 修改说明可参考命令行 vue inspect > outWebpack.js里的参数
   */
  chainWebpack: config => {
    /**
     * 别名设置
     */
    config.resolve.alias
      .set('@c', resove('src/components'))
      .set('@const', resove('src/constant'))
      .set('@u', resove('src/utils'))
      .set('@Env', resove('env'))
    /**
     * px2rem设置
     */
    if (env.remUnit) {
      config.module
        .rule('scss')
        .oneOf('vue')
        .use('px2rem-loader')
        .loader('px2rem-loader')
        .before('postcss-loader')
        .options({
          remUnit: env.remUnit / 10,
          // 转rem后保留几位小数
          remPrecision: 8
        })
        .end()
    }

    /**
     * 全局scss变量
     */
    config.module
      .rule('scss')
      .oneOf('vue')
      .use('sass-loader')
      .options({
        prependData: `@import "@/assets/scss/index.scss";`
      })
      .end()
  }
}