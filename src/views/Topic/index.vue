<template>
  <Nav />
  <div class="main-block" id="topic" v-if="topList.list.length">
    <!--1.  notic msg bar -->
    <van-notice-bar
      left-icon="volume-o"
      scrollable
      text="因为该项目是架空APP，导致各个商品话题为固定假数据，所以分页切换时页面无变化（实则已经切换但是数据一致），且无法点击话题查看内容。"
    />

    <!-- 2. list -->
    <Cards :list="topList.list" />

    <!-- 3. page -->
    <van-pagination
      v-model="currentPage"
      :page-count="topList.totalPage"
      mode="simple"
      @change="changPage"
    />
  </div>
</template>

<script>
// components
import Nav from "../../components/nav/NavBer.vue";
import Cards from "../../components/card/TopicCard.vue";
// hooks
import useTopicDetail from "../../hooks/TopicView/useTopDetail.js";
// utils
import loading from "../../utils/loading/loading";
import { reactive, ref } from "@vue/reactivity";

export default {
  components: { Nav, Cards },

  setup() {
    // pages
    const currentPage = ref(1);
    const changPage = () => {
      topList = useTopicDetail(currentPage.value);
    };

    // use hooks to get topic list
    let topList = reactive({});
    topList = useTopicDetail(currentPage.value);

    // show toast before the data rendered
    loading();

    return { currentPage, changPage, topList };
  },
};
</script>

<style></style>
