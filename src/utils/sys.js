/*
 * @Description: 系统环境
 * @Date: 2020-06-04 16:01:08
 * @Autor: Popper_Li
 * @LastEditors: Popper_Li
 * @LastEditTime: 2020-06-04 17:42:49
 */

/**
 * 系统信息插件
 */
import MobileDetect from 'mobile-detect'

const u = navigator.userAgent

/**
 * 获取系统信息
 */
export const getSystemInfo = () => {
  const md = new MobileDetect(u)
  return {
    brand: md.mobile(), // 手机品牌
    model: md.mobile(), // 手机型号
    system: md.os(), // 操作系统版本
    pixelRatio: window.devicePixelRatio, // 设备像素比
    screenWidth: window.screen.width, // 屏幕宽度
    screenHeight: window.screen.height, // 屏幕高度
    windowWidth: document.documentElement.clientWidth, // 可使用窗口宽度
    windowHeight: document.documentElement.clientHeight, // 可使用窗口高度
    platform: navigator.platform, // 客户端平台
    language: navigator.language // 客户端语言
  }
}

/**
 * 系统信息
 */
export const systemInfo = getSystemInfo()

/**
 * 是否为iPad
 */
export const isiPad = systemInfo.model === 'iPad'

/**
 * 是否为iPhone
 */
export const isiPhone = systemInfo.model === 'iPhone'

/**
 * 是否为Andorid
 */
export const isAndorid = systemInfo.system === 'AndroidOS'

/**
 * 是否为Ios
 */
export const isiOS = systemInfo.system === 'iOS'

/**
 * 是否在微信
 */
export const isWechat = !!u.match(/MicroMessenger/i)

/**
 * 是否在手机端
 */
export const isMobile = !!u.match(/AppleWebKit.*Mobile.*/)

/**
 * 是否为开发环境
 */
export const isDev = process.env.NODE_ENV === 'development'

/**
 * 是否为测试环境
 */
export const isSit = process.env.NODE_ENV === 'sit'

/**
 * 是否为生产环境
 */
export const isProd = process.env.NODE_ENV === 'production'