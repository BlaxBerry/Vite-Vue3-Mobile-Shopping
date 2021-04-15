# 项目流程

## 一、vue-cli初始化

```bash
vue create .
```

- vue 2x
- less router vuex





## 二、清空非必要文件和配置

- `src / view` 目录下只需保留`Home.vue`

- 删除`src / components`目录下默认自带的组件
- 删除`src / assets`目录下默认自带的图片

- `APP.vue`文件的模版中删除原始自带的组件，

  仅保留路由`<router-view\></router-view\>`标签

- 删除`APP.vue`文件style的默认less

- `src / router`目录下的`index.js`文件中anout的路由注释，并且路由 重定向

```js
const routes = [{
        //重定向
        path: '/',
        redirect: '/home'
    }, {
        path: '/home',
        name: 'Home',
        component: Home
    }
```





## 三、安装VantUI 及检测

### 3.1、安装

```bash
npm install vant
```

并在全局引入模块

即在入口文件mian.js文件中把`vant模块`引入项目

```js
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入 vantUI from @/vantUI/index.js
import "@/vantUI";

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
```





### 3.2、使用组件

比如，使用vantUI的button按钮组件

如下，分别导入**组件模版**和**样式**

```vue
<template>
  <div class="home">
    <van-button type="primary">主要按钮</van-button>
    <van-button type="info">信息按钮</van-button>
    <van-button type="default">默认按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>
    <hr>
    <van-stepper v-model="num"/>
</div>
</template>

<script>
import Vue from 'vue';
  //导入模版
import { Button } from 'vant';
  //导入CSS样式
import 'vant/lib/button/style';
  //使用组件
Vue.use(Button);
  
export default {
  name: 'Home',
  components: {}
}
</script>
```



### 3.3、优化在项目中的引入

因为会有很多组件的引入，

所以vantUI组件模版和样式的引入全部单独写在一个文件中

当作全局引入

在项目根目录下 新建 `vantUI / index.js`，

如下：写引入button和stepper两个组件：

```js
import Vue from 'vue';

import { Button, Stepper } from 'vant';

import 'vant/lib/button/style';
import 'vant/lib/stepper/style';

Vue.use(Button);
Vue.use(Stepper);
```



### 3.3、设置自动引入依赖

每次手动写入引入组件名和样式会比较麻烦，

安装 **babel-plugin-import** 插件，自动引入组件样式的地址

```bash
npm install babel-plugin-import 
```

然后在项目根目录下的 `babel.config.js` 中

```js
module.exports = {
    presets: [
        '@vue/cli-plugin-babel/preset'
    ],
    // 导出 下载的 babel-plugin-import
    plugins: [
        ['import', {
            "libraryName": "vant",
            "libraryDirectory": "es",
            "style": true
        }, 'vant']
    ]
}
```

然后，导入vantUI的inde.js文件：

只需要手动写需要的组件即可，

即，不用再每次手动写入需要的组件样式了，

样式的引入交给 **babel-plugin-import** 插件

```js
import Vue from 'vue';
// 引入 vantUI 模版和样式
import { Button, Stepper } from 'vant';

Vue.use(Button);
Vue.use(Stepper);
```





## 四、端口配置

vue-cli 默认8080端口

若想更改，在项目根目录下新建 `vue.config.js`

如下，改为3000端口

```js
module.exports = {
  devServer: {
    port: 3000
  }
}
```

关闭服务器，然后重启，访问 `http://localhost:3000/ `





## 五、VantUI 搜索框

引入组件Search

```js
import Vue from 'vue';
import { Search } from 'vant';
// import 'vant/lib/search/style';
Vue.use(Search);
```

```vue
<template>
  <div class="home">

    <van-search v-model="SearchValue" input-align="center" placeholder="请输入搜索关键词" disabled shape="round"
  background="#efefefe"/>
</div>
</template>
```





## 六、CSS样式清除

```css
* {
  xxx:xxx;
  xxx:xxx;
  xxx:xxx;
}
/*或*/

body,html,div,span,li,ul.....{
  xxx:xxx;
  xxx:xxx;
  xxx:xxx;
}
```

但是npm，vue-cli脚手架项目不使用该写法

安装模块 `reset-css` 实现样式清除

```bash
npm install reset-css
```

并在全局引入模块

即在入口文件mian.js中引入`reset-css` 模块

```js
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入 vantUI from @/vantUI/index.js
import "@/vantUI";
// 引入 reset-css 清除css样式
import 'reset-css'

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
```





## 七、数据请求

### 7.1、数据接口

```js
//接口地址
http://kumanxuan1.f3322.net:8001/
```



### 7.2、安装引入axios

npm下载axios

```bash
npm install axios
```

引入

```js
import axios from "axios";
```

使用axio获取请求

```vue
<templare></templare>

<script>
import axios from "axios";

export default {
  name: 'Home',
  data(){
    return {
      SearchValue:''
    }
  },
  created(){
    axios.get("http://kumanxuan1.f3322.net:8001/index/index")
      .then(function(result){
      
      console.log(result.data);
      
      })
  },
  components: {
    // HelloWorld
  }
}
</script>
```



### 7.3、axios拦截器封装

一般不是直接发送请求，

**在发送请求前先拦截，进行判断和设置后再发送**

比如，点击了个人的购物车，验证登陆后才发送请求，不然不发送

在项目目录下新建 `request / request.js` 文件夹和文件

如下：

把axios拦截器写在该文件内，然后导出

```js
import axios from 'axios';

const instance = axios.create({
    baseURL: "http://kumanxuan1.f3322.net:8001/index/index",
    timeout: 5000
});

// 请求拦截器
instance.interceptors.request.use(config => {
    // 每次请求发送前都执行
    console.log(config);
    return config;
}, err => {
    return Promise.reject(err)
});

// 响应拦截器
instance.interceptors.response.use(result => {
    // 每次接受响应都执行，然后执行回调函数then
    console.log(result);
    return result;
}, err => {
    return Promise.reject(err)
});

export default instance;
```

导入拦截器

```vue
<script>
import request from "@/request/request.js";

export default {
  name: 'Home',
  created(){
    // 接口 "http://kumanxuan1.f3322.net:8001/index/index"
    // 拦截器
    request.get("/index/index")
    .then(function(result){

      console.log('success');
      console.log(result.data.data);

    })
    .catch(function(err){

      console.log('error');
      console.log(err);

    })
  }
}
</script>
```



### 7.4、API封装 抽离请求

因为请求不可能只发送一次

所以，**为了更好的管理这些请求接口**，

把请求全部抽取出放入同一个JS文件中

把多次的请求放入项目目录下的 `request / api.js`中

如下：

导入之前封装的拦截器，

导出请求，每个接口的请求写入一个函数，

函数的返回值就是对接口的请求

```js
import request from './request';

// 导出homepage的页面的请求数据
export const GetHomePageList = ()=>{
  return request.get('/index/index')
};

// 导出商品列表的请求数据
export const GetProductionsList = ()=>{
  return request.get('/brand/detail')
};
```



### 7.5、基于API  发送请求

对接口的请求都写入了api.js文件

每个接口的请求写入一个函数，函数的返回值就是对接口的请求

所以在vuw文件内直接导入请求的函数名，然后调用即可

如下：

```vue
<script>
// 导入 api中的接口请求（接口请求管理的JS文件）
import {GetHomePageList，GetProductionsList} from '@/request/api.js'；

export default {
  name: 'Home',
  created(){
    // 主页数据接口请求
    GetHomePageList()
    .then(function(result){
      console.log('success');
      console.log(result.data.data);

    })
    .catch(function(err){
      console.log('error');
      console.log(err);

    })
  }
</script>
```



### 7.6、设置代理

在vue.config.js中设置代理，解决跨域问题

```js
module.exports = {
    devServer: {
        // 设置端口号
        port: 3000,
        // 配置代理 ，解决跨域
        proxy: {
            '/api': {
                target: "http://kumanxuan1.f3322.net:8001/",
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}
```





## 八、VantUI 轮播图

`vantUI / index.js` 导入VantUI组件

```js
import Vue from 'vue';
// 引入 vantUI 模版和样式
import { Search, Swipe, SwipeItem } from 'vant';
// import 'vant/lib/search/style';

Vue
    .use(Search)
    .use(Swipe)
    .use(SwipeItem);
```

`view / Home.vue` 写入VantUI组件模版，

并通过请求获取轮播图数据，

通过vue指令`v-for `动态生成模版

```vue
<template>
  <div class="home">
    
    <!-- swipe 轮播图 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="#skyleblue">
      <van-swipe-item :key="item.id" v-for="item in banner">
        <img :src="item.image_url" width="100%" :alt="item.content">
      </van-swipe-item>
    </van-swipe>

</div>
</template>

<script>
// 导入 api中的接口请求（接口请求管理的JS文件）
import {GetHomePageList} from '@/request/api.js'

export default {
  name: 'Home',
  data(){
    return {
      banner:[] // 轮播图
    }
  },
  created(){
    GetHomePageList()
    .then((result)=>{
      
      // console.log(result.data.data);
      this.banner = result.data.data.banner;

    })
    .catch((err)=>{

      // console.log('error');
      console.log(err);

    })
  }
}
</script>

```





## 九、搜索框 弹出层

利用VantUI的弹出层组件Popup 

点击指定DOM节点后有弹出层界面弹出，浏览器URL多出一个路由地址

**通过URL路由地址实现用户浏览内容的前进和后退**

```js
http://localhost:3000/home
http://localhost:3000/home/searchPopup
```

### 9.1、结构和路由设置

- **设置结构**

在项目目录下 `view / SearchPopup.vue` 搭建组件界面

```vue
<template>
    <div>
        搜索弹出框
    </div>
  
</template>

<script>
export default {

}
</script>

<style lang = 'less'>

</style>
```

- **添加路由**

在项目目录下 `router / index.js` 中添加新路由

通过URL路由地址实现用户浏览内容的前进和后退

来实现搜索弹出层组件界面的显示和隐藏

```js
http://localhost:3000/home
http://localhost:3000/home/searchPopup
```

如上，popup组件的路由是home主页路由的子路由

**在 `router / index.js`中添加弹出层路由**

```js
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
        //重定向
        path: '/',
        redirect: '/home'
    }, {
        path: '/home',
        name: 'Home',
        component: Home,
        children: [
            //搜素弹出层作为home主页子路由
            {
                path: '/home/searchPopup',
                name: 'SearchPopup',
                component: () =>
                    import ( '../views/SearchPopup.vue')
            }
        ]
    }

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
```

给点击的home主页的指定组件添加跳转路由的事件，

并在home主页写上占位符`<router-view></router-view>`

```vue
<template>
	<div class="home">

    <!-- search 搜索框 -->
    <van-search @click="$router.push('/home/searchPopup')"/>
    <!-- swipe 轮播图 -->

    <!-- popup 搜索弹出层-->
    <router-view></router-view>


	</div>
</template>
```



### 9.2、Popup样式调整

在 `view / SearchPopup.vue`弹出层组件文件中

通过类名在style标签内设置less样式：

```vue
<template>
    <div class="search-popup">
        搜索弹出框
    </div>
  
</template>

<script>
export default {

}
</script>

<style lang = "less">
.search-popup{
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        background-color: rgba(0,0,0,0.5);
    }
</style>
```



### 9.3、Vue动画过渡  进出场动画

popup组件的的显示隐藏动画效果是在主页中表现的

动画应该写在popup组件，即在 `view / Home.vue` 主页面中

通过Vue的`<transition name="?">`过渡动画效果，实现popup组件的滑动

```vue
<template>
  <div class="home">

    <!-- search 搜索框 -->
    <van-search @click="$router.push('/home/searchPopup')"/>
    <!-- swipe 轮播图 -->

    <!-- popup 搜索弹出层-->
    <transition name="slide">
      <router-view></router-view>
    </transition>

	</div>
</template>

<script>
</script>

<style lang="less" scoped>
.slide-enter, .slide-leave-to{
  // Popup 弹出层动画过渡开始前
  left: -100%;
}
.slide-enter-active, .slide-leave-active{
  // Popup 弹出层动画过渡
  transition: all 0.5s;
}
.slide-enter-to, .slide-leave{
  // Popup 弹出层动画过渡结束后
  left: 0;
}
</style>
```



### 9.4、VantUI动画过渡 transition

除了Vue的过渡效果，也可通过VantUI的内置样式transition实现过渡动画

比起Vue原生过渡动画更简洁

```vue
<template>
  <div class="home">

    <!-- search 搜索框 -->
    <van-search @click="$router.push('/home/searchPopup')"/>

    <!-- popup 搜索弹出层-->
    <!-- <transition name="slide">
      <router-view></router-view>
    </transition> -->

    <!--VantUI 的内置动画-->
    <transition name="van-slide-left">
       <router-view></router-view>
    </transition>

</div>
</template>
```





## 十、弹出层内容完善

### 10.1、Top 顶部搜索框

```vue
<template>
    <div class="search-popup">
        <!-- TOP 搜索弹出框 -->
			  <van-search
            v-model="value"
            show-action
            placeholder="请输入搜索关键词"
            @search="onSearch"
            @cancel="onCancel"
        />
    </div>
</template>

<script>

export default {
    data() {
        return {
            value: '',
    };
  },
  methods: {
    onSearch(val) {
        // enter 输入的值
        console.log('onsearch',val);
    },
    onCancel() {
        // 点击取消，通过URL路径离场动画,通过URL路径离场动画,返回上一层路径
        this.$router.push('/home')
    },
  },
}
</script>
```









## 重复点击同一个路由会报错的bug

1. ### **Vue-router版本降级处理**（不推荐）

   ```bash
   npm install vue-router@3.0.7
   ```

2. ### 在点击事件的push后**添加异常捕获`.catch()`**

   ```vue
   <van-search v-model="SearchValue" disabled shape="round" @click="$router.push('/home/searchPopup').catch(err=>{})"/>
   ```

3. ### 修改原型方法push（推荐）

   ```js
   const originalPush = VueRouter.prototype.push;
   VueRouter.prototype.push = function (location){
     return originalPush.call(this.location).catch(err=>{})
   };
   ```

