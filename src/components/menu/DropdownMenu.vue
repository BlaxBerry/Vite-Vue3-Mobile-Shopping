<template>
  <van-dropdown-menu>
    <van-dropdown-item title="All" disabled />
    <van-dropdown-item v-model="value1" :options="option1" />
    <van-dropdown-item v-model="value2" :options="option2" />
  </van-dropdown-menu>
</template>

<script>
import { ref } from "@vue/reactivity";

export default {
  setup() {
    const value1 = ref(0);
    const value2 = ref("a");
    const option1 = [
      { text: "价格", value: 0 },
      { text: "安い順", value: 1 },
      { text: "高い順", value: 2 },
    ];
    const option2 = [
      { text: "种类", value: "a" },
      { text: "好评排序", value: "b" },
      { text: "销量排序", value: "c" },
    ];

    return {
      value1,
      value2,
      option1,
      option2,
    };
  },
};
</script>

<style></style>
