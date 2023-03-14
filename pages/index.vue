<template>
  <div class="index-container">
    <div class="container">
      <div class="home-about">
        <div class="content">
          <p>Student& Technology United Internet Exchanges</p>
          <p>A community-based Internet Exchanges</p>
          <p>
            <a href="https://ixpm.stuix.io">Traffic &amp; Status (IXP Manager)</a>
          </p>
        </div>
        <div class="image-box">
          <img class="server" src="/img/server.jpg" width="256px" />
          <img
            class="logo"
            src="//raw.githubusercontent.com/STU-IX/branding/main/Logo/Logo.svg"
            width="128px"
          />
        </div>
      </div>
    </div>
    <div class="join-info">
      <div class="container">
        <div class="content">
          <h3>Join STUIX!</h3>
          <!--div blah blah blah-->
        </div>
        <div class="join-button">
          <b-button to="/join" block="block">Join</b-button>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="sass" scoped>
.index-container
	display: flex
	flex-direction: column
	min-height: calc(var(--vh) * 100 - 56px)
	.win95 &
		min-height: initial
	&>.container
		flex: 1
		display: flex
</style>
<style lang="sass">
.home-about
	display: flex
	justify-content: center
	align-items: center
	width: 100%
	.image-box
		position: relative
		width: 300px
		height: 244px
		text-align: right
		img
			box-shadow: 0 8px 9px -5px rgba(0,0,0,.2),0 15px 22px 2px rgba(0,0,0,.14),0 6px 28px 5px rgba(0,0,0,.12)
			border-radius: 4px
			.win95 &
				box-shadow: 10px 10px 0 0 rgba(0, 0, 0, .5)
				border-radius: 0
		.logo
			position: absolute
			left: -20px
			top: 80px
		.server
			transform: translate(0,20px)
	.content
		flex: 1
.join-info
	background-color: rgba(0, 0, 0, 0.05)
	padding: 40px 0
	.win95 &
		background: silver
	.container
		display: flex
		align-items: center
		.content
			flex: 1
		.join-button
			width: 120px
			.btn
				padding: 10px 0
@media screen and (max-width: 768px)
	.home-about
		flex-direction: column-reverse
		.content
			flex: initial
		.content,.image-box
			text-align: center
		.image-box
			height: auto
			margin: 20px 0
			.server
				display: none
			.logo
				position: initial
</style>
<script>
export default {
  layout: ({ layout }) => layout,
  data() {
    return {
      page: '/',
      title: 'Home'
    }
  },
  mounted() {
    this.$store.commit('updatePage', this.page)
    this.$store.commit('updateTitle', this.title)
  }
}
</script>
