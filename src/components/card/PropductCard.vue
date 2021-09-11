<template>
  <van-row justify="space-between" class="card-list">
    <van-col span="12" class="card" v-for="item in 6" :key="item">
      <van-image src="https://img.yzcdn.cn/vant/cat.jpeg" />
      <p class="card-title">vghbjkn</p>
      <p class="price">{{ pricefilted }}</p>
    </van-col>
  </van-row>
</template>

<script>
import filterPrice from "../../utils/filters/priceFilter";
export default {
  setup() {
    // use price filter
    let pricefilted = filterPrice(109);

    return { pricefilted };
  },
};
</script>

<style></style>
