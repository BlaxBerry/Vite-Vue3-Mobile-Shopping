<template>
  <div id="app">
    
    <router-view/>
  </div>
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100%;
  text-align: center;
  font-size: 0.16rem;
}
body {
  background-color: #eeeeee;
  height: 100%;
}
html {
  height: 100%;
  font-size: 100px!important; //rem
}
p {
  font-size: 0.16rem; // (?rem/1rem =?px/100px)
}
</style>
