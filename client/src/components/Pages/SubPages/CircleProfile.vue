<template>
  <div>
    <div class="img-box">
      <img src="/img/default.jpg" alt="profile.jpg" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Circle Profile",
};
</script>

<style lang="scss" scoped>
.img-box {
  border-radius: 50%;
  height: 200px;
  margin: 0 auto;
  overflow: hidden;
  width: 200px;

  img {
    object-fit: cover;
    width: 100%;
  }
}
</style>