<template lang="pug">
div
  h4 About
  p This is a non-profit IX (Internet Exchange) for educational purposes.
  p The full name of the IX is "Student &amp; Technology United Internet Exchanges".
  p The IX is the first community based IX in Taiwan, and after few months of prepare, it is finally established in Jan 2021.
  h4 Mission Statement
  p The playground of networking player is restricted by the amount of cost to participate in the professional networking community in Taiwan.
  p Therefore, creating a cheaper environment for networking player in Taiwan is our goal, which is a motivation for enhancing the communication between networking players, providing technical communication and educating the younger generation for participate in the networking operating field.
  h4 Who are the network operators?
  p Currently @seadog007 is maintaining the working system.
  h4 Special Thanks
  p @gnehs for designing the webpage.
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
