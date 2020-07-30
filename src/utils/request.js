/*
 * @Description: 请求配置
 * @Date: 2020-06-04 17:35:40
 * @Autor: Popper_Li
 * @LastEditors: Popper_Li
 * @LastEditTime: 2020-06-08 10:49:45
 */
import axios from 'axios'
import Env from '@Env'
import { getLocalStore } from './data'
import { error } from './debug'
import { isDev } from './sys'
import setting from '@const/setting'

/**
 * axios实例拦截器配置
 * @param {Object} http axios实例
 * @param {Array} request 请求配置
 * @param {Array} response 响应配置
 */
const serviceInterceptorAssembly = (
  http,
  request = [_config => {
    /**
     * 装自动token
     */
    _config.headers[setting.tokenName] = getLocalStore(setting.tokenName)

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
  }],
  response = [_response => {
    /**
     * 登录失效情况
     */
    if (_response.data.code === 400) {
      error('登录失效了');
      return Promise.reject(_response.data)
    }
    /**
     * 对响应数据做点什么
     */
    return _response.data
  }, err => {
    /**
     * 对响应错误做些什么
     */
    return Promise.reject(err)
  }]) => {
  if (!Array.isArray(request)) {
    error(new Error(`TypeError: request is not Array`).stack)
  }

  if (!Array.isArray(response)) {
    error(new Error(`TypeError: response is not Array`).stack)
  }

  /**
   * 请求拦截器
   * 这里可以做一些全局的请求前拦截事件
   * 比如封装请求头、加密请求数据等
   */
  http.interceptors.request.use(...request)

  /**
   * 响应拦截器
   * 统一对响应结果做些什么
   * 比如拦截登录失效，与后端约定的一些常用全局错误码
   */
  http.interceptors.response.use(...response)

  return http
}

const exportOtions = {}

const apiBase = Env.apiBase

if (typeof apiBase === 'object' && !Array.isArray(apiBase)) {
  for (const moduleName in apiBase) {
    const element = apiBase[moduleName];
    let baseURL = element.url
    if (isDev && element.proxy) {
      baseURL = ''
    }
    const http = axios.create({
      baseURL,
      timeout: element.timeout || 15000
    })
    exportOtions[moduleName] = serviceInterceptorAssembly(http)
  }
} else if (typeof apiBase === 'string') {
  exportOtions.http = serviceInterceptorAssembly(axios.create({
    baseURL: isDev ? '' : apiBase,
    timeout: 15000
  }))
}

export default exportOtions