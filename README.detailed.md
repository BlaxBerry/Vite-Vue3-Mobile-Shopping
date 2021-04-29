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
    baseURL: "http://kumanxuan1.f3322.net:8001",
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



### 10.2、其余3个组件界面的内容

通过`v-if语句`和`data`中的数据变量的值，来控制哪一个组件在页面中的显示

因为组件是在搜索框弹出层中，所以是其子组件，模版写在`SearchPopup.vue`中

```vue
<template>
    <div class="search-popup">
        <!-- 搜索框 -->
        <van-search
            v-model="searchValue"
            show-action
            :placeholder="placeholderValue"
            @search="onSearch"
            @cancel="onCancel"
        />
      
      <!--历史记录+热门搜索/搜索关键字提示列表/搜索结果商品列表 3个组件
        <comp1 v-if="blockshow==1"></comp1>
        <comp2 v-else-if="blockshow==2"></comp2>
        <comp3 v-else-if="blockshow==3"></comp3>-->

    </div>
</template>
<script>
  export default {
    data(){
      return {
        blockshow: 1
        // blockShow==1: 历史记录+热门搜索
        // blockShow==2: 搜索关键字提示列表
        // blockShow==3: 搜索结果商品列表
      }
    }
  }
</script>
```





## 十一、热门搜索 历史记录 

组件定义在项目目录下的 `components / HotHistory.vue`文件中设置组件

```vue
<template>
    <div>
        热门历史
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
</style>
```

在父组件`SearchPopup.vue`中引入并使用

通过`import HotHistory from "@/components/HotHistory"`引入组件，

在`components属性`中定义导入的该组件作为子组件，

在模版中调用使用定义的子组件标签

```vue
<template>
    <div class="search-popup">
        <!-- 搜索框 -->
        <van-search
            v-model="searchValue"
            show-action
            :placeholder="placeholderValue"
            @search="onSearch"
            @cancel="onCancel"
        />
      
       <!-- 历史记录+热门搜索/搜索关键字提示列表/搜索结果商品列表 3个组件-->
       <!-- <comp1 v-if="blockshow==1"></comp1> -->
       <HotHistory></HotHistory>
      
       <!-- <comp2 v-else-if="blockshow==2"></comp2> -->
       <!-- <comp3 v-else-if="blockshow==3"></comp3>  -->

    </div>
</template>
<script>
  import HotHistory from "@/components/HotHistory"
  export default {
    data(){
      return {
        blockshow: 1
        // blockShow==1: 历史记录+热门搜索
        // blockShow==2: 搜索关键字提示列表
        // blockShow==3: 搜索结果商品列表
      }
    },
    components:{
      HotHistory
    }
  }
</script>
```



### 组件结构

通过VantUI组件完成结构模版

```vue
<template>
    <div>
        <!-- 搜索历史 -->
        <div class="hot-history">
            <!-- top tittle-->
            <div class="top">
                <h3>浏览历史记录</h3>
                <!-- 删除icon -->
                <van-icon name="delete" />
            </div>
            <!-- bottom tags-->
            <div class="bottom">
                <van-tag plain type="default">标签</van-tag>
                <van-tag plain type="default">标签</van-tag>
                <van-tag plain type="default">标签</van-tag>
            </div>
        </div>

        <!-- 热门搜索 -->
       <div class="hot-history">
            <!-- top tittle-->
            <div class="top">
                <h3>热门搜索</h3>
            </div>
            <!-- bottom tags-->
            <div class="bottom">
                <van-tag plain type="default">标签</van-tag>
                <van-tag plain type="default">标签</van-tag>
                <van-tag plain type="default">标签</van-tag>
            </div>
        </div>
    </div>
</template>
```



### 组件less样式调整

```less
<style lang="less" scoped>
.hot-history {
    background-color: #fff;
    padding: .20rem;// html font-size=100px
    margin-bottom: .20rem;
    font-size: .20rem;

    .top {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        h3 {
            font-size: .20rem;
            font-weight: 700;
        }

    }
    .bottom {
        display: flex;
        margin-top: 0.20rem;

        .van-tag {
            margin-right:0.10rem;
            padding: 0.05rem;
        }
    }
}
</style>
```



### 数据请求

因为无论是top搜索框，还是后面的三个组件内容都是在弹出层上

所以，数据的请求应该在整个弹出层组件上

即，`SearchPopup.vue`上

搜索窗口数据接口

```js
//接口地址
http://kumanxuan1.f3322.net:8001/search/index
```

在接口管理文件`api.js`中设置接口

```js
import request from './request';

// homepage的页面的请求数据
export const GetHomePageList = () => {
    return request.get('/index/index')
};

// 搜索弹出框 Popup的数据
export const GetSearchPopupData = () => {
    return request.get('/search/index')
};
```

然后`SearchPopup.vue` 引入导出的函数，

函数的返回值是对数据的请求

```vue
<script>
// 导入 历史记录和热门搜索 组件
import HotHistory from '@/components/HotHistory.vue'
// 导入搜索窗口数据接口请求api
import {GetSearchPopupData} from "@/request/api"

export default {
    data() {
        return {
            blockShow: 1,
        };
    },
    created(){
        // 请求获得 placeholderValue的数据
        // 历史记录和热门搜索
        GetSearchPopupData().then(result=>{
            // console.log(result.data.data.defaultKeyword);
        })
    },
    components:{
        HotHistory
    }
}
</script>
```



### 组件数据父传子

父组件的created生命周期函数中请求数据

并将响应回的数据赋值给data中的数据

然后通过自定义属性，传递给子组件

即在`SearchPopup` 组件中获取并传递给子组件`HotHistory`

```vue
<template>
    <div class="search-popup">
        <!-- 搜索弹出框 -->
        <van-search
            v-model="searchValue"
            show-action
            :placeholder="placeholderValue"
            @search="onSearch"
            @cancel="onCancel"
        />

        <!-- 历史记录+热门搜索组件-->
        <HotHistory v-if="blockShow==1" :historyKeywordList="historyKeywordList" :hotKeywordList="hotKeywordList"></HotHistory>
      
    </div>
</template>

<script>
// 导入 历史记录和热门搜索 组件
import HotHistory from '@/components/HotHistory.vue'
// 导入搜索窗口数据接口请求api
import {GetSearchPopupData} from "@/request/api"

export default {
    data() {
        return {
            // top搜索框内容value
            searchValue: '',
            // top搜索框placeholder内容
            placeholderValue:'',
            // 历史记录+热门搜索/搜索关键字提示列表/搜索结果商品列表 3个组件显示与否
            // blockShow==1: 历史记录+热门搜索
            // blockShow==2: 搜索关键字提示列表
            // blockShow==3: 搜索结果商品列表
            blockShow: 1,
            historyKeywordList:[],
            hotKeywordList:[]
        };
    },
    created(){
        GetSearchPopupData().then(result=>{
            // console.log(result.data.data);
          
            // 请求获得 placeholderValue的数据
            this.placeholderValue=result.data.data.defaultKeyword.keyword;
            
            // 历史记录和热门搜索
            // 父传子
            this.historyKeywordList = result.data.data.historyKeywordList;
            this.hotKeywordList = result.data.data.hotKeywordList;
        })
     
    },
    components:{
        HotHistory
    }
}
</script>
```



### 子组件接收数据与渲染页面

在子组件`HotHistory`中通过`props`属性接收从`SearchPopup` 组件传出的数据

并用来`v-for`遍历生成页面DOM结构

其中，通过数据来判断是否添加class类样式

```vue
<template>
    <div>
        <!-- 搜索历史记录 -->
        <div class="hot-history">
            <!-- top tittle-->
            <div class="top">
                <h3>浏览历史记录</h3>
                <!-- 删除icon -->
                <van-icon name="delete" />
            </div>
            <!-- bottom tags-->
            <div class="bottom">
                <van-tag 
                         plain type="default" 
                         v-for="(item,index) in historyKeywordList" 
                         :key="index">
                  {{item}}
                </van-tag>   
            </div>
        </div>

        <!-- 热门搜索 -->
       <div class="hot-history">
            <!-- top tittle-->
            <div class="top">
                <h3>热门搜索</h3>
            </div>
            <!-- bottom tags-->
            <div class="bottom">
               <van-tag plain type="default" 
                        v-for="(item,index) in hotKeywordList" 
                        :key="index"
                        :class="item.is_hot==1?'hotTagRed':''">
                 {{item.keyword}}
               </van-tag>              
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
        }
    },
    props: ['historyKeywordList',"hotKeywordList"]
}
</script>

<style>
  .hotTagRed {
    color: red;
}
</style>
```







## 十二、搜索提示列表

### 设置结构

引入VantUI的List组件和Cell组件

```js
import Vue from 'vue';
// 引入 vantUI 模版和样式
import { Search, Swipe, SwipeItem, Icon, Tag, List，Cell } from 'vant';

// import 'vant/lib/search/style';

Vue
    .use(Search)
    .use(Swipe)
    .use(SwipeItem)
    .use(Icon)
    .use(Tag)
    .use(List)
    .use(Cell)
```

并在`SearchList.vue`模版中调用

```vue
<template>
    <!--搜索列表-->
    <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        >
        <van-cell v-for="item in list" :key="item" :title="item" />
    </van-list>

</template>

<script>
export default {
    data() {
        return {
            list: [1,2,3],
            loading: false,
            finished: false,
        };
    }
};
</script>
```

父组件中

```vue

```



### 数据请求

```js
//接口地址
http://kumanxuan1.f3322.net:8001/search/helper
```

搜索提示列表的本质是GET请求传参数，

每次文本框内容改变（有内容输入）就吧输入内容作为参数发送GET请求

事件使用`VantUI的input事件`监听文本框的内容变化

```vue
<template>
    <div class="search-popup">
        <!-- 搜索弹出框 -->
        <van-search
            v-model="searchValue"
            show-action
            :placeholder="placeholderValue"
            @search="onSearch"
            @cancel="onCancel"
            @input="onInput" 
        />

        <!-- 历史记录+热门搜索 -->
        <HotHistory 
            v-if="blockShow==1" 
            :historyKeywordList="historyKeywordList" 
            :hotKeywordList="hotKeywordList">
        </HotHistory>

        <!-- 搜索关键字提示列表 -->
        <SearchList
            v-if="blockShow==2" 
        ></SearchList>

        <!-- 搜索结果商品列表 -->
      
    </div>
</template>
```



### 表单Input事件

在接口管理的`request / api.js`中,

axios的POST请求参数的传递通过params

```js
import request from './request';

// homepage的页面的请求数据
export const GetHomePageList = () => {
    return request.get('/index/index')
};

// 搜索弹出框 Popup的数据
export const GetSearchPopupData = () => {
    return request.get('/search/index')
};

// propup弹出层的 搜索列表数据
export const GetSearchTopListData = (xxx) => {
    return request.get('/search/helper', {
        params: xxx;
        // params: {
        //     keyword: ''
        // }
    })
};
```

可以考虑把params的属性值那个对象最为函数调用时的参数

```vue
<script>
// 导入 历史记录和热门搜索 组件
import HotHistory from '@/components/HotHistory.vue'

// 导入搜索窗口数据接口请求api
import {GetSearchPopupData,GetSearchTopListData} from "@/request/api"

// 导入 搜索列表 组件
import SearchList from '@/components/SearchList.vue'

export default {
   data() {
     return {
       list: []
     }
   },
   methods: {
        onSearch(val) {
            // enter 输入的值
            console.log('onsearch',val);
            this.blockShow = 2;
        },
        onCancel() {
            // 点击取消，通过URL路径离场动画,返回上一层路径
            // this.$router.push('/home');
            this.$router.go(-1);
        },
        onInput(val){
            // 输入框内容变化时
            // 发送请求，获取实时输入的文本
            GetSearchTopListData({keyword: val}).then(result=>{
              this.list = result.data.data;
            })
        }
   }
```



### 组件数据的父传子 和 页面渲染

```vue
 <!-- 搜索关键字提示列表 -->
<SearchList v-if="blockShow==2" :searchTipList="searchTipList"></SearchList>
```

```vue
<template>
    <!--搜索列表-->
    <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        >
        <van-cell 
            v-for="(item,index) in searchTipList" 
            :key="index" 
            :title="item" />
    </van-list>
</template>

<script>
export default {
    data() {
        return {
            loading: false,
            finished: true,
        };
    },
    props:['searchTipList']
};
</script>
```





## 十三、搜索商品展示页面

### 数据请求

```js
//接口地址
http://kumanxuan1.f3322.net:8001/goods/list
```





## 十四、单个商品组件

### 组件数据爷爷传父再传子





## 十五、TabBar导航标签栏

也是个组件，单独写在`components / TabBar.vue`

然后再**在项目目录下的`App.vue`引入TabBar组件**

因为是根据TabBar的选项标签跳转指定页面，所以需要分别设置路由地址和页面组件

### 结构

```vue
<template>
       <!-- Tabbar -->
        <van-tabbar v-model="active">
            <van-tabbar-item icon="home-o" to="/home">首页</van-tabbar-item>
            <van-tabbar-item icon="label-o" to="/special">专题</van-tabbar-item>
            <van-tabbar-item icon="apps-o" to="/category">分类</van-tabbar-item>
            <van-tabbar-item icon="cart-o" to="/cart">购物车</van-tabbar-item>
            <van-tabbar-item icon="user-o" to="user">我的</van-tabbar-item>
        </van-tabbar>
</template>
```



### 路由

在`router / index.js`中设置各个选项对应的页面地址

五个路由地址和主页home是同级关系

```js
{
        // 主页
        path: '/home',
        name: 'Home',
        component: Home,
        children: [
            {
            	//搜素弹出层，home子路由
                path: '/home/searchPopup',
                name: 'SearchPopup',
                component: () =>
                    import ( /* webpackChunkName: "SearchPopup" */ '../views/SearchPopup.vue')
            }
        ]
    },
    // TabBar 选项栏
    {
        //tabbar Special专题选项
        path: '/special',
        name: 'Special',
        component: () =>
            import ( /* webpackChunkName: "Topic */ '../views/Special.vue')
    },
    {
        // tabbar 分类选项
        path: '/category',
        name: 'Category',
        component: () =>
            import ( /* webpackChunkName: "Category */ '../views/Category.vue')
    },
    {
        // tabbar 购物车选项
        path: '/cart',
        name: 'Cart',
        component: () =>
            import ( /* webpackChunkName: "Cart */ '../views/Cart.vue')
    },
    {
        // tabbar 我的选项
        path: '/user',
        name: 'User',
        component: () =>
            import ( /* webpackChunkName: "User */ '../views/User.vue')
    }
```



### 跳转页面

然后在 `view ` 中建立相对应的页面

```js
Project
|--components
		|--TabBar.vue   // 组件内容
|--router
		|-index.js      // 对应的路由
|--view							// 页面
		|--Home.vue
		|--Special.vue
		|--Category.vue
		|--Cart.vue
		|--User.vue
|--App.vue					// 导入

```



### 点击样式和路由

VantUI的Tabbar中选中项的样式是通过`v-model = active`中的变量active控制

active是number类型。默认是0，

所以会导致页面每次刷新后，无论路由地址是哪个都是第一个项目被选中

所以需要把active和选项的路由中的属性绑定

给各个选项对应的路由中的meta属性中设定不同的number

```js
 {
        //tabbar Special专题选项
        path: '/special',
        name: 'Special',
        meta: {
            TabBarActiveNumber: 1
        },
        component: () =>
            import ( /* webpackChunkName: "Topic */ '../views/Special.vue')
    },
    {
        // tabbar 分类选项
        path: '/category',
        name: 'Category',
        meta: {
            TabBarActiveNumber: 2
        },
        component: () =>
            import ( /* webpackChunkName: "Category */ '../views/Category.vue')
    },
      
  
```

再通过computed计算属性，将active的值修改为对应的路由的meta中的自定义属性的值

即可实现页面刷新后选中项目的样式不会跑错

```vue
<script>
export default {
    data() {
        return {
            // 选中的标签
            // 应该是等同与相应的路由
            // active: 0,
        };
    },
    mounted(){
        // console.log(this.$route.path);
        // console.log(this.$route.meta.TabBarActiveNumber);
    },
    computed:{
        active:{
            get(){
                return this.$route.meta.TabBarActiveNumber
            },
            set(){}
            
        }
    }
};
</script>
```





## 十六、POST登陆请求

### 数据接口

```js
//接口地址
http://kumanxuan1.f3322.net:8001/auth/loginByWeb
```

该接口用户信息例子：  

> username：**默认用户** ，pwd：**111111**
>
> username：**日**，pwd：**111111**     



### 设置接口

`request / api.js`中设定请求接口：

```js
//登陆请求
export const GoLogin = (params) => {
    return request.post('/auth/loginByWeb', params)
};
```



### 请求数据与渲染页面

给指定DOM元素上绑定事件，在事件中调用接口的请求函数：

```js
GoLogin({
  username:values["用户名"],
  pwd:values["密码"]
})
.then((result)=>{
                // console.log(result.data);
  
                if(result.data.errno == 0){
                    // 1.示登陆成功
                    Vue.prototype.$toast.success("登陆成功")

                    // 2.保存token到本地
                    localStorage.setItem("token",result.data.data.token);
                    localStorage.setItem("userInfo",JSON.stringify(result.data.data.userInfo))
                    
                    setTimeout(()=>{

                        // 3.遮罩层隐藏
                        this.overlayShow=!this.overlayShow;
                        // 4.将数据渲染到页面
                        this.nickname = result.data.data.userInfo.username;
                        this.avatarSrc = result.data.data.userInfo.avatar;                   
                    },1000)

                }else{
                     // 提示登陆失败
                     Vue.prototype.$toast("登陆失败 " + result.data.errmsg)
                    // 遮罩层隐藏
                      setTimeout(()=>{
                         this.overlayShow=!this.overlayShow;
                    },1000)
                }
            })


        },
```



### LocalStorage本地存储

将获得的数据存入localStorage

因为不存入本地存储的话，只有在触发事件中的POST数据请求函数后，才会获得数据然后渲染页面，

所以一旦页面刷新页面就会因为没有触发事件和请求函数，导致页面无法渲染

可以通过将请求获得的数据存入本地存储

然后在生命周期钩子函数created中，判断本地存储中是否有请求来的数据

如果有就将数据渲染到页面，没有就return

```js
created(){
        // 判断用户是否已经登陆
        // 判断localStorage中是否存有POST登陆请求获得的token
        let token = localStorage.getItem('token')
        if(token){
            // 用户已经是登陆状态了
            // 渲染页面
            let localStorageUserInfo = localStorage.getItem('userInfo')
            this.nickname = JSON.parse(localStorageUserInfo).username;
            this.avatarSrc = JSON.parse(localStorageUserInfo).avatar;
        }
        
    }
```





## 十七、商品详情页

详情页组件并不是个放在单个页面中的小组件，是一整个页面，

所以应该放在项目目录下的`views / ProductDetail.vue  `



### 跳转路由

通过事件给DOM元素添加跳转的路由`this.$router.push('/productDetail')`

```js
   methods:{
        // 跳转到商品详情页
        toProductDetail(){
            this.$router.push('/productDetail')
        }
    }
```



### 设置路由

`router / index.js`中添加上一条路由

```js
  {
        path: '/productDetail',
        name: 'User',
        component: () =>
            import ( /* webpackChunkName: "User */ '../views/ProductDetail.vue')
    }
```



### 设置请求接口

```js

```



### 请求数据

传输商品id





## 重复点击同一个路由报错的bug

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







## 路由守卫

(路由拦截)

```js
Vue.use(VueRouter);

const routes = [
  {
    path:'/XXX',
    name:'',
    meta:{},
    component:()=>import('../views/XXX.vue')
  },{},{}()
];

const router = new VueRouter({
  mode:"history",
  base:process.env.BASE_URL,
  routes
});

router.beforeEach((to,from,next)=>{
    console.log(to);  // 跳转到哪个路由
    console.log(from); // 从哪个路由跳转过来
    next(); // 放行
})

exports default router
```



`next()`不调用就无法跳转路由

```js

```



##  ”@/“路径提示配置

`jsconfig.json`

```js
{
    "compilerOptions": {
        "target": "ES6",
        "module": "commonjs",
        "allowSyntheticDefaultImports": true,
        "baseUrl": "./",
        "paths": {
            "@/*":["src/*"]
        }
    },
    "exclude": [
        "node_modules"
    ]
}
```