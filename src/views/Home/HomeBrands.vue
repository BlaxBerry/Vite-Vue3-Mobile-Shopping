<template>
  <div class="home-brand" v-if="list.length != 0">
    <!-- title -->
    <div class="title"><h3>Brands</h3></div>
    
    <!-- pics list -->
    <van-row>
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

<style lang="less" scoped>
.home-brand {
  margin-top: 0.5rem;
  background-color: #fff;
}
.title {
  text-align: center;
  padding: 0.5rem 0 0.2rem;
}
p {
  text-align: center;
  font-size: 0.4rem;
  margin-bottom: 0.4rem;
}
</style>
