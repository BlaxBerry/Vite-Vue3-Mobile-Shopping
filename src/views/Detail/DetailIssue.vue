<template>
  <div class="issue">
    <Divider :text="'常见问题'" />
    <ul>
      <li v-for="item in issue" :key="item.id">
        <h3>
          <van-icon name="question" />
          {{ item.question }}
        </h3>
        <p v-text="item.answer" />
      </li>
    </ul>
  </div>
</template>

<script>
// components
import Divider from "../../components/titles/Divider.vue";

export default {
  props: ["issue"],
  components: { Divider },
  setup(props) {},
};
</script>

<style></style>
