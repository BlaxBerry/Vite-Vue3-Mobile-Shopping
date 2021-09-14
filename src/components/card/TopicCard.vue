<template>
  <div class="card" v-for="item in list" :key="item.id">
    <van-image lazy-load :src="item.scene_pic_url" />
    <h3 class="title">{{ item.title }}</h3>
    <p class="subtitle">{{ item.subtitle }}</p>
  </div>
</template>

<script>
export default {
  props: ["list"],
  setup(props) {},
};
</script>

<style></style>
