<template>
  <div class="loader">
    <img :src="require('./Spinner.gif')" alt="loading.gif" />
    &nbsp;&nbsp;&nbsp;
  </div>
</template>
<script>
export default {
  name: "Loading"
};
</script>

<style lang="scss" scoped>
.loader {
  position: "fixed";
  z-index: 50;
  top: 0;
  display: flex;
  width: 100%;
  height: "100%";
  background: url("https://subtlepatterns.com/patterns/geometry2.png");
  justify-content: center;
  align-items: center;
}
</style>