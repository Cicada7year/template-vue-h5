/*
 * @Description: 校验数据
 * @Date: 2020-06-02 18:05:28
 * @Autor: Popper_Li
 * @LastEditors: Popper_Li
 * @LastEditTime: 2020-06-04 16:38:53
 */
export const regular = {
  // 中国手机号
  mobile: /^1([38][0-9]|4[5-9]|5[0-3,5-9]|6[6]|7[0-8]|9[189])\d{8}$/,
  // 邮箱
  email: /\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/,
  // 身份证
  idCard: /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/,
  // 用户名
  userName: /[A-Za-z0-9_\-\u4e00-\u9fa5]+/,
  // 昵称
  nickName: /^[\u4e00-\u9fa5_a-zA-Z0-9_]{2,20}$/,
  // 密码
  password: /^.{6,30}$/,
  // 短信验证码
  code: /^[0-9]{6}$/
}

/**
 * 是否为手机号
 * @param {Number} mobile 
 */
export const testMobile = mobile => regular.mobile.test(mobile)

/**
 * 是否为邮箱
 * @param {Number} email 
 */
export const testEmail = email => regular.email.test(email)

/**
 * 是否为身份证
 * @param {Number} idCard 
 */
export const testIdCard = idCard => regular.idCard.test(idCard)

/**
 * 是否为手机号
 * @param {Number} code 
 */
export const testCode = code => regular.code.test(code)