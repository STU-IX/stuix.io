<template >
  <div class="container">
    <h4>About</h4>
    <p>This is a non-profit IX (Internet Exchange) for educational purposes.</p>
    <p>The full name of the IX is "Student &amp; Technology United Internet Exchanges".</p>
    <p>The IX is the first community-based IX in Taiwan, and after few months of preparation, it is finally established in Jan 2021.</p>
    <p>We also hold the record to be the only Internet Exchange that fully supported BGP communities in Taiwan. (2024/07/10)</p>
    <h4>Mission Statement</h4>
    <p>The playground of networking players is restricted by the amount of cost to participate in the professional networking community in Taiwan.</p>
    <p>Therefore, creating a cheaper environment for networking players in Taiwan is our goal, which is a motivation for enhancing the communication between networking players, providing technical communication and educating the younger generation to participate in the networking operating field.</p>
    <p>By establishing an IXP, we not only reduce the total latency of the entire network but also increase the connectivity of the networks of Taiwan. It can also be the entrance of the younger generation of network players.</p>
    <h4>Who are the network operators?</h4>
    <p>
      Currently,
      <a href="https://seadog007.me" target="_blank">@seadog007</a>
      is maintaining IXPM, RS and Switches Configurations. (Since 2021)
    </p>
    <p>
      Previously <a href="https://licson.net" target="_blank">@licson</a>
      for helping switches configurations (2021 ~ 2022)
    </p>
    
    <h4>Security Enforcement</h4>
    <p>This IXP provide a few policies for improving Internet security</p>
    <p>IRR Filter by automatic retrieving the IP list from an as-set from IRRDBs.</p>
    <p>RPKI Filter by RPKI Validator TWNIC, Cloudflare.</p>
    <p>The security features above will ensure that the announcements our customers receive will be valid from AS Origin.</p>
    <h4>Special Thanks</h4>
    <p>
      <a href="https://cras.4202.tw/" target="_blank">@cras4202</a>
      for attracting new members. (Since 2023)
    </p>
    <p>
      <a href="https://gnehs.net" target="_blank">@gnehs</a>
      for designing the webpage.
    </p>
  </div>
</template>

<script>
export default {
  layout: ({ layout }) => layout,
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

