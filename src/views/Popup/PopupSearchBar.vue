<template>
  <van-search
    background="white"
    show-action
    placeholder="Search Goods"
    v-model="searchVal"
    @search="onSearch"
  >
    <template #action>
      <div @click="onCancel">Cancel</div>
    </template>
  </van-search>
</template>

<script>
import { reactive, ref } from "@vue/reactivity";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
// hooks
import usePopupSearchResult from "../../hooks/usePopupSearchResult";

export default {
  setup() {
    const router = useRouter();
    const store = useStore();

    // search
    let searchVal = ref("");
    let searchResult = reactive({});
    let onSearch = async () => {
      // 1. go to result route
      router.push("/home/search-result");
      // 2. use Popup search result hook
      searchResult = await usePopupSearchResult(searchVal.value);
      // 3. share the result as a common state by Vuex
      store.commit('getSearchResult', searchResult)
    };

    // close popup back to the prev route
    let onCancel = () => {
      router.go(-1);
    };

    return {
      searchVal,
      onSearch,
      searchResult,
      onCancel,
    };
  },
};
</script>

<style></style>
