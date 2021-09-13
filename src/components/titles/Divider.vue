<template>
  <van-divider dashed :style="style"> {{ text }}</van-divider>
</template>

<script>
export default {
  props: ["text"],
  setup(props) {
    return {
      style: {
        fontSize: "0.5rem",
        fontWeight: "700",
        borderColor: "#ccc",
        padding: "0 0.4rem",
        marginTop: "0",
      },
    };
  },
};
</script>

<style></style>
