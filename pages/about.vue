<template lang="pug">
div
  h4 About
  p This is a non-profit IX (Internet Exchange)
  h4 Mission Statement
  h4 Who are the network operators?
  p
  h4 Special Thanks
  p
</template>

<script>
export default {
  data() {
    return {
      page: '/about/',
      title: 'About'
    }
  },
  mounted() {
    this.$store.commit('updatePage', this.page)
    this.$store.commit('updateTitle', this.title)
  }
}
</script>
