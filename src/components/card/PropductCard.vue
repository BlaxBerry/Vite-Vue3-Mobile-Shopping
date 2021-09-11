<template>
  <van-row justify="space-between" class="card-list">
    <van-col
      span="11"
      class="card"
      v-for="item in list"
      :key="item"
      @click="goDetail(item.id)"
    >
      <van-image :src="item.list_pic_url" lazy-load />
      <p class="card-title" v-text="item.name" />
      <p class="price">{{ "¥ " + item.retail_price.toFixed(2) + " 元" }}</p>
    </van-col>
  </van-row>
</template>

<script>
import { useRouter } from "vue-router";
export default {
  props: ["list"],

  setup(props) {
    const router = useRouter();

    // click to go to producter detail route
    let goDetail = (id) => {
      router.push("/detail");
    };

    return { goDetail };
  },
};
</script>

<style></style>
