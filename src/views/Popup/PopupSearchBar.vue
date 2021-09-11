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
  emits: ["onGetInputVal"],

  setup(props, context) {
    const router = useRouter();
    const store = useStore();

    // search
    let searchVal = ref("");
    let searchResult = reactive({});
    let onSearch = async () => {
      // 1. use Popup search result hook
      searchResult = await usePopupSearchResult(searchVal.value.trim());
      // 2. share the inputVal and result as common state by Vuex
      store.commit("getSearchValue", searchVal.value);
      store.commit("getSearchResult", searchResult);
      // 3. keywords and result show/hide according to SearchBar's value
      context.emit("onGetInputVal", searchVal.value);
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
