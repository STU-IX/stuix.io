<template lang="pug">
.container
	h4 About
	p This is a non-profit IX (Internet Exchange) for educational purposes.
	p The full name of the IX is "Student &amp; Technology United Internet Exchanges".
	p The IX is the first community-based IX in Taiwan, and after few months of preparation, it is finally established in Jan 2021.
	h4 Mission Statement
	p The playground of networking players is restricted by the amount of cost to participate in the professional networking community in Taiwan.
	p Therefore, creating a cheaper environment for networking players in Taiwan is our goal, which is a motivation for enhancing the communication between networking players, providing technical communication and educating the younger generation to participate in the networking operating field.
  p By establishing an IXP, we not only reduce the total latency of the entire network but also increase the connectivity of the networks of Taiwan. It can also be the entrance of the younger generation of network players.
	h4 Who are the network operators?
	p Currently, 
		|
		a(href="https://seadog007.me", target="_blank") @seadog007
		|
		| is maintaining IXPM and RS.
		|
		a(href="https://licson.net", target="_blank") @licson
		|
		| for switches configuration.
  h4 Security Enforcement
  p This IXP provide a few policies for improving Internet security
  p IRR Filter by automatic retrieving the IP list from an as-set from IRRDBs.
  p RPKI Filter by RPKI Validator TWNIC, Cloudflare.
  p The security features above will ensure that the announcements our customers receive will be valid from AS Origin.
	h4 Special Thanks
	p
		a(href="https://gnehs.net", target="_blank") @gnehs
		|
		| for designing the webpage.
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

