<template>
  <van-form @submit="onSubmit">
    <van-cell-group inset>
      <van-field
        v-model="username"
        name="username"
        label="用户名"
        placeholder="用户名"
        left-icon="manager"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="pwd"
        label="密码"
        placeholder="密码"
        left-icon="lock"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
    </van-cell-group>
    <div style="margin: 16px">
      <van-button
        round
        block
        color="linear-gradient(to right, #ff6034, #ee0a24)"
        native-type="submit"
      >
        提交
      </van-button>
    </div>
  </van-form>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();

    const username = ref("");
    const password = ref("");
    const onSubmit = (values) => {
      // send login request and save the respose by vuex action
      store.dispatch("getUserInfo", values);
    };

    return { username, password, onSubmit };
  },
};
</script>

<style></style>
