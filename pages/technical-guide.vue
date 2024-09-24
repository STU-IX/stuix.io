<template>
  <div>
    <div class="container">
      <h4>Route Server Control Communities</h4>
    </div>
    <div id="rules-container" class="container">
      <b-table borderless striped :items="bgpCommunityRules"></b-table>
    </div>
  </div>
</template>

<script>
export default {
  layout: ({ layout }) => layout,
  data() {
    return {
      page: "/technical-guide/",
      title: "Technical Guide",
      bgpCommunityRules: [
        {
          description: "Prevent announcement of a prefix to a peer",
          community: "0:peer-as",
          large: "NO"
        },
        {
          description: "Announce a route to a certain peer",
          community: "38855:peer-as",
          large: "NO"
        },
        {
          description: "Prevent announcement of a prefix to all peers",
          community: "0:38855",
          large: "NO"
        },
        {
          description: "Announce a route to all peers",
          community: "38855:38855",
          large: "NO"
        },
        {
          description: "Prevent announcement of a prefix to a peer",
          community: "38855:0:peer-as",
          large: "YES"
        },
        {
          description: "Announce a route to a certain peer",
          community: "38855:1:peer-as",
          large: "YES"
        },
        {
          description: "Prevent announcement of a prefix to all peers",
          community: "38855:0:0",
          large: "YES"
        },
        {
          description: "Announce a route to all peers",
          community: "38855:1:0",
          large: "YES"
        },
        {
          description: "Prepend to peer AS once",
          community: "38855:101:peer-as",
          large: "YES"
        },
        {
          description: "Prepend to peer AS twice",
          community: "38855:102:peer-as",
          large: "YES"
        },
        {
          description: "Prepend to peer AS three times",
          community: "38855:103:peer-as",
          large: "YES"
        }
      ]
    };
  },
  mounted() {
    this.$store.commit("updatePage", this.page);
    this.$store.commit("updateTitle", this.title);
  }
};
</script>

<style lang="sass">
#rules-container
	position: relative
	overflow-x: scroll
	table
		min-width: 450px
</style>
