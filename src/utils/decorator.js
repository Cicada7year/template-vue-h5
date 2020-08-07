/*
 * @Description: 装饰器，可以写一些简化写法的操作，比如防抖节流，确认提示框，等等
 * @Autor: Popper_Li
 */

import { debounce as _debounce, throttle as _throttle } from './tool'
import { error as _error, log } from './debug'

/**
 * 防抖函数装饰器
 * @param {Number} wait 延迟时间
 * @param {Boolean} firstRun 是否立即执行
 */
export const debounce = (wait, firstRun) => {
  return function (target, name, descriptor) {
    descriptor.value = _debounce(descriptor.value, wait, firstRun)
  }
}

/**
 * 节流函数装饰器
 * @param {Number} wait 延迟时间
 * @param {Boolean} firstRun 是否立即执行
 */
export const throttle = (wait, firstRun) => {
  return function (target, name, descriptor) {
    descriptor.value = _throttle(descriptor.value, wait, firstRun)
  }
}

/**
 * loading函数装饰器，要接收到一个promise才可以
 * @param {String} path 需要loading的值路径，没有的情况下默认全局的
 * @param {Function} errorCallBack 错误回调 只有普通函数才会有this绑定
 */
export const loading = (path, errorCallBack) => {
  return function (target, name, descriptor) {
    const fn = descriptor.value
    descriptor.value = async function () {
      let waitSetObj = this
      let setKey = null
      // 如果有path的话就开始寻找变量
      if (path) {
        path = path.replace(/\[(\w+)\]/g, '.$1')
        path = path.replace(/^\./, '')
        const keyArr = path.split('.')
        setKey = keyArr[keyArr.length - 1]
        for (let index = 0; index < keyArr.length - 1; index++) {
          const element = keyArr[index];
          waitSetObj = waitSetObj[element]
        }
      }
      /**
       * 因为没有封装UI框架，封装后这里自行写loading开始
       */
      setKey ? waitSetObj[setKey] = true : log('开始loading====封装loading效果后删除log');
      try {
        await fn.apply(this, ...arguments)
      } catch (error) {
        errorCallBack ? errorCallBack.call(this, error) : _error(error)
      } finally {
        /**
         * 这里关闭loading
         */
        setKey ? waitSetObj[setKey] = false : log('结束loading====封装loading效果后删除log');
      }
    }
  }
}