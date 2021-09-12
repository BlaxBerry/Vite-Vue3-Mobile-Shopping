<template>
  <van-grid :column-num="3">
    <van-grid-item
      v-for="item in gridArr"
      :key="item"
      :icon="item.icon"
      :text="item.text"
    />
  </van-grid>
</template>

<script>
export default {
  setup() {
    return {
      gridArr: [
        { text: "My", icon: "user-circle-o" },
        { text: "Orders", icon: "orders-o" },
        { text: "Location", icon: "location-o" },
        { text: "Coupons", icon: "coupon-o" },
        { text: "Service", icon: "service-o" },
        { text: "Helper", icon: "question-o" },
        { text: "Developing", icon: "lock" },
        { text: "Developing", icon: "lock" },
        { text: "Developing", icon: "lock" },
        { text: "Developing", icon: "lock" },
        { text: "Developing", icon: "lock" },
        { text: "Logout", icon: "close" },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.van-grid {
  padding: 0.2rem;
}
</style>
