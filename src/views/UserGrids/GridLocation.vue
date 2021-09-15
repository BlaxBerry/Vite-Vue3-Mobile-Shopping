<template>
  <Nav />
</template>

<script>
// components
import Nav from "../../components/nav/NavBer.vue";
// api
import GetAddress from '../../api/address/getAddress'

export default {
  components: { Nav },
  setup(){

    GetAddress().then(res=>{
      console.log(res);
    })
  }
};
</script>
