<template>
  <div class="container">
    <h1 class="title">Tentang Penulis</h1>
    <div class="row">
      <div class="col-lg-4 col-md-6 col-sm-12">
        <div class="img-box">
          <img :src="aboutImage" alt="Profile.jpg" />
        </div>
      </div>
      <div class="col-lg-8 col-md-6 col-sm-12">
        <div class="card">
          <h2>George si Monyet Oren</h2>
          <small>Kepala Desa, 21 Tahun</small>
          <small>Singlet</small>
          <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="img-box-table">
        <img :src="tableChair" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      aboutImage: require("../../../assets/img/about.jpg"),
      tableChair: require("../../../assets/svg/Tabel and Chair.svg"),
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../../assets/dist/prefix";

.row {
  flex-wrap: unset;
}

.img-box,
.card {
  border-radius: 25px;
  box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);
}

.img-box-table,
.img-box {
  margin: 0 auto;
  width: 80%;

  img {
    width: 100%;
  }
}

.img-box-table img {
  @include prefix(transform, translateY(-50px), webkit moz ms o);
}

.img-box {
  overflow: hidden;

  img {
    display: block;
    height: 350px;
    object-fit: cover;
    width: 100%;
  }
}

.card {
  background-color: white;

  margin: 0 auto;
  padding: 15px 25px;
  width: 80%;
}
</style>