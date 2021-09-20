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
      <h3
        class="price"
        v-text="'¥ ' + (info.retail_price * stepperVal).toFixed(2)"
      />
      <van-row>
        <van-col span="4"><b>名称:</b></van-col>
        <van-col span="18" class="data-msg" v-text="info.name" />
      </van-row>
      <van-row>
        <van-col span="4"><b>单价:</b></van-col>
        <van-col
          span="18"
          class="data-msg"
          v-text="'¥ ' + Number(info.retail_price).toFixed(2) + ' 元'"
        />
      </van-row>
      <van-row>
        <van-col span="4"><b>库存:</b></van-col>
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
  props: ["info", "stepperVal"],
  setup(props) {},
};
</script>

<style lang="less" scoped>
.price {
  font-size: 0.7rem;
  text-align: left;
}
</style>
