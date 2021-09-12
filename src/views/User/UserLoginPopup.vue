<template>
  <van-popup
    v-model:show="isShowPopup"
    @click-close-icon="closePopup"
    round
    closeable
    close-icon="close"
    :style="{ width: '90%', padding: '1rem 0 0.5rem' }"
  >
    <h2 class="title" v-text="'用户登陆 / 注册'" />
    <LoginForm />
  </van-popup>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
// components
import LoginForm from "../../components/form/UserLoginPopupForm.vue";

export default {
  components: { LoginForm },

  setup() {
    const store = useStore();

    let isShowPopup = computed(() => store.state.isShowUserLoginPopup);
    let closePopup = () => {
      store.commit("closeUserLoginPopup");
    };

    return {
      isShowPopup,
      closePopup,
    };
  },
};
</script>

<style lang="less" scoped>
.title {
  text-align: center;
  padding-top: 0;
  padding-bottom: 1rem;
}
</style>
