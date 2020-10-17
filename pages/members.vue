<template>
  <div>
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
            <th>TG</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, i) in members" :key="i">
            <td>{{ item.ASN }}</td>
            <td><v-icon v-show="item.IPv4">mdi-check-bold</v-icon></td>
            <td><v-icon v-show="item.IPv6">mdi-check-bold</v-icon></td>
            <td>{{ item.Country }}</td>
            <td>{{ item.NIC }}</td>
            <td>{{ item.Org }}</td>
            <td>{{ item.OwnerTgId }}</td>
          </tr>
        </tbody>
      </table>
    </div>
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

<style lang="stylus">
th
  font-weight bold
th, td
  padding-left  10px
  padding-right 10px
</style>
