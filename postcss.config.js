/*
 * @Description: postcss配置文件
 * @Date: 2020-06-02 11:01:53
 * @Autor: Popper_Li
 * @LastEditors: Popper_Li
 * @LastEditTime: 2020-06-02 11:02:06
 */ 
const env = require('./env')
module.exports = {
  plugins: {
    'autoprefixer': {
      browsers: ['Android >= 4.0', 'iOS >= 7']
    },
    'postcss-pxtorem': {
      rootValue: env.remUnit / 10,
      propList: ['*'],
    }
  }
}
