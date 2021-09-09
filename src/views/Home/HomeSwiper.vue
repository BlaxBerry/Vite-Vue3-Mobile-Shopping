<template>
  <van-swipe
    v-if="list.length != 0"
    class="home-swipe"
    :autoplay="3000"
    indicator-color="white"
  >
    <van-swipe-item v-for="item in list" :key="item.id">
      <img :src="item.image_url" :alt="item.name" />
    </van-swipe-item>
  </van-swipe>
</template>

<script>
export default {
  props: ["list"],
  setup(props) {},
};
</script>

<style></style>
