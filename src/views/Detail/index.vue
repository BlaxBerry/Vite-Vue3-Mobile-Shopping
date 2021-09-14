<template>
  <div id="detail">
    <!-- 1. swiper/ -->
    <Swiper :list="goodsDetail.gallery" v-if="goodsDetail.gallery.length" />
    <!--  img -->
    <van-image
      v-if="!goodsDetail.gallery.length && goodsDetail.info.primary_pic_url"
      lazy-load
      :src="goodsDetail.info.primary_pic_url"
    />

    <!-- 2. quality promise bar -->
    <Tips v-if="goodsDetail.isShowDetail" />

    <!-- 3. info -->
    <Info
      :info="goodsDetail.info"
      :attribute="goodsDetail.attribute"
      v-if="goodsDetail.isShowDetail"
    />

    <!-- 4. detail content -->
    <div v-html="goodsDetail.info.goods_desc" />

    <!-- 6. Issue question -->
    <Issue :issue="goodsDetail.issue" v-if="goodsDetail.isShowDetail" />

    <!-- 7. Recommend List-->
    <Recommend :list="goodsDetail.recommend" v-if="goodsDetail.isShowDetail" />

    <!-- 8. GoodAction Bar -->
    <GoodActionBar />
  </div>
</template>

<script>
import { useRoute } from "vue-router";
// hooks
import useGoodsDetail from "../../hooks/useGoodsDetail";
// components
import Swiper from "../../components/swiper/Swiper.vue";
import Tips from "../../components/tips/qualityPromise.vue";
import Info from "./DetailInfo.vue";
import Issue from "./DetailIssue.vue";
import Recommend from "./DetailRecommendList.vue";
import GoodActionBar from "./DetailGoodActionBar.vue";
// utils
import loading from "../../utils/loading/loading";

export default {
  components: { Swiper, Tips, Info, Issue, Recommend, GoodActionBar },
  setup() {
    const route = useRoute();

    // use Goods Detail hook
    let goodID = route.query.id;
    let { goodsDetail } = useGoodsDetail(goodID);

    //  show toast before the data rendered
    loading();

    return { goodsDetail };
  },
};
</script>

<style></style>
