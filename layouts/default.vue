<template>
	<div class="app" v-konami="konami" :key="$store.state.win95">
		<b-navbar>
			<div class="container">
				<b-navbar-brand to="/">STUIX</b-navbar-brand>

				<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

				<b-collapse id="nav-collapse" is-nav>
					<b-navbar-nav class="ml-auto">
						<b-nav-item
							v-for="(item, i) in items"
							:key="i"
							:to="item.to"
							:active="$store.state.page == item.to"
						>{{ item.title }}</b-nav-item>
					</b-navbar-nav>
				</b-collapse>
			</div>
		</b-navbar>
		<h1 class="page-title" v-show="$store.state.title!='Home'">{{ $store.state.title }}</h1>
		<div id="content">
			<nuxt />
		</div>
	</div>
</template>

<script>
import '@/assets/index.sass'

export default {
	data() {
		return {
			items: [
				/*{
					title: 'Home',
					to: '/'
				},*/
				{
					title: 'About',
					to: '/about/'
				},
				{
					title: 'Join',
					to: '/join/'
				},
				{
					title: 'Members',
					to: '/members/'
				},
				{
					title: 'Sponsor',
					to: '/sponsor/'
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
		//set vh
		function vhResize() {
			let vh = window.innerHeight * 0.01;
			document.documentElement.style.setProperty("--vh", `${vh}px`);
		}
		window.addEventListener("resize", vhResize);
		vhResize();
	},
	methods: {
		konami() {
			document.body.classList.add("win95theme");
			this.$store.commit('updateTheme', true)

			//import win95 css
			var head = document.getElementsByTagName('head')[0];
			var win95css = document.createElement('link');
			win95css.rel = 'stylesheet';
			win95css.type = 'text/css';
			win95css.href = '//unpkg.com/98.css';
			head.appendChild(win95css);
			this.$router.push(`/konami?r=${this.$route.path}`)
		}
	}
}
</script>
