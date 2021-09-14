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

    return {
      onClickLeft,
      name,
    };
  },
};
</script>

<style></style>
