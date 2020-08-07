/*
 * @Description: 快捷读取store的值
 * @Autor: Popper_Li
 */

export default {
  // 项目设置信息
  setting: state => state.app.setting,
  // 用户信息
  userInfo: state => state.user.userInfo
}