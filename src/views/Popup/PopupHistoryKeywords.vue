<template>
  <div
    v-for="(listItem, listName) in list"
    :key="listItem"
    class="popup-keywords"
  >
    <div class="title">
      <h4>
        <van-icon
          :name="listName == 'historyList' ? 'clock-o' : 'fire-o'"
          size="0.5rem"
        />
        {{ listName.replace("List", "").toUpperCase() }}
      </h4>
      <van-icon
        name="delete-o"
        @click="list.historyList = []"
        v-if="listName == 'historyList'"
      />
    </div>
    <!-- Search history List tags-->
    <div class="tags" v-if="listName == 'historyList'">
      <van-tag
        v-for="item in listItem"
        :key="item"
        plain
        :type="item.is_hot == 1 ? 'danger' : 'default'"
        v-text="item"
        @click="goPopupResList(item)"
      />
    </div>
    <!-- Hot List tags-->
    <div class="tags" v-if="listName == 'hotList'">
      <van-tag
        v-for="item in listItem"
        :key="item"
        plain
        :type="item.is_hot == 1 ? 'danger' : 'default'"
        v-text="item.keyword"
        @click="goPopupResList(item.keyword)"
      />
    </div>
  </div>
</template>

<script>
import { reactive } from "@vue/reactivity";
import { useStore } from "vuex";
// hooks
import usePopupSearchResult from "../../hooks/usePopupSearchResult";

export default {
  props: ["list"],
  emits: ["onShowResult"],

  setup(props, context) {
    const store = useStore();
    let searchResult = reactive({});

    // click tags
    const goPopupResList = async (item) => {
      // 1. use Popup search result hook
      searchResult = await usePopupSearchResult(item);
      // 2. share the result as a common state by Vuex
      store.commit("getSearchResult", searchResult);
      // 3.click keywords tag hide keywordword, how results
      context.emit("onShowResult", false);
    };

    return {
      goPopupResList,
    };
  },
};
</script>

<style lang="less" scoped></style>
