<template>
  <!-- history -->
  <div class="popup-history">
    <div class="title">
      <h4>
        <van-icon name="clock-o" size="0.5rem" />
        History
      </h4>
      <van-icon name="delete-o" />
    </div>
    <div class="tags">
      <van-tag
        v-for="item in keywordsList.historyList"
        :key="item"
        plain
        type="default"
        v-text="item"
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
      <van-icon name="delete-o" />
    </div>
    <div class="tags">
      <van-tag
        v-for="item in keywordsList.hotList"
        :key="item"
        plain
        :type="item.is_hot == 1 ? 'danger' : 'default'"
        v-text="item.keyword"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: ["keywordsList"],
  setup(props) {},
};
</script>

<style lang="less" scoped></style>
