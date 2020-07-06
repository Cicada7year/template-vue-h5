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
 * 用户是否在登录状态
 */
export const isLogin = () => !!getLocalStore(setting.tokenName)