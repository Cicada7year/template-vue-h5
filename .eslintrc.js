/*
 * @Description: 
 * @Date: 2020-06-01 14:39:38
 * @Autor: Popper_Li
 * @LastEditors: Popper_Li
 * @LastEditTime: 2020-06-03 11:26:54
 */
module.exports = {
  root: true,

  env: {
    node: true
  },

  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],

  parserOptions: {
    parser: 'babel-eslint'
  },

  rules: {
    'space-before-function-paren': 0,
    'semi': 0,
    'quotes': 0,
    'no-console': 'off',
    'no-debugger': 'off',
    'no-trailing-spaces': 'off',
    'vue/no-unused-components': 'warn',
    'vue/no-unused-vars': 'warn'
  },

  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ]
}
