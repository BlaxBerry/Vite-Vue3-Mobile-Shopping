<template>
  <van-action-bar class="detail-action-bar">
    <van-action-bar-icon
      v-for="item in icons"
      :key="item"
      :icon="item.icon"
      :text="item.text"
      color="#ee0a24"
      @click="item.click"
    />
    <van-action-bar-button
      v-for="item in btns"
      :key="item"
      :type="item.type"
      :text="item.text"
      @click="item.click"
    />
  </van-action-bar>
</template>

<script>
import { useRouter } from "vue-router";
// utils
import handleGoodActionBar from "../../utils/detail/goodActionBar";

export default {
  setup() {
    const router = useRouter();

    let { goService, goShop, goCart, buyNow } = handleGoodActionBar(router);

    return {
      icons: [
        { icon: "chat-o", text: "Serve", click: goService },
        { icon: "shop-o", text: "Shop", click: goShop },
      ],
      btns: [
        { type: "warning", text: "加入购物车", click: goCart },
        { type: "danger", text: "立刻购买", click: buyNow },
      ],
    };
  },
};
</script>

<style></style>
