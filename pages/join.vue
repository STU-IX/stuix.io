<template>
	<div>
		<form @submit.prevent="sendForm">
			<div class="field-row-stacked" style="width: 200px">
				<label for="ASN">ASN:</label>
				<input required type="text" id="ASN" v-model="form.ASN" />
			</div>
			<div class="field-row-stacked" style="width: 200px">
				<label for="Network_Name">Network Name:</label>
				<input required type="text" id="Network_Name" v-model="form.Network_Name" />
			</div>
			<div class="field-row-stacked" style="width: 200px">
				<label for="Email">Contact Email:</label>
				<input required type="email" id="Email" v-model="form.Email" />
			</div>
			<div class="field-row-stacked" style="width: 200px">
				<label for="WebSite">Website (optional):</label>
				<input type="text" id="WebSite" v-model="form.Website" />
			</div>
			<br />
			<button type="submit">Submit</button>
		</form>
		<div class="alert-window-dimmer" v-show="successAlert"></div>
		<div class="alert-window-container" v-show="successAlert">
			<div class="alert-window window" style="width: 300px">
				<div class="title-bar">
					<div class="title-bar-text">STUIX</div>
					<div class="title-bar-controls">
						<button aria-label="Minimize"></button>
						<button aria-label="Maximize"></button>
						<button aria-label="Close"></button>
					</div>
				</div>
				<div class="window-body">
					<img src="/img/msg_information-0.png" style="float:left;margin-right: 16px" />
					<p>Sent successfully!</p>
					<section class="field-row" style="justify-content: flex-end">
						<button @click="successAlert=false">OK</button>
					</section>
				</div>
			</div>
		</div>
	</div>
</template>
<style lang="sass" scoped>
.alert-window-dimmer
	background: rgba(0,0,0,.7)
.alert-window-container,.alert-window-dimmer
	position: fixed
	width: 100vw
	height: 100vh
	left: 0
	right: 0
	top: 0
	bottom: 0
	.alert-window
		position: absolute
		left: 0
		right: 0
		top: 100px
		margin: auto
</style>
<script>
export default {
	data() {
		return {
			page: '/join/',
			title: 'Join',
			successAlert: false,
			form: {
				ASN: '',
				Network_Name: '',
				Email: "",
				Website: ''
			}
		}
	},
	mounted() {
		this.$store.commit('updatePage', this.page)
		this.$store.commit('updateTitle', this.title)

	},
	methods: {
		async sendForm() {
			let data = new FormData();
			data.append("entry.735801221", this.form.ASN);
			data.append('entry.1685649755', this.form.Network_Name);
			data.append('entry.1524064560', this.form.Email);
			data.append('entry.1229920969', this.form.Website);
			try {
				await fetch('https://docs.google.com/forms/d/e/1FAIpQLSdYEP9EB3SsZlpPPzV73_WpIF4D3CeqAwMko-ZBdcpjO7CNkw/formResponse', { method: 'post', body: data, mode: 'no-cors' })
			} catch (e) {
				alert('Error: ' + e)
			}
			//reset form
			this.form = {
				ASN: '',
				Network_Name: '',
				Email: "",
				Website: ''
			}
			this.successAlert = true
		}
	}
}
</script>
