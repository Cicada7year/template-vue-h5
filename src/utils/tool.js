/*
 * @Description: 工具，可以封装一些与业务相关的工具
 * @Date: 2020-06-02 18:18:53
 * @Autor: Popper_Li
 * @LastEditors: Popper_Li
 * @LastEditTime: 2020-06-08 11:54:49
 */
import { getLocalStore } from './data'
import setting from "@const/setting"

/**
 * 注册防抖函数
 * @param {Function} f 注册函数
 * @param {Number} wait 注册毫秒数
 * @param {Boolean} firstRun 是否立即执行
 */
export const debounce = (f, wait = 100, firstRun = false) => {
  let timer = null
  let flag = true
  return (...args) => {
    clearTimeout(timer)
    if (firstRun && flag) {
      f(...args)
      flag = false
    }
    timer = setTimeout(() => {
      if (firstRun) {
        flag = true
      } else {
        f(...args)
      }
    }, wait);
  }
}

/**
 * 注册节流函数
 * @param {Function} f 注册函数
 * @param {Number} wait 注册毫秒数
 * @param {Boolean} firstRun 是否立即执行
 */
export const throttle = (f, wait = 100, firstRun = false) => {
  let timer = null
  let flag = true
  return (...args) => {
    if (timer) return
    if (firstRun && flag) {
      f(...args)
      flag = false
    }
    timer = setTimeout(() => {
      if (firstRun) {
        flag = true
      } else {
        f(...args)
        timer = null
      }
    }, wait);
  }
}

/**
 * 用户是否在登录状态
 */
export const isLogin = () => !!getLocalStore(setting.tokenName)