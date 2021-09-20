<template>
  <!-- 1. top -->
  <div class="home-block">
    <h3 class="title" v-text="info.name" />
    <p class="desc" v-text="info.goods_brief" />
    <p
      v-if="info.retail_price"
      class="price"
      v-text="'¥ ' + Number(info.retail_price).toFixed(2) + ' 元'"
    />
  </div>

</template>

<script>

export default {
  props: ["info", "attribute"],
  setup(props) {},
};
</script>

