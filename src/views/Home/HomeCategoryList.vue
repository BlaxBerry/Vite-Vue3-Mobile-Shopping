<template>
  <div v-if="list.length" class="home-block">
    <h3 class="title">精选分类</h3>
    <div v-for="category in list" :key="category.id">
      <Divider :text="category.name" />
      <Cards :list="category.goodsList" />
    </div>
  </div>
</template>

<script>
// componets
import Divider from "../../components/titles/Divider.vue";
import Cards from "../../components/card/PropductCard.vue";

export default {
  props: ["list"],
  components: { Divider, Cards },
  setup(props) {},
};
</script>

<style lang="less" scoped>
.card-list {
  padding-bottom: 0.5rem;
}
</style>
