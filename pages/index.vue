<template>
	<div class="container">
		<div class="row">
			<div class="col-md-12 mb-3">
				<h1>Записи блога</h1>
			</div>
			<div class="col-md-12 mb-4">
				<div class="btn-group">
					<button @click="showSort = !showSort" type="button" class="btn btn-secondary dropdown-toggle" :class="{ show: showSort }" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						Сортировать
					</button>
					<div class="dropdown-menu" :class="{ show: showSort }">
						<a class="dropdown-item" href="#">Сначала новые</a>
						<a class="dropdown-item" href="#">Сначала старые</a>
					</div>
				</div>
			</div>
			<div class="col-md-6 mb-2" v-for="(post, index) in posts" :key="index">
				<div class="card">
					<div class="card-body">
						<h5 class="card-title">{{ post.title }}</h5>
						<p class="card-text">{{ post.text }}</p>
						<p class="card-text"><small class="text-muted">Добавлено {{ post.date | dateFormat }}</small></p>
						<!-- <a href="#" class="btn btn-primary"  @click.prevent="openPost(post)">Go somewhere</a> -->
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

export default {
	async fetch({store}) {
		if (store.getters['posts/posts'].length === 0) {
			await store.dispatch('posts/getPosts')
		}
	},
	data() {
		return {
			showSort: false
		}
	},
	head () {
		return {
			title: 'Супер блог',
			meta: [
				// hid is used as unique identifier. Do not use `vmid` for it as it will not work
				{ hid: 'description', name: 'description', content: 'Страниица записей блога' }
			]
		}
	},
	computed: {
		posts() {
			return this.$store.getters['posts/posts']
		}
	},
	filters: {
		dateFormat(val) {
			return new Date(val).toLocaleDateString()
		}
	}
}
</script>

<style>
.card {
	height: 100%;
}
</style>
