<template>
  <!-- main  -->
  <div v-if="$route.path == '/home'">
    <!-- 1. search bar -->
    <SearchBar />

    <!-- 2. banner swiper -->
    <Swiper :list="Lists.banner" />

    <!-- 3. channel icon -->
    <ChannelIcons :list="Lists.channel" />

    <!-- 4. brand list -->
    <Brands :list="Lists.brandList" />
  </div>

  <!-- show popup -->
  <router-view></router-view>
</template>

<script>
// hooks
import useHomeDetailList from "../../hooks/useHomeDetailsList";
// components
import SearchBar from "./HomeSearchBar.vue";
import Swiper from "./HomeSwiper.vue";
import ChannelIcons from "./HomeChannels.vue";
import Brands from "./HomeBrands.vue";

export default {
  components: { SearchBar, Swiper, ChannelIcons, Brands },

  setup() {
    // get and use Home Details Lists
    const { Lists } = useHomeDetailList();

    return { Lists };
  },
};
</script>

<style></style>
