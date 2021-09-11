<template>
  <transition name="van-slide-right" appear>
    <div class="popup" v-if="isPopupShow">
      <!-- 1. search bar -->
      <SearchBar @onGetInputVal="toggleKeywordsOrResult" />

      <!-- 2. propup search history keywords -->
      <Keywords v-if="isShowKeywords" @onShowResult="showResult" />

      <!-- 3. propup search result list -->
      <ResultList v-if="!isShowKeywords" />
    </div>
  </transition>
</template>

<script>
import { ref } from "vue";
// components
import SearchBar from "./PopupSearchBar.vue";
import Keywords from "./PopupHistoryKeywords.vue";
import ResultList from "./PopupResultList.vue";

export default {
  components: { SearchBar, Keywords, ResultList },

  setup() {
    // popup route show/hide
    let isPopupShow = ref(true);

    // keywords and result show/hide according to SearchBar's value
    let isShowKeywords = ref(true);
    let toggleKeywordsOrResult = (value) => {
      isShowKeywords.value = value ? false : true;
    };

    // click keywords tag to hide keywordword, how results
    let showResult = (value) => {
      isShowKeywords.value = value;
    };

    return {
      isPopupShow,
      isShowKeywords,
      toggleKeywordsOrResult,
      showResult,
    };
  },
};
</script>

<style></style>
