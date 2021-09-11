<template>
  <transition name="van-slide-right" appear>
    <div class="popup" v-if="popupShow">
      <!-- 1. search bar -->
      <SearchBar />

      <!-- 2. search history + hot recommend-->
      <HistoryKeywords :keywordsList="keywordsList" />
    </div>
  </transition>
</template>

<script>
import { ref } from "vue";
// components
import SearchBar from "../PopupSearchBar.vue";
import HistoryKeywords from "./PopupSearchHistoryKeywords.vue";
// hooks
import usePopupSearchKeywords from "../../../hooks/usePopupSearchKeywords";

export default {
  components: { SearchBar, HistoryKeywords },

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

<style></style>
