<template>
  <van-grid :column-num="3">
    <van-grid-item
      v-for="item in gridArr"
      :key="item"
      :icon="item.icon"
      :text="item.text"
      @click="item.click"
      :to="item.to ? item.to : ''"
    />
  </van-grid>
</template>

<script>
import { reactive } from "@vue/reactivity";
import { useRouter } from "vue-router";
// utils
import clearUseInfo from "../../utils/userGrid/clearUserInfo";
import showBlockMsg from "../../utils/userGrid/showBlockMsg";

export default {
  setup() {
    const router = useRouter();

    // logout
    const logout = () => {
      // clear user info saved in localStorage
      clearUseInfo(router);
    };

    // Grid Items Array
    const gridArr = reactive([
      { text: "My", icon: "user-circle-o", to: "/user/info" },
      { text: "Orders", icon: "orders-o", to: "/orders" },
      { text: "Location", icon: "location-o", to: "/user/locations" },
      { text: "Coupons", icon: "coupon-o", to: "/coupons" },
      { text: "Service", icon: "service", click: showBlockMsg },
      { text: "Helper", icon: "question", click: showBlockMsg },
      { text: "Developing", icon: "lock", click: showBlockMsg },
      { text: "Developing", icon: "lock", click: showBlockMsg },
      { text: "Developing", icon: "lock", click: showBlockMsg },
      { text: "Developing", icon: "lock", click: showBlockMsg },
      { text: "Developing", icon: "lock", click: showBlockMsg },
      { text: "Logout", icon: "close", click: logout },
    ]);

    return { gridArr };
  },
};
</script>
