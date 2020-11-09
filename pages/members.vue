<template>
	<div id="members-container">
		<table>
			<thead>
				<tr>
					<th>AS</th>
					<th>IPv4</th>
					<th>IPv6</th>
					<th>Country</th>
					<th>NIC</th>
					<th>Org</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(item, i) in members" :key="i">
					<td>{{ item.ASN }}</td>
					<td>
						<v-icon v-show="item.IPv4">mdi-check-bold</v-icon>
					</td>
					<td>
						<v-icon v-show="item.IPv6">mdi-check-bold</v-icon>
					</td>
					<td>{{ item.Country }}</td>
					<td>{{ item.NIC }}</td>
					<td>{{ item.Org }}</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
import '@mdi/font/css/materialdesignicons.css'
import m from 'static/data/members.json'

export default {
	data() {
		return {
			page: '/members/',
			title: 'Members',
			members: m
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
	height: 500px
	background-color: #FFF
	margin: -8px
	overflow-y: scroll
	position: relative
	table
		width: 100%
		min-width: 600px
		td
			padding-left: 4px
			padding-right: 4px
		th
			padding-left: 8px
			padding-right: 8px
			text-align: left
			background: silver
			box-shadow: inset -1px -1px #0a0a0a, inset 1px 1px #fff, inset -2px -2px grey, inset 2px 2px #dfdfdf
			position: sticky
			top: 0
			z-index: 2
</style>
