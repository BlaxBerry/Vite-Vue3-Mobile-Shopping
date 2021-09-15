<template>
  <Nav />

  <div class="user-grid-info">
    <van-row justify="center">
      <van-col span="24">
        <van-image round lazy-load :src="user.avatar" />
      </van-col>
      <van-col span="8" class="name">用户名称:</van-col>
      <van-col span="16" class="value">{{ user.nickname }}</van-col>
      <van-col span="8" class="name">登陆名称:</van-col>
      <van-col span="16" class="value">{{ user.username }}</van-col>
      <van-col span="8" class="name">用户ID:</van-col>
      <van-col span="16" class="value">{{ user.id }}</van-col>
      <van-col span="8" class="name">性别:</van-col>
      <van-col span="16" class="value">
        {{ user.gender == 1 ? "女" : "男" }}
      </van-col>
      <van-button
        block
        color="linear-gradient(to right, #ff6034, #ee0a24)"
        @click="logout"
      >
        Logout
      </van-button>
    </van-row>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
// components
import Nav from "../../components/nav/NavBer.vue";

export default {
  components: { Nav },
  setup() {
    let user = JSON.parse(localStorage.getItem("user"));

    const router = useRouter();
    const logout = () => {
      localStorage.removeItem("user");
      router.push("/user");
      setTimeout(() => {
        router.go(0);
      }, 100);
    };

    return { user, logout };
  },
};
</script>

