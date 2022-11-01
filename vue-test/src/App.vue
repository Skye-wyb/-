<template>
  <div id="app">
    <h1>Vue</h1>
    <test-1 />
  </div>
</template>

<script>
import Test1 from "./components/Test1.vue";
export default {
  name: "App",
  components: {
    Test1,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
