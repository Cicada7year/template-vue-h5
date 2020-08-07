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
    browser: true,
    node: true,
    es6: true
  },
  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  extends: [
    'plugin:vue/recommended',
    // '@vue/prettier'
  ],
  // plugins: ['babel'],
  // 此项是用来指定javaScript语言类型和风格，sourceType用来指定js导入的方式，默认是script，此处设置为module，指某块导入方式
  parserOptions: {
    // 默认设置为 3，5（默认）， 你可以使用 6、7、8、9 或 10 来指定你想要使用的 ECMAScript 版本。你也可以用使用年份命名的版本号指定为 2015（同 6），2016（同 7），或 2017（同 8）或 2018（同 9）或 2019 (same as 10)
    ecmaVersion: 6,
    // 设置为 "script" (默认) 或 "module"（如果你的代码是 ECMAScript 模块)。
    sourceType: 'module',
    parser: 'babel-eslint',
    // 这是个对象，表示你想使用的额外的语言特性
    ecmaFeatures: {
      // 支持装饰器
      legacyDecorators: true
    }
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
    'vue/max-attributes-per-line': 0,             // html一行最多有几个属性
    'vue/html-self-closing': 0,                    // html标签关闭方式
    'space-before-function-paren': 0,             // 函数定义时括号前面要不要有空格
  }
}
