<template>
  <Nav />

  <div class="main-block">
    <van-notice-bar
      left-icon="volume-o"
      scrollable
      text="该项目是个架空APP，没什么可以服务的，要是想看代码可以去Gihub查源码。"
    />
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
