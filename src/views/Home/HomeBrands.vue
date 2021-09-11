<template>
  <div class="home-block" v-if="list.length != 0">
    <!-- title -->
    <div class="title"><h3>Brands</h3></div>

    <!-- pics list -->
    <van-row justify="space-between" class="home-brand">
      <van-col span="12" v-for="item in list" :key="item.id">
        <van-image fit="contain" :src="item.list_pic_url" />
        <p>{{ item.name }}</p>
      </van-col>
    </van-row>
  </div>
</template>

<script>
export default {
  props: ["list"],
  setup(props) {},
};
</script>

<style></style>
