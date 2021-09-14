<template>
  <Nav />

  <div class="home-block user-grid-info">
    <van-row justify="center">
      <van-col span="12">
        <van-image width="200" height="200" round lazy-load :src="user.avatar"
      /></van-col>
    </van-row>
    <div class="info">
      <small>
        <van-row justify="center">
          <van-col span="8" class="name">用户名称:</van-col>
          <van-col span="16" class="value">{{ user.nickname }}</van-col>
        </van-row>
      </small>
      <van-row justify="center">
        <van-col span="8" class="name">登陆名称:</van-col>
        <van-col span="16" class="value">{{ user.username }}</van-col>
      </van-row>
      <van-row justify="center">
        <van-col span="8" class="name">用户ID:</van-col>
        <van-col span="16" class="value">{{ user.id }}</van-col>
      </van-row>
      <van-row justify="center">
        <van-col span="8" class="name">性别:</van-col>
        <van-col span="16" class="value">{{
          user.gender == 1 ? "女" : "男"
        }}</van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
// components
import Nav from "../../components/nav/NavBer.vue";

export default {
  components: { Nav },
  setup() {
    let user = JSON.parse(localStorage.getItem("user"));

    return { user };
  },
};
</script>

<style></style>
