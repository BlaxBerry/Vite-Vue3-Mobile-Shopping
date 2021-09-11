<template>
  <van-dropdown-menu>
    <van-dropdown-item title="All" disabled />
    <van-dropdown-item
      v-model="menuPriceSelected"
      :options="menuPriceItems"
      @change="changeSelected"
    />
    <van-dropdown-item
      v-model="menuCategarySelected"
      :options="menuCategaryItems"
      @change="changeSelected"
    />
  </van-dropdown-menu>
</template>

<script>
import { computed, ref } from "@vue/reactivity";
import { useStore } from "vuex";
import usePopupSearchResult from "../../hooks/usePopupSearchResult";

export default {
  props: ["list"],
  setup(props) {
    const store = useStore();

    // 1. menu price item arr + selected
    const menuPriceSelected = ref("desc");
    const menuPriceItems = [
      { text: "高い順", value: "desc" },
      { text: "安い順", value: "asc" },
    ];

    // 2. menu category item arr + selected
    const menuCategarySelected = ref(0);
      // 2.1. 修改数组中对象的属性名
    const menuCategaryItems = JSON.parse(
      JSON.stringify(props.list)
        .replace(/name/g, "text")
        .replace(/id/g, "value")
    );
      // 2.2. 然后赋值
    menuCategaryItems.map((item) => {
      if (item.checked) menuCategarySelected.value = item.value;
    });

    // 3. search input value from Vuex
    let searchVal = computed(() => {
      return store.state.searchValue;
    });

    // 4. change menu item to order the result
    let changeSelected = async () => {
      // 4.1. use hook get search result
      let searchResult = await usePopupSearchResult(
        searchVal.value,
        menuPriceSelected.value,
        menuCategarySelected.value.toString()
      );
      // 4.2. share the inputVal and result as common state by Vuex
      store.commit("getSearchResult", searchResult);
      console.log(searchResult);
    };

    return {
      menuPriceItems,
      menuPriceSelected,
      menuCategaryItems,
      menuCategarySelected,
      changeSelected,
    };
  },
};
</script>

<style></style>
