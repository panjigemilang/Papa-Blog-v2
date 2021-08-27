<template>
  <div class="container">
    <vue-editor v-model="content" :editor-toolbar="customToolbar" />
  </div>
</template>

<script>
export default {
  name: "AddPost",
  data() {
    return {
      content: "Tulis konten",
      customToolbar: [
        ["bold", "italic", "underline"],
        [{ list: "ordered" }, { list: "bullet" }],
        ["image", "code-block"],
      ],
    };
  },
};
</script>

<style lang="scss" scoped >
.container {
  color: var(--text-primary);
}
</style>