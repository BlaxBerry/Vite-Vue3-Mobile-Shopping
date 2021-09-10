<template>
  <van-search
    background="white"
    show-action
    placeholder="Search Goods"
    v-model="searchVal"
    @search="onSearch"
  >
    <template #action>
      <div @click="onCancel">Search</div>
    </template>
  </van-search>
</template>

<script>
import { ref } from "@vue/reactivity";
import { useRouter } from "vue-router";

export default {
  setup() {
    // search
    let searchVal = ref("s");
    let onSearch = () => {};

    // close popup back to the prev route
    let router = useRouter();
    let onCancel = () => {
      router.go(-1);
    };

    return { searchVal, onSearch, onCancel };
  },
};
</script>

<style></style>
