<template>
  <van-row gutter="20" justify="space-around">
    <van-col span="8" v-for="item in Tips" :key="item">
      <van-icon name="checked" color="green" />
      {{ item }}
    </van-col>
  </van-row>
</template>

<script>
export default {
  setup() {
    return {
      Tips: ["30天无忧退货", "48小时快速退费", "满88元免邮费"],
    };
  },
};
</script>

<style lang="less">
.van-col {
  font-size: 0.05rem;
  font-weight: 700;
  text-align: center;
  color: #555555;
}
</style>
