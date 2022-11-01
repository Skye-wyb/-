<template>
  <ul>
    <li v-for="(value, index) in arr" :key="index">{{ value }}</li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      arr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    };
  },
  mounted() {
    // this.arr[0] = "网易";
    this.$set(this.arr, 0, "网易");
  },
};
</script>

<style>
</style>