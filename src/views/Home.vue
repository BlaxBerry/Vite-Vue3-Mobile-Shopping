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


export default {
  name: 'Home',
  data(){
    return {
      SearchValue:''

    }
  },
  components: {
    // HelloWorld
  }
}
</script>
