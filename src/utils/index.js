/*
 * @Description: utils总入口
 * @Autor: Popper_Li
 */
import * as data from './data'
import * as debug from './debug'
import * as format from './format'
import * as request from './request'
import * as tool from './tool'
import * as sys from './sys'
import * as validate from './validate'

export default {
  // 数据相关
  ...data,
  // 调试相关
  ...debug,
  // 格式化数据
  ...format,
  // 请求封装
  ...request,
  // 系统环境
  ...sys,
  // 工具
  ...tool,
  // 校验数据
  ...validate
}
