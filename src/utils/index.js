/*
 * @Description: utils总入口
 * @Date: 2020-06-02 18:17:04
 * @Autor: Popper_Li
 * @LastEditors: Popper_Li
 * @LastEditTime: 2020-06-04 18:04:18
 */
import * as data from './data'
import * as format from './format'
import * as request from './request'
import * as tool from './tool'
import * as sys from './sys'
import * as validate from './validate'

export default {
  // 数据相关
  ...data,
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