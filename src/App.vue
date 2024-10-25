<template>
  <div id="app">
    <!-- <div>
      <ul>
        <li><router-link to="/helloworld">helloworld</router-link></li>
        <li><router-link to="/test">test</router-link></li>
        <li><router-link to="/maptest">maptest</router-link></li>
      </ul>
    </div> -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
};
</script>

<style lang="scss">
body, html {
    margin: 0;
    padding: 0;
    width: 100vw; /* Full width of the viewport */
    height: 100vh; /* Full height of the viewport */
    overflow: hidden; /* Prevent scrolling */
  }
#app {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
* {
  padding: 0;
  margin: 0;
}
</style>
