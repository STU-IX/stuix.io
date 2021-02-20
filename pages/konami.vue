<template>
	<div>
		<p>Win98 theme enabled!</p>
		<router-link to="/">
			<button>Ok</button>
		</router-link>
	</div>
</template>

<script>
export default {
	layout: ({ layout }) => layout,
	data() {
		return {
			page: '/konami/',
			title: 'Konami'
		}
	},
	mounted() {
		this.$store.commit('updatePage', this.page)
		this.$store.commit('updateTitle', this.title)
	}
}
</script>
