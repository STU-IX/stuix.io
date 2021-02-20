<template>
	<div class="container">
		<b-form @submit.prevent="sendForm">
			<b-form-group label="ASN *" label-for="ASN">
				<b-form-input id="ASN" v-model="form.ASN" placeholder="ASN" required></b-form-input>
			</b-form-group>
			<b-form-group label="Network Name *" label-for="Network_Name">
				<b-form-input id="Network_Name" v-model="form.Network_Name" placeholder="Network Name" required></b-form-input>
			</b-form-group>
			<b-form-group label="Contact Email *" label-for="Email">
				<b-form-input id="Email" type="email" v-model="form.Email" placeholder="Contact Email" required></b-form-input>
			</b-form-group>
			<b-form-group label="Website" label-for="Website">
				<b-form-input id="Website" v-model="form.Website" placeholder="Website"></b-form-input>
			</b-form-group>
			<div style="text-align:center">
				<b-button type="submit" style="padding: 10px 40px">Submit</b-button>
			</div>
		</b-form>
		<b-modal id="success-alert" ok-only>
			<template #modal-title>Message</template>
			Sent successfully!
		</b-modal>
	</div>
</template> 
<script>
export default {
	layout: ({ layout }) => layout,
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

				//reset form
				this.form = {
					ASN: '',
					Network_Name: '',
					Email: "",
					Website: ''
				}
				this.$bvModal.show('success-alert')
			} catch (e) {
				alert('Error: ' + e)
			}
		}
	}
}
</script>
