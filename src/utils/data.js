/*
 * @Description: 数据处理
 * @Autor: Popper_Li
 */

/**
 * Cookie管理工具
 * 持久化存储数据
 * github: https://github.com/js-cookie/js-cookie
 */
import Cookie from 'js-cookie'

import Env from '@Env'

/**
 * 全局临时数据类
 * 适用跨页面传值、临时存储某些数据等使用场景
 * 注：存到内存的数据，非持久化存储。
 */
class Store {
  constructor() { this.clear() }
  // get数据异步方法
  async get(key) { if (!key) return ''; return this._state[key] ? JSON.parse(this._state[key]) : null }
  // get数据同步方法
  getSync(key) { if (!key) return ''; return this._state[key] ? JSON.parse(this._state[key]) : null }
  // set数据异步方法
  async set(key, value) { this._state[key] = JSON.stringify(value) }
  // set数据同步方法
  setSync(key, value) { this._state[key] = JSON.stringify(value) }
  // 删除某个数据
  remove(key) { delete this._state[key] }
  // 清空数据
  clear() { this._state = {} }
}

const store = new Store()

/**
 * 判断是否把临时数据存到持久化存储里
 * 一般用作开发的时候把临时数据存到持久化存储，方便调试数据，不建议更改
 */
const temp2Local = Env.openTempData2Local
// const temp2Local = false
// 临时变量前缀，仅在开发环境使用
const KEY = 'TEMP'
/**
 * 获取数据，下面的是同步版
 * @param {String} key 数据名
 */
export const getTempData = (key) => temp2Local ? getLocalStore(`${KEY}_${key}`) : store.get(key)
export const getTempDataSync = (key) => temp2Local ? getLocalStore(`${KEY}_${key}`) : store.getSync(key)

/**
 * 设置某个数据，下面的是同步版
 * @param {String} key 数据名
 * @param {Object} value 值
 */
export const setTempData = (key, value) => temp2Local ? setCookie(`${KEY}_${key}`, value) : store.set(key, value)
export const setTempDataSync = (key, value) => temp2Local ? setCookie(`${KEY}_${key}`, value) : store.setSync(key, value)

/**
 * 删除某个数据
 * @param {String} key 数据名
 */
export const removeTempData = (key) => temp2Local ? removeLocalStore(`${KEY}_${key}`) : store.remove(key)

/**
 * 清空数据
 */
export const clearTempData = store.clear

/**
 * 存Cookie
 * @param {String} key 数据名
 * @param {Object} value 值
 */
export const setCookie = (k, v, o) => Cookie.set(k, v, o)

/**
 * 取Cookie
 * @param {String} key 数据名
 */
export const getLocalStore = (k) => Cookie.getJSON(k)

/**
 * 删除Cookie
 * @param {String} key 数据名
 */
export const removeLocalStore = (k) => Cookie.remove(k)

/**
 * 数据深拷贝
 * @param {Object} data 
 */
export const dataCopy = data => JSON.parse(JSON.stringify(data))