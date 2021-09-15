<template>
  <Nav />

  <div id="category">
    <div class="left-nav" v-if="SideItemList">
      <van-sidebar v-model="active">
        <van-sidebar-item
          :title="item.name"
          v-for="item in SideItemList"
          :key="item.id"
          @click="clickSideItem(item.id)"
        />
      </van-sidebar>
    </div>
    <div class="right-content" v-if="SideItemList.length">
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
      <Empty v-if="CurrentContnet.name && !CurrentContnet.list.length" />
    </div>
  </div>

  <Empty v-if="!SideItemList.length" />
</template>

<script>
import { ref } from "vue";
// components
import Nav from "../../components/nav/NavBer.vue";
import Divider from "../../components/titles/Divider.vue";
import Empty from "../../components/empty/Empty.vue";
// utils
import loading from "../../utils/loading/loading";
// hooks
import useCategorySideList from "../../hooks/Category/useCategorySideList";
import useCategoryCurrentContnet from "../../hooks/Category/useCategoryCurrentContnet";
import { useRoute } from "vue-router";

export default {
  components: { Nav, Divider, Empty },
  setup() {
    // hooks use Category Detail
    let { SideItemList, CurrentContnet } = useCategorySideList();

    // slider nav
    const active = ref(0);

    // click slide item to get new current content
    const clickSideItem = (id) => {
      useCategoryCurrentContnet(CurrentContnet, id);
    };

    const route = useRoute();
    // if from home view's cahnnel, according to route.params
    if (route.params.id) clickSideItem(route.params.id);

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
