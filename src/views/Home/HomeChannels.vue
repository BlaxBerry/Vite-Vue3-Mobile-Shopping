<template>
  <van-grid
    v-if="list.length != 0"
    :column-num="list.length"
    class="home-channel"
  >
    <van-grid-item
      v-for="item in list"
      :key="item.id"
      :icon="item.icon_url"
      :text="item.name"
    />
  </van-grid>
</template>

<script>
export default {
  props: ["list"],
  setup(props) {},
};
</script>

<style></style>
