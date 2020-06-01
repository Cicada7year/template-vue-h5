/*
 * @Title: 编译配置
 * @Description: 根据环境做一些配置
 * @Date: 2020-06-01 13:36:18
 * @Autor: Popper_Li
 */

// 环境配置
const env = require(`./${process.env.NODE_ENV}`)

// 全局配置
const global = {
  // 脚手架版本号
  version: '0.0.1'
}

module.exports = Object.assign(env, global)

