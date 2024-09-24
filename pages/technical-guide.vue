<template>
  <div class="container">
    <h4>Route Server Control Communities</h4>
    <p>This page is under construction.</p>
  </div>
</template>

<script>
export default {
  layout: ({ layout }) => layout,
  data() {
    return {
      page: "/technical-guide/",
      title: "Technical Guide"
    };
  },
  mounted() {
    this.$store.commit("updatePage", this.page);
    this.$store.commit("updateTitle", this.title);
  }
};
</script>
