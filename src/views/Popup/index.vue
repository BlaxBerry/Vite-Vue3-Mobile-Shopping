<template>
  <transition name="van-slide-right" appear>
    <div class="popup" v-if="popupShow">
      <!-- 1. search bar -->
      <SearchBar />

      <!-- 2. search history + hot recommend-->
      <History :keywordsList="keywordsList" />

      <!-- 3.  -->
    </div>
  </transition>
</template>

<script>
import { ref } from "vue";
// components
import SearchBar from "./PopupSearchBar.vue";
import History from "./PopupHistory.vue";
// hooks
import usePopupSearchKeywords from "../../hooks/usePopupSearchKeywords";

export default {
  components: { SearchBar, History },

  setup() {
    // popup route show/hide
    let popupShow = ref(true);

    // use popup search history keywords
    let { keywordsList } = usePopupSearchKeywords();

    return {
      popupShow,
      keywordsList,
    };
  },
};
</script>

<style lang="less" scoped>
// Vue3's show/hide animation
/* 
.slide-fade-enter-from,
 .slide-fade-leave-to {
   transform: translateX(100%);
   opacity: 0;
 }
 .slide-fade-enter-active {
   transition: all 0.3s ease-out;
 }
 .slide-fade-leave-active {
   transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
 }
 */
</style>
