/*
 * @Title: 编译配置
 * @Description: 根据环境做一些配置
 * @Autor: Popper_Li
 */

// 环境配置
const nodeEnv = process.env.NODE_ENV || 'production'
const env = require(`./${nodeEnv}`)
const version = require('../package.json').version

// 全局配置
const global = {
  // 项目版本号
  version,
  // px2Rem画稿配置，单位为画稿宽度
  remUnit: 750,
  NODE_ENV: nodeEnv
}

module.exports = Object.assign(env, global)
