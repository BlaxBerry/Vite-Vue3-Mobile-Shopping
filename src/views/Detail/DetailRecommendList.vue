<template>
  <Divider :text="'相关商品'" />
  <Cards :list="list" />
</template>

<script>
// components
import Divider from "../../components/titles/Divider.vue";
import Cards from "../../components/card/PropductCard.vue";

export default {
  props: ["list"],
  components: {
    Divider,
    Cards,
  },
  setup() {},
};
</script>

<style></style>
