<template>
  <div class="home">

    <!-- search 搜索框 -->
    <van-search v-model="SearchValue" input-align="center" placeholder="请输入搜索关键词" disabled shape="round"
  background="#efefefe"/>

    <!-- swipe 轮播图 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="#skyleblue">
      <van-swipe-item :key="item.id" v-for="item in banner">
        <img :src="item.image_url" width="100%" :alt="item.content">
      </van-swipe-item>
    </van-swipe>


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

export default {
  name: 'Home',
  data(){
    return {
      SearchValue:'',
      banner:[]        // 轮播图image_url
    }
  },
  created(){
    // 接口 "http://kumanxuan1.f3322.net:8001/index/index"
    // 拦截器
    // request.get("/index/index")
    GetHomePageList()
    .then((result)=>{

      // console.log(result.data.data);
      this.banner = result.data.data.banner;


    })
    .catch((err)=>{

      console.log('error');
      console.log(err);

    })
  },
  components: {
    // HelloWorld
  }
}
</script>
