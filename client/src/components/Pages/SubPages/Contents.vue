<template>
  <fragment v-if="getState().posts.length > 0">
    <div v-for="post in getState().posts" :key="post.id">
      <div :class="`content-box ${post.id % 2 === 1 || layoutProps === 'left' ? 'left' : 'right'}`">
        <h1>
          <router-link :to="`/article/${post.id}`">
            {{
            post.title
            }}
          </router-link>
          <hr />
        </h1>
        <div class="content">
          <p>{{ post.content.replace(/(<([^>]+)>)/gi, " ") }}</p>
        </div>
        <div class="content" v-if="!isItEmpty(post.tags)">
          <p>{{ post.tags[0].tags }}</p>
        </div>
        <div class="img-container">
          <fragment v-if="!isItEmpty(post.post_picture[0])">
            <img :src="post.post_picture[0].pathname" alt="gambar.jpg" />
          </fragment>
          <fragment v-else>
            <img src="/img/default.jpg" alt="gambar.jpg" />
          </fragment>
        </div>
      </div>
    </div>
  </fragment>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import isEmpty from "../../Utils/isEmpty";

export default {
  name: "Contents",
  props: {
    layoutProps: {
      default: "odd",
      type: String,
    },
    limitProps: Number,
    offsetProps: {
      default: 0,
      type: Number,
    },
  },
  created() {
    this.reqPosts();
  },
  methods: {
    ...mapActions(["getPosts"]),
    ...mapGetters(["getState"]),
    isItEmpty(val) {
      return isEmpty(val);
    },
    reqPosts() {
      const data = {
        limit: this.limitProps,
        offset: this.offsetProps,
      };

      this.getPosts(data);
    },
  },
  watch: {
    offsetProps() {
      this.reqPosts();
    },
  },
};
</script>

<style lang="scss" scoped>
.content-box {
  display: grid;
  margin-bottom: 8vh !important;

  a {
    color: inherit;
    text-decoration: none;

    &:hover {
      color: var(--color-ternary);
    }

    h1 {
      display: inline-block;
      font-weight: normal;
      margin-bottom: 25px !important;

      hr {
        border: 2px solid;
        border-radius: 50px;
        color: var(--color-primary);
      }
    }
  }

  &.left,
  &.right {
    grid-template-rows: max-content;
    margin: 0 15px;

    h1,
    .content {
      margin: 0 25px;

      &p {
        font-size: 1.3em;
      }
    }

    h1 {
      position: relative;

      hr {
        background-color: var(--color-primary);
        height: 5px;
        margin-top: 5px;
        left: 25px;
        position: absolute;
        width: 5%;
      }
    }

    p {
      font-size: 1.3em;
    }

    .img-container {
      border: 1px var(--bg-secondary) dashed;
      height: 350px;
      grid-row: 1 / span 4;
      overflow: hidden;

      img {
        height: 100%;
        object-fit: contain;
        width: 100%;
      }
    }
  }

  &.left {
    grid-template-columns: 60% 40%;

    h1,
    .content {
      grid-column: 1;
    }

    .img-container {
      grid-column: 2;
      margin-right: 15px;
    }
  }

  &.right {
    grid-template-columns: 40% 60%;

    h1,
    .content {
      grid-column: 2;
    }

    .img-container {
      grid-column: 1;
      margin-left: 15px;
    }
  }
}
</style>
