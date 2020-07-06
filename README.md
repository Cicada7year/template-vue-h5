<!--
 * @Description: 项目文档
 * @Date: 2020-06-01 14:36:28
 * @Autor: Popper_Li
 * @LastEditors: Popper_Li
 * @LastEditTime: 2020-06-04 18:22:11
--> 
# template-vue-h5
vue h5 模板

### 项目目录结构#
------------
```bash
┌── dist                                        // 项目打包文件夹
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
│   │   ├── format.js                           // 数据格式化工具库
│   │   ├── index.js                            // 总入口
│   │   ├── request.js                          // axios封装
│   │   ├── sys.js                              // 系统环境工具库
│   │   ├── tool.js                             // 自定义业务工具库
│   │   └── validate.js                         // 数据校验工具库
│   └── views                                   // 视图目录
├── .browserslistrc                             // 
├── .eslintrc.js                                // 代码检查配置 [文档](./doc/eslintrc.md)
├── babel.config.js                             // babel配置文件
├── package.json                                // 项目依赖配置
├── README.md                                   // 文档
└── vue.config.js                               // webpack配置文件
```