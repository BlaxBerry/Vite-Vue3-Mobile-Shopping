<template>
  <div id="user">
    <!-- 1. Top -->
    <Top />

    <!-- 2. Grid -->
    <Grid />

    <!-- 3. Login Popup -->
    <Popup />
  </div>
</template>

<script>
// components
import Top from "./UserTop.vue";
import Grid from "./UserGridLayout.vue";
import Popup from "./UserLoginPopup.vue";

export default {
  components: { Top, Grid, Popup },
};
</script>

<style></style>
