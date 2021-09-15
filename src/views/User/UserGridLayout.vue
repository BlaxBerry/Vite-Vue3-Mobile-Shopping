<template>
  <van-grid :column-num="3">
    <van-grid-item
      v-for="item in GridArray"
      :key="item"
      :icon="item.icon"
      :text="item.text"
      @click="item.click"
      :to="item.to ? item.to : ''"
    />
  </van-grid>
</template>

<script>
import { useRouter } from "vue-router";
// hooks
import useGrids from "../../hooks/userGrids";

export default {
  setup() {
    const router = useRouter();
    // use hook to get grid items
    const GridArray = useGrids(router);

    return { GridArray };
  },
};
</script>

<style lang="less" scoped>
.van-grid-item {
  /deep/.van-grid-item__content {
    padding: 0.9rem 0;
    i {
      font-size: 0.9rem;
    }
  }
}
</style>
