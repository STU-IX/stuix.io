<template>
	<div id="members-container" class="container">
		<b-table borderless striped :items="members" :fields="fields">
			<template #cell(IPv4)="data">
				<span v-show="data.value">✓</span>
			</template>
			<template #cell(IPv6)="data">
				<span v-show="data.value">✓</span>
			</template>
		</b-table>
	</div>
</template>

<script> 
import m from 'static/data/members.json'

export default {
	layout: ({ layout }) => layout,
	data() {
		return {
			page: '/members/',
			title: 'Members',
			members: m,
			fields: [
				{ key: 'ASN', label: 'AS' },
				'IPv4',
				'IPv6',
				{ key: 'Country', label: 'ASN Country' },
				'NIC',
				"Org"
			],
		}
	},
	mounted() {
		this.$store.commit('updatePage', this.page)
		this.$store.commit('updateTitle', this.title)
	}
}
</script>

<style lang="sass">
#members-container
	position: relative
	overflow-x: scroll
	table
		min-width: 700px
</style>
