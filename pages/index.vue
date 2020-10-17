<template lang="pug">
div
  img(src="//raw.githubusercontent.com/STU-IX/branding/main/Logo/Logo.svg",width="256px")
  br
  br
  p This is a non-profit IX (Internet Exchange)

  section.field-row(style='justify-content: flex-end')
    a(href='/join/')
      button Join STUIX!
</template>

<script>
export default {
  data() {
    return {
      page: '/',
      title: 'Home'
    }
  },
  mounted() {
    this.$store.commit('updatePage', this.page)
    this.$store.commit('updateTitle', this.title)
  }
}
</script>
