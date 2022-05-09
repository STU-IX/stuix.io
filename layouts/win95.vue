<template>
	<div class="win95">
		<header>
			<h1>STUIX</h1>
			<p>Wow such a non-profit IX</p>
		</header>
		<div id="content">
			<hr />
			<div id="nav">
				<router-link v-for="(item, i) in items" :key="i" :to="item.to">
					<button :class="($store.state.page == item.to ? 'active' : '')">{{ item.title }}</button>
				</router-link>
			</div>
			<hr />
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
	</div>
</template>
<style lang="sass">
@font-face
	font-family: zpix
	src: url('/zpix.woff2'),url('/zpix.ttf')
body.win95theme
	background: url('/img/bg.jpg')
	background-size: 256px
.win95
	font-family: 'zpix','Times New Roman', Times, '新細明體', 'Noto Sans TC', serif
	max-width: 768px
	margin: 0 auto
	hr
		margin-top: initial
		border: initial
	header
		text-align: center
		h1
			font-size: 86px
			background-image: linear-gradient(to left, orange , yellow, green, cyan, blue, violet)
			-webkit-background-clip: text
			-webkit-text-fill-color: transparent
			display: inline
			filter: drop-shadow(-4px 4px 0px rgba(0,0,0,.8))
		p
			font-size: 24px

	#nav
		text-align: center
		a
			padding: 6px 2px
			text-decoration: none
			button
				cursor: pointer
	.input-group
		align-items: center
		gap: 4px
	.form-control
		padding: 3px 4px
		box-shadow: inset -1px -1px #fff, inset 1px 1px grey, inset -2px -2px #dfdfdf, inset 2px 2px #0a0a0a
		background-color: #fff
		box-sizing: border-box
		max-width: 200px
		height: 1.5em
		border-radius: 0
		outline: none
		border: none
		&::placeholder
			color: #fff
	button.active
		box-shadow: inset -1px -1px #ffffff, inset 1px 1px #0a0a0a, inset -2px -2px #dfdfdf, inset 2px 2px #808080
	.btn
		border-width: 2px
		border-style: outset
		border-color: buttonface
		border-right-color: #424242
		border-bottom-color: #424242
		background: silver
		color: black
		padding: 0 0 4px
		border-radius: 1px
		transition: none
		&:hover
			border: 2px inset #fff
			background: silver
			color: #424242
			box-shadow: -1px -1px #000

		&:focus
			border: 2px inset #fff !important
			background: silver
			color: #424242
			box-shadow: -1px -1px #000 !important
			outline: 0 !important
			background: url(/img/background.jpg)

		&:active
			border: 2px inset #fff !important
			color: #424242
			box-shadow: -1px -1px #000 !important
			outline: 0 !important
			background: url(/img/background.jpg)
</style>
<script>
import 'assets/index.sass'

export default {
	data() {
		return {
			items: [
				{
					title: 'Home',
					to: '/'
				},
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
	}
}
</script>
