/*
 * @Description: 请求配置
 * @Date: 2020-06-04 17:35:40
 * @Autor: Popper_Li
 * @LastEditors: Popper_Li
 * @LastEditTime: 2020-06-04 18:13:48
 */
import axios from 'axios'
import Env from '@Env'
import { getLocalStore } from './data'
import { isDev } from './sys'
import CONFIG from '@const/config'

const http = axios.create({
  // 如果是开发环境的话默认开启代理
  baseURL: isDev
    // 这个baseURL可以跟vue.config.js里proxy.pathRewrite的前缀做匹配
    ? '/api'
    : Env.baseURL,
  // 15秒超时
  timeout: 15000
})

/**
 * 请求拦截器
 * 这里可以做一些全局的请求前拦截事件
 * 比如封装请求头、加密请求数据等
 */
http.interceptors.request.use(_config => {
  /**
   * 装自动token
   */
  _config.headers[CONFIG.tokenName] = getLocalStore(CONFIG.tokenName)

  /**
   * 如果是post并且没有指定content-type
   */
  if (_config.method === 'post' && !_config.headers['content-type']) {
    _config.headers['content-type'] = 'application/json'
  }

  return _config
}, err => {
  /**
   * 对请求错误做些什么
   */
  return Promise.reject(err)
})

/**
 * 响应拦截器
 * 统一对响应结果做些什么
 * 比如拦截登录失效，与后端约定的一些常用全局错误码
 */
http.interceptors.response.use(response => {
  /**
   * 登录失效情况
   */
  if (response.data.code === 400) {
    console.error('登录失效了');
    return Promise.reject(response.data)
  }
  /**
   * 对响应数据做点什么
   */
  return response.data
}, err => {
  /**
   * 对响应错误做些什么
   */
  return Promise.reject(err)
})

/**
 * post请求
 */
export const post = http.post

/**
 * get请求
 */
export const get = http.get

/**
 * request请求
 */
export const request = http.request