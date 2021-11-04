<template>
  <div id="members-container" class="container">
    <b-table borderless striped :items="members" :fields="fields">
      <template #cell(IPv4)="data">
        <span v-show="data.value">✓</span>
      </template>
      <template #cell(IPv6)="data">
        <span v-show="data.value">✓</span>
      </template>
      <template #cell(Org)="data">
        <span>{{ data.value }} <span v-show="data.item.MANRS" class="tag">MANRS</span></span>
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
      fields: ['ASN', 'IPv4', 'IPv6', 'Country', 'Org', 'Status']
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
		.tag
			--color: #008f00
			border-radius: 100em
			padding: 0.2em 0.5em
			font-size: 0.8em
			border: 1px solid var(--color)
			color: var(--color)

			.win95 &
				border-radius: 0
				background-color: navy
				color: #fff
				border: 1px solid #ccc
</style>
