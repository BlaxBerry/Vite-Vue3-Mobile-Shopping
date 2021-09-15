<template>
  <van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit">
    <van-checkbox v-model="checked">全选</van-checkbox>
  </van-submit-bar>
</template>

<script>
import { ref } from "@vue/reactivity";
// utils
import showSubmitDialog from "../../utils/cart/showSubmitDialog";

export default {
  setup() {
    let checked = ref(true);
    const onSubmit = () => showSubmitDialog();

    return { checked, onSubmit };
  },
};
</script>

<style lang="less" scoped>
.van-submit-bar {
  bottom: 1.3rem;
}
</style>
