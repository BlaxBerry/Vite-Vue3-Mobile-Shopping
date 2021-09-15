<template>
  <div class="card" v-for="item in list" :key="item.id">
    <van-image lazy-load :src="item.scene_pic_url">
      <template v-slot:loading>
        <van-loading type="spinner" />
      </template>
      <template v-slot:error>加载失败</template>
    </van-image>
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
