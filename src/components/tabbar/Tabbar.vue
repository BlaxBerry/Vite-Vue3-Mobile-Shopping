<template>
  <van-tabbar
    v-model="active"
    route
    class="van-safe-area-bottom"
    active-color="#ff6034"
  >
    <van-tabbar-item icon="home-o" to="/home">Home</van-tabbar-item>
    <van-tabbar-item icon="apps-o" to="/category">Category</van-tabbar-item>
    <van-tabbar-item icon="label-o" to="/topic">Topic</van-tabbar-item>
    <van-tabbar-item icon="shopping-cart-o" :badge="cartAmount" to="/cart"
      >Cart</van-tabbar-item
    >
    <van-tabbar-item icon="user-o" to="/user">My</van-tabbar-item>
  </van-tabbar>
</template>

<script>
import { computed, ref } from "@vue/reactivity";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();

    // selected
    const active = ref(0);

    // cart amount
    const cartAmount = computed(() => store.state.cart.cartAmount);
    store.dispatch("getCartAmount");

    return { active, cartAmount };
  },
};
</script>

<style lang="less" scoped>
.van-tabbar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9999;
}
</style>
