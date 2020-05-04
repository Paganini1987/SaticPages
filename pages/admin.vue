<template>
	<div class="container">
		<div class="row">
			<div class="col-md-12 mb-3">
				<h1>Админка сайта</h1>
			</div>
			<div class="col-md-12 mb-5">
				<form @submit.prevent="submit">
					<div class="form-group">
						<label for="exampleInputEmail1">Заголовок</label>
						<input v-model="title" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Введите заголовок">
					</div>
					<div class="form-group">
						<label for="exampleFormControlTextarea1">Текст поста</label>
						<textarea v-model="text" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
					</div>
					<button type="submit" class="btn btn-primary mt-3" :disabled="saving">{{ saving ? 'Сохраняю...' : 'Сохранить' }}</button>
				</form>
			</div>
			<div class="col-md-6">
				<div class="card">
					<div class="card-body">
						<h5 class="card-title">Card title</h5>
						<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Admin',
	data() {
		return {
			title: '',
			text: '',
			saving: false
		}
	},
	methods: {
		submit () {
			this.saving = true

			this.$store.dispatch('posts/savePost', {
				title: this.title,
				text: this.text,
				date: new Date()
			})
				.then((response)=>{
					this.title = ''
					this.text = ''
					alert('Пост сохранен!')
				})
				.catch((error)=>{
					console.log('error');
				})
				.finally(()=>{
					this.saving = false
				})
		}
	}
}
</script>

<style>

</style>