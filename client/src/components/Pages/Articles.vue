<template>
  <div class="articles-app">
    <CircleProfile />
    <div class="container">
      <Search />
      <Contents layoutProps="left" :limitProps="limit" :offsetProps="offset" />
      <div class="btn-box">
        <button @click.prevent="prevPage">Prev</button>
        <button @click.prevent="nextPage">Next</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Contents from "./SubPages/Contents";
import CircleProfile from "./SubPages/CircleProfile";
import Search from "./SubPages/Search";

export default {
  name: "Articles",
  data() {
    return {
      limit: 4,
      offset: 0,
    };
  },
  components: {
    Contents,
    CircleProfile,
    Search,
  },
  methods: {
    ...mapGetters(["getState"]),
    nextPage() {
      if (this.getState().posts.length) this.offset += 2;
    },
    prevPage() {
      if (this.offset !== 0) this.offset -= 2;
    },
  },
};
</script>

<style lang="scss" scoped>
.articles-app {
  .container {
    background-color: white;
  }
}
</style>
