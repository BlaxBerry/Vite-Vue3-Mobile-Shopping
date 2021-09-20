<template>
  <van-cell title="展示商品详情" icon="shop-o" is-link @click="showPopup" />
  <van-popup
    v-model:show="show"
    position="bottom"
    closeable
    round
    class="sku"
    @click-overlay="closeSku"
    @click-close-icon="closeSku"
  >
    <!-- 1. top -->
    <Top :info="info" :stepperVal="stepperVal" />

    <!-- 2. stepper -->
    <div class="bottom-content">
      数量：
      <van-stepper
        v-model.number="stepperVal"
        integer
        input-width="2rem"
        @change="changStepper"
      />
    </div>

    <!-- 3. middle attribute -->
    <div v-if="attribute.length" class="attribute">
      <h4 v-text="'商品参数'" />
      <van-row v-for="item in attribute" :key="item">
        <van-col span="5" v-text="item.name" class="name" />
        <van-col span="19" v-text="item.value" class="value" />
      </van-row>
    </div>
  </van-popup>
</template>

<script>
import { computed, ref } from "vue";
// components
import Top from "./SkuTopInfo.vue";
import { useStore } from "vuex";
import { useRoute } from 'vue-router';

export default {
  props: ["info", "attribute"],
  components: { Top },

  setup(props) {
    const store = useStore();
    const route = useRoute()

    // sku show
    let show = computed(() => store.state.sku.isSkuShow);
    // show sku
    const showPopup = () => {
      store.commit("showSku");
    };
    // close sku
    const closeSku = () => {
      store.commit("closeSku");
    };

    // stepper value
    const stepperVal = ref(1);
    // change amout in vuex store
    const changStepper = () => {
      let skuContent = {
        goodsId:route.query.id,
        amount: stepperVal.value,
      };
      store.commit("changeSku", skuContent);
    };

    return { show, showPopup, closeSku, stepperVal, changStepper };
  },
};
</script>

<style></style>
