<template>
  <Nav />

  <div id="cart">
    <!--1.  notic msg bar -->
    <van-notice-bar left-icon="question-o" text="向左滑动商品卡片，检查更多内容" />

    <!-- cart cards -->
    <Cards :list="5" />

    <!-- empty -->
    <Empty />
  </div>

  <SubmitBar />
</template>

<script>
// components
import Nav from "../../components/nav/NavBer.vue";
import Cards from "./CartCards.vue";
import Empty from "../../components\/empty/Empty.vue";
import SubmitBar from "./CartSubmit.vue";

export default {
  components: { Nav, Cards, Empty, SubmitBar },
  setup() {},
};
</script>
