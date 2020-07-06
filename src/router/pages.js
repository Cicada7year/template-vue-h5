/*
 * @Description: 路由页面管理
 * @Date: 2020-06-08 13:53:08
 * @Autor: Popper_Li
 * @LastEditors: Popper_Li
 * @LastEditTime: 2020-06-08 14:56:04
 */

/**
 * 定义的页面列表，会按照vue-router的要求转换成其所需的格式
 * 在没有name/path的时候，key会默认对应它们
 * 配置说明：{
 *   name,                                     // 配置路由的name 默认为当前对象的Key
 *   path,                                     // 配置路由的path 默认为当前对象的`/${Key}`
 *   meta:{                                    // 转换成meta
 *      title                                  // 页面标题
 *      keepAlive                              // 当前页面是否开启缓存
 *   },
 *   setting:{},                               // 项目设置，配置文档参照'@const/setting.js'
 *   orSyncApiList:[]                          // 在webview下，初始进来调用哪些action
 * }
 */
const PAGES = {
  Home: { path: '/', meta: { title: '首页', keepAlive: true }, setting: {} }
}

export const pagesSetting = {}
const pages = []
for (const key in PAGES) {
  const { setting = {}, meta } = PAGES[key];
  let { path = '', name = '' } = PAGES[key];
  pagesSetting[key] = { ...setting }
  if (!name) name = key
  if (!path) path = `/${key}`
  pages.push({
    path,
    name,
    meta,
    component: () => import(`@/views/${key}`)
  })
}
export default pages