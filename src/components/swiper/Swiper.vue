<template>
  <van-swipe
    :autoplay="3000"
    lazy-render
    v-if="list.length != 0"
    indicator-color="#ff6034"
  >
    <van-swipe-item v-for="item in list" :key="item.id">
      <img :src="item.img_url || item.image_url" />
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
