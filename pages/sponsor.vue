<template>
	<div class="sponsor-container">
		<div class="sponsor">
			<img src="/img/sponsor/twds.png" />
			<p>
				Taiwan Digital Streaming Co.
				<br />台灣數位串流有限公司
			</p>
		</div>
	</div>
</template>
<style lang="sass" scoped>
.sponsor-container
	display: flex
	flex-wrap: wrap
	.sponsor
		width: 50%
		flex: 1
		text-align: center
</style>
<script>
export default {
	data() {
		return {
			page: '/sponsor/',
			title: 'Sponsor'
		}
	},
	mounted() {
		this.$store.commit('updatePage', this.page)
		this.$store.commit('updateTitle', this.title)
	}
}
</script>
