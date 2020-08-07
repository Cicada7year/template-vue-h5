<!--
 * @Description: 脚手架说明
 * @Autor: Popper_Li
--> 

# template-vue-h5

vue h5 模板

### 说明

这是一个基于vue2的开箱即用的脚手架项目，对于你的项目保证最大化的支持度是它的产生初衷。它的特点是在不影响业务需求的情况下，封装了一些平常可能会常用的工具和组件，所以它甚至连一个UI库都没有接入，这取决于你的兴趣爱好。希望它能为你带来便利，祝你好运！

### 项目目录结构

------------

``` bash
┌── dist                                        // 项目打包文件夹
├── doc                                         // 文档目录
├── env                                         // 环境配置目录
├── node_modules                                // 依赖仓库
├── pulic                                       // 
├── src                                         // 代码开发目录
│   ├── assets                                  // 静态资源存放目录
│   │   ├── scss                                // scss目录
│   │   │   ├── common                          // 模块目录
│   │   │   ├── mixins                          // scss函数
│   │   │   ├── variables                       // scss变量
│   │   └── image                               // 图片
│   ├── components                              // 公共组件
│   ├── constant                                // 常量和一些全局变量
│   ├── libs                                    // sdk、本地依赖、本地静态数据目录
│   ├── router                                  // 路由配置
│   ├── store                                   // vuex配置
│   ├── utils                                   // 工具库目录
│   │   ├── data.js                             // 数据管理工具库
│   │   ├── debug.js                            // 调试相关工具库
│   │   ├── decorator.js                        // 装饰器工具库
│   │   ├── format.js                           // 数据格式化工具库
│   │   ├── index.js                            // 总入口
│   │   ├── request.js                          // axios封装
│   │   ├── sys.js                              // 系统环境工具库
│   │   ├── tool.js                             // 自定义业务工具库
│   │   └── validate.js                         // 数据校验工具库
│   └── views                                   // 视图目录
├── .browserslistrc                              
├── .eslintrc.js                                // 代码检查配置 [文档](./doc/eslintrc.md)
├── babel.config.js                             // babel配置文件
├── package.json                                // 项目依赖配置
├── postcss.config.js                           // postcss配置
├── README.md                                   // 脚手架说明
└── vue.config.js                               // webpack配置文件
```
