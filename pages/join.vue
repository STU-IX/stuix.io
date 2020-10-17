<template>
  <div>
    <form action="" method="post">
      <div class="field-row-stacked" style="width: 200px">
        <label for="ASN">ASN:</label>
        <input type="text" id="ASN">
      </div>
      <div class="field-row-stacked" style="width: 200px">
        <label for="Network_Name">Network Name:</label>
        <input type="text" id="Network_Name">
      </div>
      <div class="field-row-stacked" style="width: 200px">
        <label for="Email">Contact Email:</label>
        <input type="email" id="Email">
      </div>
      <div class="field-row-stacked" style="width: 200px">
        <label for="WebSite">WebSite (optional):</label>
        <input type="text" id="WebSite">
      </div>
    </form>
    <br>
    <button type="submit">Submit</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      page: '/join/',
      title: 'Join'
    }
  },
  mounted() {
    this.$store.commit['updatePage', this.page]
    this.$store.commit['updateTitle', this.title]
  }
}
</script>
