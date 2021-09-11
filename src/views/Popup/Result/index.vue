<template>
  <div class="popup">
    <!-- 1. search bar -->
    <SearchBar />

    <!-- 2. dropdown menu -->
    <Menu />

    <!-- 3. card list -->
    <Cards v-if="!isEmptyRes"/>

    <!-- 4. empty -->
    <Empty v-if="isEmptyRes"/>
  </div>
</template>

<script>
import { ref } from "vue";
// components
import SearchBar from "../PopupSearchBar.vue";
import Menu from "../../../components/menu/DropdownMenu.vue";
import Cards from "../../../components/card/PropductCard.vue";
import Empty from "../../../components/empty/Empty.vue";

export default {
  components: { SearchBar, Menu, Cards, Empty },
  setup() {
    let isEmptyRes = ref(false);

    return {
      isEmptyRes,
    };
  },
};
</script>

<style></style>
