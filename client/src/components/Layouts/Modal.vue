<template>
  <div id="app">
    <transition name="modal">
      <div class="mask">
        <div class="wrapper">
          <div class="container">
            <div class="header">
              <h3 name="header">Tambah Postingan</h3>
            </div>
            <div class="body">
              <span v-if="!isItEmpty(errors.title)">
                <br />
                {{ errors.title }}
              </span>
              <textarea placeholder="Tulis Judul" v-model="title" />
              <br />
              <span v-if="!isItEmpty(errors.content)">
                <br />
                {{ errors.content }}
              </span>
              <vue-editor
                class="ql-container"
                placeholder="Tulis Konten"
                v-model="content"
                :editor-toolbar="customToolbar"
              />
              <br />
              <vue-tags-input
                v-model="tag"
                :tags="tags"
                @tags-changed="(newTags) => (tags = newTags)"
              />
            </div>
            <div class="footer">
              <div class="output">
                {{ content }}
              </div>
              <br />
              <slot name="footer">
                <button class="submit-button" @click.prevent="onSubmit">
                  Submit
                </button>
                <button class="close-button" @click="$emit('close')">
                  Cancel
                </button>
              </slot>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { VueEditor } from "vue2-editor";
import { mapActions, mapGetters } from "vuex";
import VueTagsInput from "@johmun/vue-tags-input";
import isEmpty from "../Utils/isEmpty";

export default {
  name: "Modal",
  components: {
    VueEditor,
    VueTagsInput,
  },
  data() {
    return {
      title: "",
      content: "",
      errors: {},
      tag: "",
      tags: [],
      customToolbar: [
        ["bold", "italic", "underline"],
        ["blockquote", "code-block"],
        [{ header: 1 }, { header: 2 }],
        [{ direction: "rtl" }],
        [
          { align: "" },
          { align: "center" },
          { align: "right" },
          { align: "justify" },
        ],
        [({ list: "ordered" }, { list: "bullet" })],
        ["image", "code-block"],
      ],
    };
  },
  methods: {
    ...mapActions(["addPost", "clearErrors"]),
    isItEmpty(val) {
      return isEmpty(val);
    },
    onSubmit() {
      console.log("public url", process.env.BASE_URL);

      let tags = "";
      this.errors = {};

      // get only the tag text
      this.tags.map((item, i, arr) => {
        if (arr.length - 1 === i) {
          tags += item.text;
          return tags;
        }

        tags += item.text + ",";
      });

      const data = {
        title: this.title,
        images: this.content.match(/data:image\/[^;]+;base64,.*?(?=")/g),
        content: this.content.replace(/<img\ssrc=.*?>/gi, "<ImageReplace>"),
        tags,
      };

      console.log("Data", data);

      this.addPost(data).then(() => {
        if (!isEmpty(this.$store.getters.getState.errors)) {
          this.errors = this.$store.getters.getState.errors;
        }
      });
    },
  },
};
</script>

<style scoped lang="scss">
.mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.wrapper {
  display: table-cell;
  vertical-align: middle;
}

.container {
  width: 80vw;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.header h3 {
  margin-top: 0;
  color: #42b983;
}

.body {
  color: var(--text-primary);
  margin: 20px 0;

  span {
    color: var(--error);
  }

  textarea {
    font-family: -apple-system, BlinkMacSystemFont, "Product Sans", sans-serif;
    font-size: 1.7em;
    height: 100px;
    padding: 12px 15px;
    resize: none;
    text-align: center;
    width: 97%;
  }

  .ql-container {
    height: 300px;
  }
}

.default-button {
  float: right;
}

.enter {
  opacity: 0;
}

.leave-active {
  opacity: 0;
}

.enter .container,
.leave-active .container {
  transform: scale(1.1);
  -webkit-transform: scale(1.1);
  -moz-transform: scale(1.1);
  -ms-transform: scale(1.1);
}
</style>
