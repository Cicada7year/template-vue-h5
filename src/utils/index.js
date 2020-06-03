/*
 * @Description: utils总入口
 * @Date: 2020-06-02 18:17:04
 * @Autor: Popper_Li
 * @LastEditors: Popper_Li
 * @LastEditTime: 2020-06-03 13:52:51
 */
import * as data from './data'
import * as format from './format'
import * as tool from './tool'
import * as validate from './validate'

export default {
  // 数据相关
  ...data,
  // 格式化数据
  ...format,
  // 工具
  ...tool,
  // 校验数据
  ...validate
}
