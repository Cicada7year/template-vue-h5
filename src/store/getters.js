/*
 * @Description: 快捷读取store的值
 * @Date: 2020-06-08 11:00:59
 * @Autor: Popper_Li
 * @LastEditors: Popper_Li
 * @LastEditTime: 2020-06-08 11:20:04
 */

export default {
  // 项目设置信息
  setting: state => state.app.setting,
  // 用户信息
  userInfo: state => state.user.userInfo
}