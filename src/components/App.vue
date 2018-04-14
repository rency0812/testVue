<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss" scoped>
html{
  overflow: hidden;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 14px;
  text-align: center;
  color: #2c3e50;
  .header-wrap{
    position: relative;
    z-index: 10;
    height: 50px;
    background:gray
  }
  .sidebar-menu{
    position: absolute;
    top: 0;
    left: 0;
    width: 230px;
    height: 100vh;
    background: #1a2226;
    padding-top: 50px;
    li.header{
      color: #1a935b;
    }
    li a{
      color: white;
      padding: 12px 0;
      display: block
    }
  }
}
</style>
