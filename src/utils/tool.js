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
 */
export const debounce = (f, wait = 100) => {
  let timer = null
  return (...args) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      f(...args)
    }, wait);
  }
}

/**
 * 注册节流函数
 * @param {Function} f 注册函数
 * @param {Number} wait 注册毫秒数
 */
export const throttle = (f, wait = 100) => {
  let timer = null
  return (...args) => {
    if (timer) return
    timer = setTimeout(() => {
      f(...args)
      timer = null
    }, wait);
  }
}

/**
 * 用户是否在登录状态
 */
export const isLogin = () => !!getLocalStore(setting.tokenName)