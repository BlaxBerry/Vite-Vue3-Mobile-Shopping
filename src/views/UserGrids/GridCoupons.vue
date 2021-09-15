<template>
  <Nav />

  <div class="main-block">
    <Empty />
  </div>
</template>

<script>
// components
import Nav from "../../components/nav/NavBer.vue";
import Empty from "../../components/empty/Empty.vue";

export default {
  components: { Nav, Empty },
};
</script>

