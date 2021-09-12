<template>
  <!-- 1. Top -->
  <Top />

  <!-- 2. Grid -->
  <Grid />

  <!-- 3. Login Popup -->
  <Popup />
</template>

<script>
// components
import Top from "./UserTop.vue";
import Grid from "./UserGrid.vue";
import Popup from "./UserLoginPopup.vue";

export default {
  components: { Top, Grid, Popup },
};
</script>

<style></style>
