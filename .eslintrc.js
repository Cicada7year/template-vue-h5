/*
 * @Description: EsLint配置
 * @Date: 2020-06-01 14:39:38
 * @Autor: Popper_Li
 * @LastEditors: Popper_Li
 */
module.exports = {
  // 此项是用来告诉eslint找当前配置文件不能往父级查找
  root: true,
  // 此项指定环境的全局变量，下面的配置指定为浏览器环境
  env: {
    node: true
  },
  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  // 此项是用来指定javaScript语言类型和风格，sourceType用来指定js导入的方式，默认是script，此处设置为module，指某块导入方式
  parserOptions: {
    parser: 'babel-eslint'
  },

  rules: {
    'semi': 0,                                    // 语句可以不需要分号结尾
    'quotes': 0,                                  // 引号风格
    'eol-last': 0,                                // 文件以单一的换行符结束
    'no-console': 0,                              // 禁止使用console
    'no-debugger': 0,                             // 禁止使用debugger
    'no-unused-vars': 1,                          // 没有使用的变量警告
    'no-trailing-spaces': 0,                      // 一行最后不允许有空格
    'vue/no-unused-components': 1,                // 没有使用的组件警告
    'vue/no-unused-vars': 1,                      // 没有使用的变量警告
    'space-before-function-paren': 0,             // 函数定义时括号前面要不要有空格
  },

  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ]
}
