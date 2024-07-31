# 使用VUE模板开发
-----------------------------

### 前言

更多VUE开发技巧和学习指南可参考[VUE 官网](https://cn.vuejs.org/index.html)。

使用WeLink VUE开发框架可以快速构建和开发We码程序，基于 npm + VUE + vuex  的快速开发本地化的框架。

+ We码要遵循WeLink目录规范才可在WeLink上正常运行，此模板会自动构建符合WeLink规范的代码包。

+ 集成了WeLink JSAPI，构建项目时会自动引入JSAPI。通过JSAPI就可以调用WeLink 原生能力。

> We码开发文档URL: https://open.welink.huaweicloud.com/wecode/index.html#/wecode/doc

### 目录结构

- [新建项目](#新建项目)
- [安装VUE语法高亮插件](#安装VUE语法高亮插件)
- [工程目录](#工程目录)
  + [引入图片和文件](#引入图片和文件)
  - [common 文件夹的使用](#common文件夹的使用)
    + [引入公共组件、三方库资源](#引入公共组件、三方库资源)
  - [添加路由](#添加路由)
    + [路由跳转](#路由跳转)
  + [样式引用](#样式引用)
  + [国际化](#国际化)
  + [创建新页面](#创建新页面)
  + [真机调试](#真机调试)

### 新建项目

通过We码开发者工具**新建项目**，选择项目类型“**VUE模板**”。

> 为了帮助开发者快速开发We码小程序提升办公效率，我们准备了We码小程序开发者工具，该工具具备新建项目、代码编辑、程序模拟、真机预览、上传等功能。

### 安装VUE语法高亮插件

VUE语法高亮插件体积较大，目前We码开发者工具未内置该插件，但是我们可以手动添加。

+ 第一步，先通过浏览器，下载插件[vetur](https://marketplace.visualstudio.com/_apis/public/gallery/publishers/octref/vsextensions/vetur/0.24.0/vspackage)到本地。

+ 第二步，通过IDE【菜单栏】-【个性化】-【安装插件】，加载下载好文件： `octref.vetur-0.24.0.vsix`。
  
> 由于插件加载过程，会去安装一些依赖，时间可能有点久，请耐心等待，直至提示安装完成。

### 工程目录

项目文件结构如下：

```js
├── public                              // 静态资源目录，不会进行编译、压缩、混淆
├── src                                 // 源代码目录
│   ├── common                          // 公共资源，包括 css/js  等
│   ├── components                      // 组件
│   ├── config                          // 配置项，包括 api 等
│   ├── i18n                            // 本地化
│   │    ├── en_US                      // 国际化-英文配置信息
│   │    └── zh_CN                      // 国际化-中文配置信息
│   ├── router                          // 路由
│   ├── store                           // store，页面数据按模块存储
│   ├── utils                           // 提供一些小工具
│   ├── views                           // 页面
│   ├── App.vue                         // 主页
│   ├── index.html                      // 主页 html
│   └── main.js                         // 打包入口
└── vue.config.js                       // 默认无此文件，如果有需求可以手动添加该配置，模板cli会自动识别并处理。vue webpack配置文件
```


当项目构建时，**必须包含以下文件**：

> src/index.html 是页面模板

可以在 `src` 目录创建子目录，为了更快地重新构建，模板只处理 `src` 中的文件。**需要将 JS 和 CSS 放到 `src` 里面**，否则模板将不会处理。

> 模板会对 `src`中的资源进行：编译、压缩、混淆等处理。 

### 引入图片和文件

```js
import backImg from './images/back.png';

<template>
  <header>
    <img id="back" :src="backImg" />
  </header>
</template>

export default {
  data() {
    return {
      backImg
    };
  }
};
```
当项目构建完，模板 会将图片放到 `build` 目录中，以及引用正确的访问地址。

同样适合在 CSS 中：

```css
.back {
  background-image: url(./images/back.png);
}
```

### common

建议将公共样式以及相关文件存放在这个文件，方便管理。

### 添加路由

在 `src/router/index.js` 添加配置，如下：

```js
const routes = [
  {
    path: '*',
    redirect: '/'
  },
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/vueTemplateIntro',
    component: view('/VueTemplateIntro.vue')
  },
  {
    path: '/你要新增的路由',  // 路由
    component: view('/你要新增的页面.vue')  // 路由对应页面
  }
];
```


#### `路由跳转`

方法：使用 <router-link> 组件进行跳转

```js
<template>
  <router-link to="/vueTemplateIntro">跳转到XX页面</router-link>
</template>
```

### 样式引用

#### Xx.vue引入样式文件

```js
<template>
  <div class="weui-article pr10">
</template>
<script>
  import '../common/css/index.less';
  export default {
    data() {
      return {};
    }
  };
</script>
```

### 国际化

输出 src/i18n/zh_CN 中 common.json 配置的国际化字段 appName 信息

使用：

```jsx
i18n.t("common:appName");
```

### 创建新页面

第一步：在 `src/views` 目录下创建 `VueTemplateIntro.vue`：

```text
└───template/
    ├───src/
        ├───views              
            ├───Home.vue               //首页
            └───VueTemplateIntro.vue   //详情页
```

第二步： 在 在 `src/router/index.js` 添加配置，例如：

```js
const routes = [
  {
    path: '/vueTemplateIntro',  // 路由
    component: view('/VueTemplateIntro.vue')  // 路由对应页面
  }
];
```
具体映射方式请参阅[添加路由](#添加路由)，至此一个页面创建完成。

### 真机调试

当新建 `VUE` 项目时，在`src/index.html`中默认添加如下代码，是为了方便在真机上打开调试器调试代码，但上传打包项目时不需要删除此代码，因为模板打包时会自动过滤此代码。

```html
<body>
   <%= htmlWebpackPlugin.options.vconsole === true ? '<script type="text/javascript" src="../../../../common/js/vconsole.js"></script>' : '' %>
</body>
```
