<template lang="pug">
div
  form(action='' method='post')
    .field-row-stacked(style='width: 200px')
      label(for='ASN') ASN:
      input#ASN(type='text')
    .field-row-stacked(style='width: 200px')
      label(for='Network_Name') Network Name:
      input#Network_Name(type='text')
    .field-row-stacked(style='width: 200px')
      label(for='Email') Contact Email:
      input#Email(type='email')
    .field-row-stacked(style='width: 200px')
      label(for='WebSite') WebSite (optional):
      input#WebSite(type='email')
    br
    button(type='submit') Submit
</template>

<script>
export default {
  data() {
    return {
      page: '/join',
      title: 'Join'
    }
  },
  mounted() {
    this.$store.commit('updatePage', this.page)
    this.$store.commit('updateTitle', this.title)
  }
}
</script>
