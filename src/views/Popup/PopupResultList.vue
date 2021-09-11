<template>
  <!-- 1. dropdown menu -->
  <Menu v-if="!isEmptyRes" :list="resMenu" />

  <!-- 2. card list -->
  <Cards v-if="!isEmptyRes" :list="resList" />

  <!-- 3. empty -->
  <Empty v-if="isEmptyRes" />
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
// components
import Menu from "../../components/menu/DropdownMenu.vue";
import Cards from "../../components/card/PropductCard.vue";
import Empty from "../../components/empty/Empty.vue";

export default {
  components: { Menu, Cards, Empty },

  setup() {
    // get search result from Vuex
    const store = useStore();
    // 1. empty list ?
    let isEmptyRes = computed(() => store.getters.isEmptyList);
    // 2. card list
    let resList = computed(() => store.getters.list);
    // 3. menu item
    let resMenu = computed(() => store.getters.menu);

    return {
      isEmptyRes,
      resList,
      resMenu,
    };
  },
};
</script>

<style></style>
