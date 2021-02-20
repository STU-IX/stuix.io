<template>
	<div class="container">
		<div class="sponsor-container">
			<div class="sponsor">
				<img src="/img/sponsor/twds.png" />
				<p>
					Taiwan Digital Streaming Co.
					<br />台灣數位串流有限公司
				</p>
			</div>
		</div>
	</div>
</template>
<style lang="sass" scoped>
.sponsor-container
	display: flex
	flex-wrap: wrap
	margin: 0 -4px
	.sponsor
		width: 50%
		flex: 1
		text-align: center

		background-color: rgba(0, 0, 0, 0.05)
		margin: 4px
		border-radius: 4px

		.win95 &
			border-radius: 0
			background: #fff
			box-shadow: inset -1px -1px #fff, inset 1px 1px grey, inset -2px -2px #dfdfdf, inset 2px 2px #0a0a0a
</style>
<script>
export default {
	layout: ({ layout }) => layout,
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
