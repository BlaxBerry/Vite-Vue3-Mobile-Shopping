<template>
  <van-nav-bar fixed :title="name" left-arrow @click-left="onClickLeft" />
</template>

<script>
import { useRoute, useRouter } from "vue-router";

export default {
  setup() {
    const route = useRoute();
    const router = useRouter();

    let name = route.meta.name;
    const onClickLeft = () => router.go(-1);

    return { onClickLeft, name };
  },
};
</script>

<style lang="less" scoped>
.van-nav-bar {
  background: linear-gradient(to right, #ff6034, #ee0a24);
  /deep/.van-icon,
  /deep/.van-nav-bar__title {
    color: #fff;
    font-size: 0.5rem;
  }
}
</style>
