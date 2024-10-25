<template>
  <div class="hello">
    <h1>Welcome to olmap</h1>
    <p>
      power for Openlayers
    </p>
    <h3>Version</h3>
    <ul>
      <li><router-link to="/maptest">localhost</router-link></li>
      <li><router-link to="">by service</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
