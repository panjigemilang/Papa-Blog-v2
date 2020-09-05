<template>
  <div v-if="postingan.length">
    <h1>Post</h1>
    {{ postingan[0].title }}
  </div>
  <div v-else>
    <Loading />
  </div>
</template>

<script>
// Vuex
import { mapGetters, mapActions } from "vuex";
import Loading from "../Commons/Loading";
import isEmpty from "../Utils/isEmpty";

export default {
  name: "Post",
  components: {
    Loading,
  },
  props: ["id"],
  data() {
    return {
      postingan: [],
    };
  },
  methods: {
    ...mapActions(["getPost"]),
    ...mapGetters(["getState"]),
  },
  created() {
    const data = {
      id: this.id,
    };

    this.getPost(data).then(() => (this.postingan = this.getState().post));
  },
};
</script>

<style scoped>
</style>