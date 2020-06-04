/*
 * @Title: 编译配置
 * @Description: 根据环境做一些配置
 * @Date: 2020-06-01 13:36:18
 * @Autor: Popper_Li
 */

// 环境配置
const nodeEnv = process.env.NODE_ENV || 'production'
const env = require(`./${nodeEnv}`)

// 全局配置
const global = {
  // 项目版本号
  version: '0.0.1',
  NODE_ENV: nodeEnv
}

module.exports = Object.assign(env, global)
