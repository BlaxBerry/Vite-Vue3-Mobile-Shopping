<template>
  <van-swipe-cell v-for="item in list" :key="item.id">
    <van-card
      :num="item.number"
      :price="' ' + Number(item.retail_price).toFixed(2) + ' 元'"
      desc="暂无描述信息"
      :title="item.goods_name"
      class="goods-card"
      :thumb="item.list_pic_url"
    >
      <!-- stepper -->
      <template #footer v-if="isShowStepper">
        <van-stepper
          v-model="stepperVal"
          disable-input
          theme="round"
          button-size="30"
        />
        <van-button
          type="primary"
          round
          size="small"
          text="确认"
          @click="closeStepper"
        />
      </template>
    </van-card>
    <!-- right 3 btns -->
    <template #right>
      <van-button
        square
        text="删除"
        color="linear-gradient(to right, #ff6034, #ee0a24)"
        class="button"
        @click="deleteGood"
      />
      <van-button
        square
        text="编辑"
        type="success"
        class="button"
        @click="showStepper"
      />
      <van-button
        square
        icon="shop"
        type="primary"
        class="button"
        :to="'/detail?id=' + item.goods_id"
      />
    </template>
  </van-swipe-cell>
</template>

<script>
import { ref } from "@vue/reactivity";
// utils
import loading from "../../utils/loading/loading";
import showDeleteDialog from "../../utils/cart/showDeleteDialog.js.js";

export default {
  props: ["list"],
  setup(props) {
    // cilck to delete Good
    const deleteGood = () => {
      showDeleteDialog();
    };

    let isShowStepper = ref(false);
    let stepperVal = ref(1);
    // click to edit amount
    const showStepper = () => (isShowStepper.value = true);
    // close stepper
    const closeStepper = () => (isShowStepper.value = false);

    // loading view
    loading();

    return { deleteGood, isShowStepper, stepperVal, showStepper, closeStepper };
  },
};
</script>
