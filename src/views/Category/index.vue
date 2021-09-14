<template>
  <Nav />

  <div id="category">
    <div class="left-nav">
      <van-sidebar v-model="active">
        <van-sidebar-item
          :title="item.name"
          v-for="item in SideItemList"
          :key="item.id"
          @click="clickSideItem(item.id)"
        />
      </van-sidebar>
    </div>
    <div class="right-content">
      <van-image :src="CurrentContnet.warpImg" />
      <Divider :text="CurrentContnet.name" />
      <Divider :text="CurrentContnet.desc" />
      <van-grid :column-num="3">
        <van-grid-item
          v-for="item in CurrentContnet.list"
          :key="item"
          :icon="item.wap_banner_url"
          :text="item.name"
          @click="clickSideItem(item.id)"
        />
      </van-grid>
    </div>
  </div>
</template>

<script>
import { reactive, ref } from "vue";
// components
import Nav from "../../components/nav/NavBer.vue";
import Divider from "../../components/titles/Divider.vue";
// utils
import loading from "../../utils/loading/loading";
// hooks
import useCategorySideList from "../../hooks/Category/useCategorySideList";
import useCategoryCurrentContnet from "../../hooks/Category/useCategoryCurrentContnet";

export default {
  components: { Nav, Divider },
  setup() {
    // hooks use Category Detail
    let { SideItemList, CurrentContnet } = useCategorySideList();

    // slider nav
    const active = ref(0);

    // click slide item to get new current content
    const clickSideItem = (id) => {
      useCategoryCurrentContnet(CurrentContnet, id);
      loading();
    };

    // show toast before the data rendered
    loading();

    return {
      active,
      SideItemList,
      clickSideItem,
      CurrentContnet,
    };
  },
};
</script>

<style></style>
