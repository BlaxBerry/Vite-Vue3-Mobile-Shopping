<template>
  <div class="home">

    this is HomePage
    <hr>
    <van-button type="primary">主要按钮</van-button>
    <van-button type="info">信息按钮</van-button>
    <van-button type="default">默认按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>
    <hr>
    <van-stepper v-model="num" />
</div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'


export default {
  name: 'Home',
  data(){
    return {
      num: 0
    }
  },
  components: {
    // HelloWorld
  }
}
</script>
