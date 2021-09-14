<template>
  <!-- main  -->
  <div v-if="$route.path == '/home'" id="home">
    <!-- 1. search bar -->
    <SearchBar />

    <!-- 2. banner swiper -->
    <Swiper :list="Lists.banner" />

    <!-- 3. channel icon -->
    <ChannelIcons :list="Lists.channel" />

    <!-- 4. brand list -->
    <Brands :list="Lists.brandList" />

    <!-- 5. category List -->
    <Categorys :list="Lists.categoryList" />
  </div>

  <!-- show popup -->
  <router-view></router-view>
</template>

<script>
// hooks
import useHomeDetailList from "../../hooks/useHomeDetailsList";
// components
import SearchBar from "./HomeSearchBar.vue";
import Swiper from "../../components/swiper/Swiper.vue";
import ChannelIcons from "./HomeChannels.vue";
import Brands from "./HomeBrands.vue";
import Categorys from "./HomeCategoryList.vue";
// utils
import loading from "../../utils/loading/loading";

export default {
  components: { SearchBar, Swiper, ChannelIcons, Brands, Categorys },

  setup() {
    // get and use Home Details Lists
    const { Lists } = useHomeDetailList();

    // show toast before the data rendered
    loading();

    return { Lists };
  },
};
</script>

<style></style>
