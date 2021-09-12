<template>
  <div
    v-for="(listItem, listName) in list"
    :key="listItem"
    v-show="listItem.length != 0"
    class="popup-keywords"
  >
    <div class="title">
      <h4>
        <van-icon
          :name="listName == 'historyList' ? 'clock-o' : 'fire-o'"
          size="0.5rem"
          :color="listName == 'hotList' ? '#ff6034' : ''"
        />
        {{ listName.replace("List", "").toUpperCase() }}
      </h4>
      <van-icon
        name="delete-o"
        @click="clear"
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
        :color="item.is_hot == 1 ? '#ff6034' : ''"
        v-text="item.keyword"
        @click="goPopupResList(item.keyword)"
      />
    </div>
  </div>
</template>

<script>
import { reactive } from "@vue/reactivity";
import { useStore } from "vuex";
import { Toast } from "vant";
// hooks
import usePopupSearchKeywords from "../../hooks/usePopupSearchKeywords";
import usePopupSearchResult from "../../hooks/usePopupSearchResult";
// api
import ClearHistory from "../../api/popup/clearPopupSearchHistory";

export default {
  emits: ["onShowResult"],

  setup(props, context) {
    const store = useStore();

    // use popup search history keywords
    let list = reactive([]);
    let { keywordsList } = usePopupSearchKeywords();
    list = keywordsList;

    // click tags
    let searchResult = reactive({});
    const goPopupResList = async (item) => {
      // 1. use Popup search result hook
      searchResult = await usePopupSearchResult(item);
      // 2. share the result as a common state by Vuex
      store.commit("getSearchResult", searchResult);
      // 3.click keywords tag hide keywordword, how results
      context.emit("onShowResult", false);
    };

    // clear history
    const clear = () => {
      ClearHistory().then(() => {
        let { keywordsList } = usePopupSearchKeywords();
        list.historyList = keywordsList.historyList;
        Toast.success("成功删除");
      });
    };

    return {
      list,
      goPopupResList,
      clear,
    };
  },
};
</script>

<style lang="less" scoped></style>
