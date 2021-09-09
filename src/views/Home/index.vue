<template>
  <!-- search bar -->
  <van-search
    v-model="searchVal"
    disabled
    background="white"
    placeholder="Search Goods"
  />

  <!-- 1. banner swiper -->
  <Swiper :list="Lists.banner" />

  <!-- 2. channel icon -->
  <ChannelIcons :list="Lists.channel" />

  <!-- 3. brand list -->
  <Brands :list="Lists.brandList"/>
</template>

<script>
// hooks
import useHomeDetailList from "../../hooks/useHomeDetailsList";
// components
import Swiper from "./HomeSwiper.vue";
import ChannelIcons from "./HomeChannels.vue";
import Brands from "./HomeBrands.vue";

export default {
  components: { Swiper, ChannelIcons, Brands },

  setup() {
    const searchVal = "";

    // get and use Home Details Lists
    const { Lists } = useHomeDetailList();

    return {
      searchVal,
      Lists,
    };
  },
};
</script>

<style></style>
