## 快速生成vue+element的框架代码，并且自动添加了相关依赖和基础代码

### 相关依赖如下：

* axios 调用相关api
* good-storage 本都缓存
* jquery
* vue-cropper 图片裁剪
* vue-router 路由
* less css预处理器
* vuex 状态管理
* uglifyjs-webpack-plugin 代码压缩

### 基础代码如下：

* api文件夹， 包含了axios的封装 和 使用demo
* assets文件夹 包含img图片文件夹 和 styles 样式文件夹
  * normalize.css 初始化样式表
  * commin.less 项目公共样式表
* cache 处理本地缓存文件 包含 token refreshToken 和 权限设置
*  json 项目静态数据文件夹
  * index.js 统一的出口文件
  * demo.js 静态数据文件
* utils 项目工具方法文件夹
* vue.config.js 项目配置文件 



### 安装及使用：

全局安装

```
npm install -g jk-cli
```

使用cli

```
// proName 为项目名称
jk-cli proName
```

创建完成后跟使用vue-cli一样

```
cd proName
npm run serve
```

