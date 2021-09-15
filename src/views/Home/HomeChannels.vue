<template>
  <van-grid
    v-if="list.length != 0"
    :column-num="list.length"
    class="home-channel"
  >
    <van-grid-item
      v-for="item in list"
      :key="item.id"
      :icon="item.icon_url"
      :text="item.name"
      @click="clickItem(item.id)"
    />
  </van-grid>
</template>

<script>
import { useRouter } from "vue-router";
export default {
  props: ["list"],
  setup(props) {
    const router = useRouter();

    const clickItem = (id) => {
      router.push({
        name: "Category",
        params: {
          id: id,
        },
      });
    };
    return { clickItem };
  },
};
</script>

<style></style>
