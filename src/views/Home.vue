<template>
  <div class="home">
    
    <h1>Vue+VantUI 移动端电商项目</h1>

    <!-- search 搜索框 -->
    <van-search 
      v-model="SearchValue"  
      input-align="center" 
      placeholder="请输入搜索关键词" 
      disabled 
      shape="round"
      background="#efefefe" 
      @click="$router.push('/home/searchPopup').catch(err=>{})"
    />

    <!-- swipe 轮播图 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="#skyleblue">
      <van-swipe-item :key="item.id" v-for="item in banner">
        <img :src="item.image_url" width="100%" :alt="item.content">
      </van-swipe-item>
    </van-swipe>

    <!-- popup 搜索弹出层-->
    <transition name="slide">
      <router-view></router-view>
    </transition>

    <!-- VantUI动画过渡
      <transition name="van-slide-left">
       <router-view></router-view>
    </transition> -->

    <!-- 分类列表 -->
    <div class="categoryList">
        <Tips></Tips>
        <div class="newGoods" v-for="item in categoryList" :key="item.id">
            <van-divider>{{item.name}}</van-divider>
            <Products
                :searchGoodsList = "item.goodsList"
            ></Products>
        </div>
    </div>

</div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
// 导入axios
// import axios from "axios";
// 导入拦截器
// import request from "@/request/request.js";
// 导入 api中的接口请求（接口请求管理的JS文件）
import {GetHomePageList} from '@/request/api.js'

import Products from '@/components/Products.vue'
import Tips from '@/components/Tips.vue'

export default {
  name: 'Home',
  data(){
    return {
      SearchValue:'',
      // 轮播图image_url
      banner:[],        
      // 新品发售
      newGoodsList:[],
      // 分类
      categoryList:[]
    }
  },
  created(){
    // 接口 "http://kumanxuan1.f3322.net:8001/index/index"
    // 拦截器
    // request.get("/index/index")
    GetHomePageList()
    .then((result)=>{

      // console.log(result.data.data);
      console.log("\n\n项目说明：Vue + VantUI 电商项目(Mobile移动端)\n\n技术运用：Vue-cli4、vuex、vue-router、axios、LocalStorage\n\n");
      // 轮播图
      this.banner = result.data.data.banner;
      // 新品发售
      this.newGoodsList = result.data.data.newGoodsList;
      // 分类
      this.categoryList = result.data.data.categoryList;

    })
    .catch((err)=>{

      console.log('error');
      console.log(err);

    })
  },
  components: {
    // HelloWorld
    Products,
    Tips
  }
}
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

// 分类商品
.categoryList {
  padding-bottom: 0.50rem;

  .newGoods {
    background-color: #fff;
    padding: 0.10rem 0.20rem;

    .van-divider {
      font-size: 0.20rem;
      font-weight:700;
      color: #000000;
    }
}
}

</style>