<template>
  <van-row justify="space-between">
    <van-col span="6">
      <van-image round :src="avatar" />
    </van-col>
    <van-col span="12">
      <div>点击登陆</div>
    </van-col>
    <van-col span="6">
      <van-button
        type="primary"
        color="linear-gradient(to right, #ff6034, #ee0a24)"
        v-text="'Login'"
        is-link
        @click="showLoginPopup"
      />
      <!-- <van-button type="primary">Logout</van-button> -->
    </van-col>
  </van-row>
</template>

<script>
import pic from "../../assets/images/avatar.png";
import { ref } from "vue";
import { useStore } from "vuex";

export default {
  emits: ["onShowLoginPopup"],
  setup() {
    // avatar
    let avatar = ref("");
    avatar.value = pic;

    // click to show user login popup
    const store = useStore();
    let showLoginPopup = () => {
      store.commit("showUserLoginPopup");
    };

    return {
      avatar,
      showLoginPopup,
    };
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
