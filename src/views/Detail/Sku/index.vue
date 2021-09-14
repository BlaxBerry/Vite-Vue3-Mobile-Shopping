<template>
  <van-cell title="展示商品详情" icon="shop-o" is-link @click="showPopup" />
  <van-popup v-model:show="show" position="bottom" closeable round class="sku">
    <!-- 1. top -->
    <Top :info="info" :stepperVal="stepperVal" />

    <!-- 2. stepper -->
    <div class="bottom-content">
      数量：
      <van-stepper v-model.number="stepperVal" integer input-width="2rem" />
    </div>

    <!-- 3. middle attribute -->
    <div v-if="attribute.length > 0" class="home-block attribute">
      <h4 v-text="'商品参数'" />
      <van-row v-for="item in attribute" :key="item">
        <van-col span="5" v-text="item.name" class="name" />
        <van-col span="19" v-text="item.value" class="value" />
      </van-row>
    </div>
  </van-popup>
</template>

<script>
import { ref } from "vue";
// components
import Top from "./SkuTopInfo.vue";

export default {
  props: ["info", "attribute"],
  components: { Top },

  setup(props) {
    // sku show
    const show = ref(false);
    const showPopup = () => {
      show.value = true;
    };

    // stepper
    const stepperVal = ref(1);

    return { show, showPopup, stepperVal };
  },
};
</script>

<style></style>
