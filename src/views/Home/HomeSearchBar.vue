<template>
  <van-search
    disabled
    background="white"
    placeholder="Search Goods"
    @click="goPopup"
  />
</template>

<script>
import { useRouter } from "vue-router";

export default {
  setup() {
    // go to popup route
    const router = useRouter();
    const goPopup = () => {
      router.push("/home/search");
    };

    return { goPopup };
  },
};
</script>

<style></style>
