<template lang="pug">
div
	.lr-container
		.l
			img(
				src="//raw.githubusercontent.com/STU-IX/branding/main/Logo/Logo.svg",
				width="256px"
			)
		.r
			p Student &amp; Technology United Internet Exchanges
			p A community based Internet Exchanges
			p 
				a(href="https://ixpm.stuix.io")
					Traffic &amp; Status (IXP Manager)

	section.field-row(style="justify-content: flex-end")
		a(href="/join/")
			button Join STUIX!
</template>
<style lang="sass">
.lr-container
  display: flex
  .l
  .r
    padding: 0 20px
    flex: 1
@media screen and (max-width: 768px)
  .lr-container
    display: block
    .l
      text-align: center
</style>
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
