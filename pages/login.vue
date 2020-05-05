<template>
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<form @submit.prevent="login">
					<div class="form-group">
						<label for="exampleInputEmail1">Email</label>
						<input v-model="email" type="email" class="form-control" id="exampleInputEmail1" placeholder="Введите email">
					</div>
					<div class="form-group">
						<label for="exampleInputPassword1">Пароль</label>
						<input v-model="password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Введите пароль">
					</div>
					<button type="submit" class="btn btn-primary">Войти</button>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Login',
	data () {
		return {
			email: '',
			password: ''
		}
	},
	methods: {
		login() {
			this.$store.dispatch('getToken', {email: this.email, password: this.password})
				.then(response=>{
					this.$router.push('/')
				})
				.catch(err=>{
					alert(err);
				})
		}
	}
}
</script>

<style>

</style>