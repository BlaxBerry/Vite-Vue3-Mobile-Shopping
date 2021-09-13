<template>
  <van-row class="top-info">
    <van-col span="8">
      <van-image
        width="3rem"
        height="3rem"
        lazy-load
        :src="info.list_pic_url"
      />
    </van-col>
    <van-col span="16">
      <van-row>
        <van-col span="4">名称:</van-col>
        <van-col span="18" class="data-msg" v-text="info.name" />
      </van-row>
      <van-row>
        <van-col span="4">价格:</van-col>
        <van-col
          span="18"
          class="data-msg"
          v-text="'¥ ' + info.retail_price.toFixed(2) + ' 元'"
        />
      </van-row>
      <van-row>
        <van-col span="4">库存:</van-col>
        <van-col
          span="18"
          class="data-msg"
          v-text="
            Number(info.goods_number - stepperVal) + ' ' + info.goods_unit
          "
        />
      </van-row>
    </van-col>
  </van-row>
</template>

<script>
export default {
  props: ["info"],
  setup(props) {},
};
</script>

<style></style>
