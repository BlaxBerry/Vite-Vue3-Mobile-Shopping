<template>
  <!-- history -->
  <div class="popup-history">
    <div class="title">
      <h4>
        <van-icon name="clock-o" size="0.5rem" />
        History
      </h4>
      <van-icon
        name="delete-o"
        @click="keywordsList.historyList = []"
        v-if="keywordsList.historyList.length != 0"
      />
    </div>
    <div class="tags">
      <van-tag
        v-for="item in keywordsList.historyList"
        :key="item"
        plain
        type="default"
        v-text="item"
        @click="goPopupResList(item)"
      />
    </div>
  </div>

  <!-- hot -->
  <div class="popup-hot">
    <div class="title">
      <h4>
        <van-icon name="fire-o" size="0.5rem" />
        Hot
      </h4>
    </div>
    <div class="tags">
      <van-tag
        v-for="item in keywordsList.hotList"
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
import { useRouter } from "vue-router";

export default {
  props: ["keywordsList"],

  setup(props) {
    // go to search result list route
    const router = useRouter();
    const goPopupResList = (item) => {
      router.push("/home/search-result");
    };

    return {
      goPopupResList,
    };
  },
};
</script>

<style lang="less" scoped></style>
