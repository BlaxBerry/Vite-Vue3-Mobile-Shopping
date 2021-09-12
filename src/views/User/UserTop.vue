<template>
  <van-row justify="space-between">
    <van-col span="6">
      <van-image round :src="user.avatar" />
    </van-col>
    <van-col :span="user.token ? '18' : '12'" v-text="user.nickname" />
    <van-col span="6" v-if="!user.token">
      <van-button
        type="primary"
        color="linear-gradient(to right, #ff6034, #ee0a24)"
        v-text="'Login'"
        is-link
        round
        @click="showLoginPopup"
      />
    </van-col>
  </van-row>
</template>

<script>
import { computed, reactive } from "vue";
import { useStore } from "vuex";

export default {
  emits: ["onShowLoginPopup"],
  setup() {
    const store = useStore();

    let user = reactive({});
    let userLocalStorage = JSON.parse(localStorage.getItem("user"));

    // 页面加载时判断
    if (userLocalStorage) {
      // if there is user info in localStorage, already Login
      // get the user info from localStorage
      user = userLocalStorage;
    } else {
      // if there no user info in localStorage, not login yet
      // get user info from Vuex's state
      user = computed(() => store.state.user);
    }

    // click to show user login popup
    let showLoginPopup = () => {
      // if there no user info in localStorage,show login popup
      if (!userLocalStorage) store.commit("showUserLoginPopup");
    };

    return { user, showLoginPopup };
  },
};
</script>

<style lang="less" scoped>
.van-row {
  padding: 4%;
  align-items: center;
  text-align: center;
  font-size: 0.5rem;
  background: #000000;
  color: #ffffff;
  font-weight: 700;
}
</style>
