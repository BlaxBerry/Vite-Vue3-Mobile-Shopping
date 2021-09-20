<template>
  <Nav />

  <div id="cart">
    <!--1.  notic msg bar -->
    <van-notice-bar
      left-icon="question-o"
      text="向左滑动商品卡片，检查更多内容"
    />

    <!-- cart cards -->
    <Cards v-if="cartDetail.list.length" :list="cartDetail.list" />

    <!-- empty -->
    <Empty v-if="!cartDetail.list.length" />
  </div>

  <SubmitBar />
</template>

<script>
// components
import Nav from "../../components/nav/NavBer.vue";
import Cards from "../../components/card/CartCards.vue";
import Empty from "../../components/empty/Empty.vue";
import SubmitBar from "./CartSubmit.vue";
// hooks
import useCartDetail from "../../hooks/Cart/useCartDetail";

export default {
  components: { Nav, Cards, Empty, SubmitBar },
  setup() {
    // hooks
    let cartDetail = useCartDetail();

    return { cartDetail };
  },
};
</script>
