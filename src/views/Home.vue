<template>
  <div class="home">

    <van-search v-model="SearchValue" input-align="center" placeholder="请输入搜索关键词" disabled shape="round"
  background="#efefefe"/>

    <p>hello</p>
</div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
// 导入axios
// import axios from "axios";
// 导入拦截器
import request from "@/request/request.js";

export default {
  name: 'Home',
  data(){
    return {
      SearchValue:''
    }
  },
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
  },
  components: {
    // HelloWorld
  }
}
</script>
