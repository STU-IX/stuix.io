<template>
  <v-app dark>
    <v-main>
      <v-container>
        <v-row no-gutters>
          <v-col md="8" offset-md="2">
            <v-card elevation="0">
              <header>
                <h1>STUIX</h1>
                <p>Wow such a non-profit IX</p>
              </header>
              <div id="content">
                <hr>
                <div id="nav">
                  <a v-for="(item, i) in items" :key="i" :href="item.to">
                    <button :class="( $store.state.page == item.to ? 'active' : '' )">{{ item.title }}</button>
                  </a>
                </div>
                <hr>
                <div class="window">
                  <div class="title-bar">
                    <div class="title-bar-text">{{ $store.state.title }}</div>
                    <div class="title-bar-controls">
                      <button aria-label="Minimize"></button>
                      <button aria-label="Maximize"></button>
                      <button aria-label="Close"></button>
                    </div>
                  </div>
                  <div class="window-body">
                    <nuxt />
                  </div>
                </div>
              </div>
              <div id="footer">
                <hr>
                <p>Design by <a href="https://gnehs.net" target="_blank">gnehs</a>.</p>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import 'assets/index.sass'

export default {
  data () {
    return {
      items: [
        {
          title: 'Home',
          to: '/'
        },
        {
          title: 'About',
          to: '/about'
        },
        {
          title: 'Join',
          to: '/join'
        },
        {
          title: 'Members',
          to: '/members'
        }
      ]
    }
  },
  mounted() {
    console.log(`
███████╗████████╗██╗   ██╗██╗██╗  ██╗
██╔════╝╚══██╔══╝██║   ██║██║╚██╗██╔╝
███████╗   ██║   ██║   ██║██║ ╚███╔╝
╚════██║   ██║   ██║   ██║██║ ██╔██╗
███████║   ██║   ╚██████╔╝██║██╔╝ ██╗
╚══════╝   ╚═╝    ╚═════╝ ╚═╝╚═╝  ╚═╝`.trim())
  }
}
</script>
